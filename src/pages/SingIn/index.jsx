import { useState } from 'react';
import { useAuth } from '../../hooks/auth.jsx';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Container, Form, Background } from './styles.js';

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { singIn } = useAuth();

    function handleSingIn() {
        singIn({ email, password });
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus <strong>links</strong> úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSingIn} />

                <Link to="/register">
                    Criar Conta
                </Link>            
            </Form>

            <Background />

        </Container>
    );
}