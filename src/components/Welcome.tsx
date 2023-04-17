type greeting = {
    name: string,
    student: number,
    isLoggedin: boolean
}


export const Welcome = (props: greeting) => {
    return (
        <>
            {!props.isLoggedin ? <h1>Welcome {props.name} | {props.student} Students</h1> : <h1>User Logged in</h1>}
        </>
    )
}