import React from "react"

type inputProps = {
    value:string
    InputHandle: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: inputProps) => {
    return ( <input type="text" value={props.value} onChange={props.InputHandle}/> )
}