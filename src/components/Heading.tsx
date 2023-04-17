type PropsHeading = {
    children: string
}


export const Heading = (props: PropsHeading) => {
    return (
        <>
            <h1>{props.children}</h1>
        </>
    )
}