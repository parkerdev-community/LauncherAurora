import clsx from 'clsx';
import {
    CSSProperties,
    ChangeEventHandler,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

import classes from './index.module.scss';
interface InputProps {
    children?: ReactNode;
    type?: 'password' | 'text' | 'number';
    placeholder?: string;
    name?: string;
    style?: CSSProperties;
    value?: string | number;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    classNameOverlay?: string;
    classNameWrapper?: string;
    tooltip?: string | ReactNode;
    prefix?: string;
    annotation?: string;
    error?: boolean | string;
    disabled?: boolean;
    autoComplete?: string;
    spellCheck?: boolean;
    focusOnMount?: boolean;
    disablePadding?: boolean;
    disablePasswordView?: boolean;
    defaultViewState?: boolean;
    subContent?: ReactNode;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
    style,
    type = 'text',
    placeholder,
    name,
    value,
    onChange,
    disabled,
    autoComplete,
    className,
    focusOnMount,
    defaultViewState = false,
    spellCheck = true,
    min,
    max,
    step,
}: InputProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [viewPass, setViewPass] = useState(defaultViewState);

    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (focusOnMount && !disabled) inputEl?.current?.focus();
    }, [focusOnMount, disabled]);
    return (
        <label>
            <input
                style={style}
                className={clsx(classes.input, className)}
                type={viewPass && type === 'password' ? 'text' : type}
                value={value ?? ''}
                disabled={disabled}
                ref={inputEl}
                name={name}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                spellCheck={spellCheck}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </label>
    );
};
