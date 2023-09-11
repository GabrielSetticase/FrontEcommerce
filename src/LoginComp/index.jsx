import React, { useEffect, useState } from 'react'
import { AuthForm } from "./login"
import { RegisterComp } from './register'

export const LoginComp = ({ loguear, setIsAdmin }) => {

    const [isRegitered, setIsRegistered] = useState(true)
    return (
        <div>
            {
                isRegitered ?
                    <AuthForm
                        loguear={loguear}
                        setIsRegistered={setIsRegistered}
                        setIsAdmin={setIsAdmin}
                    /> :
                    <RegisterComp
                        setIsRegistered={setIsRegistered}
                    />
            }
        </div>
    )
}
