import React, {useContext} from 'react'
import { SubmitButton } from '../components/SubmitButton';
import { Context } from '../context/Context'

export const User = () => {
    const {removeAuth} = useContext(Context);
    return (
        <>
            <h1>User</h1>
            <SubmitButton  onClick={removeAuth}>Cerrar sesión</SubmitButton >
        </>
    )
}
