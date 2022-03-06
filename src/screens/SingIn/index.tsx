import React from 'react'

import { Input } from '@components/Input/index';

import { Container } from './styles';
import { Button } from '@components/Button';

export function SingIn() {
    return (
        <Container>
            <Input
                placeholder='E-amil'
                type='secondary'
                autoCorrect={false}
                autoCapitalize='none'
            />

            <Input
                placeholder='Senha'
                type='secondary'
                secureTextEntry
            />

            <Button
                title='Entrar'
                type='secondary'
            />
        </Container>
    )
}