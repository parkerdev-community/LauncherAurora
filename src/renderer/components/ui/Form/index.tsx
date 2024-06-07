import { FormEventHandler, ReactNode } from 'react';

import classes from './index.module.scss';
import clsx from 'clsx'

interface FormProps {
    children: ReactNode;
    onSubmit: FormEventHandler<HTMLFormElement>;
		className?: string;
}

export const Form = ({ children, onSubmit, className }: FormProps) => {
    return (
        <form onSubmit={onSubmit}  className={clsx(classes.form, className)}>
            {children}
        </form>
    );
};
