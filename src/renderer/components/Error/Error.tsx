import classes from './indeTilteBarle.scss'
export const Error = () => {
    return (
        <>
            <TilteBar />
            <TilteBarassName={classes.error}>
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
