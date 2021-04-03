import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './styles';

export const UserForm = ({ onSubmit, title }) => {
    const email = useInputValue('');
    const password = useInputValue('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({email: email.value, password: password.value});
    }
    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="email@email.com" {...email} />
                <Input type="password" {...password} />
                <Button>{title}</Button>
            </Form>
        </>
    )
}
