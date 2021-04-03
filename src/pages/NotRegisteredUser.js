import React from 'react'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { Context } from '../context/Context'

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    return (
                        <>
                            <RegisterMutation>
                                {
                                    (register) => {
                                        const onSubmit = ({email, password}) => {
                                            const input = {email, password}
                                            const variables = {input}
                                            register({variables}).then(activateAuth)
                                        }
                                        return <UserForm  title="Registro" onSubmit={onSubmit}/>
                                    }
                                }
                            </RegisterMutation>
                            <UserForm  title="Inicia sesión" onSubmit={activateAuth}/>
                        </>
                    )
                }
            }
        </Context.Consumer>
    )
}
