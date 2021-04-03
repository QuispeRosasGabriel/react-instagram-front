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
                                    (register, loading, error) => {
                                        const onSubmit = ({email, password}) => {
                                            const input = {email, password}
                                            const variables = {input}
                                            register({variables}).then(activateAuth)
                                        }
                                        const errorMessage = !!error && 'Ha ocurrido un problema, prueba con datos diferentes'
                                        return <UserForm disable={loading}  error={errorMessage} title="Registro" onSubmit={onSubmit}/>
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
