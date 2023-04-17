import React from "react"
type inputPerson= React.ComponentProps<'input'>
export const CustomInput = (props: inputPerson) => {
    return <input {...props}/>
} 