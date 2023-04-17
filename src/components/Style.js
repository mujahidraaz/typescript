import React from "react"

type ContainerProps =  {
    styles: React.CSSProperties
}


export const Style = ({styles}, ContainerProps) => {
    return (
        <div style={styles}></div>
    )
}