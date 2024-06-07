import { Server } from '@aurora-launcher/core';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { LoadProgress } from '../../../common/types';
import { ConditionalRenderer } from '../../components';
import { usePingServer, useTilteBar } from '../../hooks';
import { bytesToSize } from '../../utils';
import classes from './index.module.scss';

// TODO Refactoring scene
export const ServerPanelPage = () => {
    const [selectedServer, setSelectedServer] = useState<Server>();
    const players = usePingServer(selectedServer);

    const [showConsole, setShowConsole] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const consoleRef = useRef() as MutableRefObject<HTMLPreElement>;
    const progressLine = useRef() as MutableRefObject<HTMLDivElement>;
    const progressInfo = useRef() as MutableRefObject<HTMLDivElement>;

    const { showTilteBarBackBtn, hideTilteBarBackBtn } = useTilteBar();

    useEffect(() => {
        launcherAPI.scenes.serverPanel.getServer().then(setSelectedServer);

        showTilteBarBackBtn();
    }, []);

    const startGame = () => {
        hideTilteBarBackBtn();
        setShowConsole(true);
        consoleRef.current?.replaceChildren();
        setGameStarted(true);
        launcherAPI.scenes.serverPanel.startGame(
            textToConsole,
            progress,
            stopGame,
        );
    };

    const stopGame = () => {
        setGameStarted(false);
        showTilteBarBackBtn();
    };

    const textToConsole = (string: string) => {
        const consoleEl = consoleRef.current;
        if (!consoleEl) return;

        consoleEl.appendChild(document.createTextNode(string));
        consoleEl.scrollTop = consoleEl.scrollHeight;
    };

    const progress = ({ total, loaded, type }: LoadProgress) => {
        if (loaded < total) setShowProgress(true);

        const percent = (loaded / total) * 100;

        if (progressLine.current) {
            progressLine.current.style.width = percent.toFixed(2) + '%';
        }
        setShowProgress(percent < 100);

        if (!progressInfo.current) return;

        if (type === 'count') {
            progressInfo.current.innerHTML = `Загружено ${loaded} из ${total}`;
        } else {
            progressInfo.current.innerHTML = `Загружено ${bytesToSize(
                loaded,
            )} из ${bytesToSize(total)}`;
        }
    };

    return (
        <div className={classes.window}>
            <div className={classes.info}>
                <div className={classes.title}>{selectedServer?.title}</div>
                <div className={classes.status}>
                    <div className={classes.gamers}>
                        Игроков
                        <br />
                        онлайн
                    </div>
                    <div className={classes.line}></div>
                    <div className={classes.count}>
                        {players.online}
                        <div className={classes.total}>из {players.max}</div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <ConditionalRenderer condition={showProgress}>
                    <>
                        <div className={classes.progress}>
                            <div
                                className={classes['progress-line']}
                                ref={progressLine}
                            ></div>
                        </div>
                        <div
                            className={classes['progress-info']}
                            ref={progressInfo}
                        ></div>
                    </>
                </ConditionalRenderer>
                <ConditionalRenderer condition={showConsole}>
                    <pre className={classes.console} ref={consoleRef}></pre>
                </ConditionalRenderer>
            </div>
            <div className={classes.buttons}>
                <button onClick={startGame} disabled={gameStarted}>
                    Играть
                </button>
            </div>
        </div>
    );
};
