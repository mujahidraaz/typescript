import React from "react"

import {Welcome} from '../Welcome'

export const  CustomComponents = (props: React.ComponentProps<typeof Welcome>) => {
    return <div>{props.name}</div>
}