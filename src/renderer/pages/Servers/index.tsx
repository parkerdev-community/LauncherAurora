import { Server } from '@aurora-launcher/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './index.module.scss';
import { ServerButton, SkinView } from '../../components';
import { useTopBar } from '../../hooks';

export const ServersPage = () => {
    const { hideTopBarBackBtn } = useTopBar();
    const [servers, setServers] = useState<Server[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        hideTopBarBackBtn();
        launcherAPI.scenes.serversList.getServers().then(setServers);
    }, []);

    const selectServer = async (server: Server) => {
        await launcherAPI.scenes.serversList.selectServer(server);
        navigate('/server-panel');
    };
    return (
        <div className={classes.window}>
            <div className={classes.skinView}>
                <SkinView />
            </div>
            <div className={classes.serverList}>
                {servers.map((server, i) => (
                    <ServerButton
                        key={i}
                        server={server}
                        onClick={() => selectServer(server)}
                    />
                ))}
            </div>
        </div>
    );
};
