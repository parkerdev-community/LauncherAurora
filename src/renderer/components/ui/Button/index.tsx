import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import classes from './index.module.scss';

interface ButtonsProps {
    disabled?: boolean;
    secondary?: boolean;
    link?: boolean;
    errored?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?:
        | (MouseEventHandler<HTMLButtonElement> &
              MouseEventHandler<HTMLAnchorElement>)
        | undefined;
    type?: 'button' | 'submit' | 'reset';
    to?: any;
    style?: CSSProperties;
}

export const Button = ({
    disabled,
    style,
    className,
    children,
    onClick,
    type = 'button',
    to,
}: ButtonsProps) => {
   const Component = to ? Link : 'button'

    return (
        <Component
            style={style}
            className={clsx(className, classes.button)}
            onClick={!(disabled) ? onClick : undefined}
            type={type}
            disabled={disabled}
            to={!(disabled) ? to : null}
        >
            <span>{children}</span>
        </Component>
    );
};
