import React from 'react'

import { Input } from '@components/Input/indext';

import { Container } from './styles';

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
        </Container>
    )
}