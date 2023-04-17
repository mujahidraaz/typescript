 type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Buttons = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event, 2)}>Click Me !</button>
    )
}