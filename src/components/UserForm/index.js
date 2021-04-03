import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input } from './styles';

export const UserForm = ({ onSubmit }) => {
    const email = useInputValue('');
    const password = useInputValue('');

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="email@email.com" {...email} />
            <Input type="password" {...password} />
            <Button>Iniciar sesión</Button>
        </Form>
    )
}
