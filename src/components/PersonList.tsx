import {Name} from './Person.types'

export type typePersonList = {
    names: Name[]
    isLoggedin: boolean
}

export const PersonList = (propos: typePersonList) => {
    return (
        <>
            {propos.isLoggedin ? 'not logged in' : 'logged in'}
            {propos.names.map(name => {
                return (
                    <>
                    <div key={name.fname}>
                        <h1>First Name: {name.fname}</h1>
                        <h1>Last Name: {name.lname}</h1>
                    </div>
                    </>
                )
            })}
        </>
    )
}