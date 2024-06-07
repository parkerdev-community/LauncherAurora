import { TopBar } from '../TopBar';
import classes from './index.module.scss';
export const Error = () => {
    return (
        <>
            <TopBar />
            <div className={classes.error}>
                <div className={classes.block}>
                    <h2>Упс... ошибочка</h2>
                    <p>
                        К сожалению, у нас что-то пошло не так. Попробуйте
                        перезагрузить приложение либо зайти позже. Если ошибка
                        повторяется, сообщите администраторам.
                    </p>
                </div>
            </div>
        </>
    );
};
