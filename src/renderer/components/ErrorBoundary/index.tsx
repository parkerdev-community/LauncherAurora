import React, { ErrorInfo, ReactNode } from 'react';

import { Error } from '../Error/Error';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    error: boolean | string;
};

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error: error };
    }

    componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
        console.error(errorInfo);
        //TODO: Сделать запись в лог файл
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }
        return this.props.children;
    }
}
