import { useState } from "react"

export const LoggedIn = () => {

    type AuthDetails = {
        email:string,
        password:string
    }

    const [user, setLoggedIn] = useState<AuthDetails | null >(null)

    const handleLoggedIn = () => {
        setLoggedIn({
            email:'mujahid',
            password:'1234'
        })
    }
    const handleLoggOut = () => {
        setLoggedIn(null)
    }

    return(
        <>
            <button onClick={handleLoggedIn}>Logged In</button>
            <button onClick={handleLoggOut}>Logged Out</button>
            <h1>User is Logged {user?.email}</h1>
            <h1>User is LoggedOut {user?.password}</h1>

        </>
    )

}