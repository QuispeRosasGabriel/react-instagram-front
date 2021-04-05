import React from 'react'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
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
                                        };
                                        const errorMessage = !!error && 'Ha ocurrido un problema, prueba con datos diferentes';
                                        return <UserForm disable={loading}  error={errorMessage} title="Registro" onSubmit={onSubmit}/>
                                    }
                                }
                            </RegisterMutation>
                            <LoginMutation>
                                {
                                    (login, loading, error) => {
                                        const onSubmit = ({email, password}) => {
                                            const input = {email, password}
                                            const variables = {input}
                                            login({variables}).then(activateAuth)
                                        };
                                        const errorMessage = !!error && 'La contraseña no es correcta o el usuario no existe';
                                        return <UserForm disable={loading}  title="Inicia sesión" error={errorMessage} onSubmit={onSubmit}/>
                                    }
                                }
                            </LoginMutation>
                        </>
                    )
                }
            }
        </Context.Consumer>
    )
}
