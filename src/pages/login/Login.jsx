import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrg&dpr=2&h=650&w=940")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 30px;
    width: 37%;
    background-color: white;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 12px 0;
    padding: 10px;
    font-size: 16px;
`;

const Button = styled.button`
    width: 30%;
    padding: 12px 10px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    font-style: 15px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const Error = styled.span`
    color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        onClick={handleClick}
                        disabled={isFetching}
                    >
                        Login
                    </Button>
                    {error && <Error>Something went wrong</Error>}
                </Form>
            </Wrapper>
        </Container>

    );
};

export default Login;
