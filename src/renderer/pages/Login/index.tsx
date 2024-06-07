import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../app/images/logo.png';
import { Button, Form, Input } from '../../components/ui';
import { useModal, useTopBar } from '../../hooks';
import classes from './index.module.scss';

interface userData {
    username: string;
    userUUID: string;
    skinUrl?: string;
}

export const LoginPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { showTopBarUser } = useTopBar();
    const navigate = useNavigate();
    const { showModal } = useModal();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (login.length < 3) {
            return showModal(
                'Ошибка ввода',
                'Логин должен быть не менее 3-ёх символов',
            );
        }

        try {
            await launcherAPI.scenes.login
                .auth(login, password)
                .then((user: userData) => {
                    localStorage.setItem('userData', JSON.stringify(user));
                });
        } catch (error) {
            console.error(error);
        }
        showTopBarUser();
        navigate('/servers-list');
    };

    return (
        <div className={classes.block}>
            <img className={classes.logo} src={logo} alt="Aurora Launcher" />
            <div className={classes.title}>Aurora Launcher</div>
            <p className={classes.decs}>
                Введите логин и пароль,
                <br />
                чтобы продолжить
            </p>
            <Form className={classes.form} onSubmit={onSubmit}>
                <Input
                    className={classes.input}
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <Input
                    className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
                <Button
                    disabled={!login || !password}
                    className={classes.button}
                    type="submit"
                >
                    Войти
                </Button>
            </Form>
        </div>
    );
};
