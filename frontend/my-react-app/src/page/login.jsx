import { useState } from 'react';
import styled from 'styled-components';




const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // try {
    //   const response = await fetch('http://localhost:8080/user/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });
      
    //   const data = await response.json();
      
    //   if (response.ok) {
    //     localStorage.setItem('token', data.token);
    //     // You can add navigation logic here
    //     alert('Login successful!');
    //   } else {
    //     setError(data.msg || 'Login failed');
    //   }
    // } catch (error) {
    //   setError('Something went wrong. Please try again.');
    //   console.error('Login error:', error);
    // }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 30%;
  margin: auto;   
  text-align: center;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  } 
`;

const Title = styled.h1`
 
  margin-bottom: 20px;
`

const Form = styled.form`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid #646cff;
  
  background: transparent;
  color: white;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #535bf2;
  }
`;

const Button = styled.button`
   width: 30%;
   margin: auto;
  background: #646cff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: #535bf2;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
`;
