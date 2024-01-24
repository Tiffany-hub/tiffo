import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" required />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" required />
        </FormGroup>
        <Button type="submit">Sign In</Button>
      </Form>
    </FormContainer>
  );
};

export default SignInForm;
