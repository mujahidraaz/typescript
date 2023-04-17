type OscerProps = {
    children: React.ReactNode
}


export const Oscer = (props:OscerProps) => {
    return (
        <>
            <h1>{props.children}</h1>
        </>
    )
}