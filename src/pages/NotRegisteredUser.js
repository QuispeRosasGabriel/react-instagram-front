import React from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../context/Context'

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    return (
                        <UserForm />
                    )
                }
            }
        </Context.Consumer>
    )
}
