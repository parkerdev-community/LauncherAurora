interface ConditionalRendererProps {
    children?: React.ReactNode;
    condition?: boolean;
}
export const ConditionalRenderer = ({
    children,
    condition = false,
}: ConditionalRendererProps) => {
    return condition ? <>{children}</> : null;
};
