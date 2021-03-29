import React from 'react'
import { Container } from "./LoginElements"

export const Login = () => {
    return (
        <Container>
            <form>
                <h1>Login</h1>


                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" />

                <button type='button'>Entrar</button>

            </form>
        </Container>
    )
}
