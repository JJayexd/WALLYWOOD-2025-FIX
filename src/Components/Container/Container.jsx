export const Container = ({ height, width, className, children }) => {
    return (
        <div height={height} width={width} className={className}>
            {children}
        </div>
    )
}