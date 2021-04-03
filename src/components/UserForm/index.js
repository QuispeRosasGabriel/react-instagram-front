import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title, Error } from './styles';

export const UserForm = ({ onSubmit, title, error, disabled = false }) => {
    const email = useInputValue('');
    const password = useInputValue('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({email: email.value, password: password.value});
    }
    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder="email@email.com" {...email} />
                <Input disabled={disabled} type="password" {...password} />
                <Button disabled={disabled}>{title}</Button>
            </Form>

            {!!error && <Error>{error}</Error>}
        </>
    )
}
