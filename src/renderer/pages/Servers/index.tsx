import { Server } from '@aurora-launcher/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ServerButton, SkinView } from '../../components';
import { useTilteBar } from '../../hooks';
import classes from './index.module.scss';

export const ServersPage = () => {
    const { hideTilteBarBackBtn } = useTilteBar();
    const [servers, setServers] = useState<Server[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        hideTilteBarBackBtn();
        console.log(
            launcherAPI.scenes.serversList.getServers().then(setServers),
        );
    }, []);
    console.log(servers);
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
