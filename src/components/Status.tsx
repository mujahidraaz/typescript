type StatusMessage = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusMessage) => {
   let message 
    if(props.status == "loading") {
        message = "loading..."
    }else if(props.status === 'success') {
        message = 'successfully!'
    }else {
        message = 'error'
    }

    return (
        <>
            <h1>{message}</h1>
        </>
    )
}