import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const AddReferral = () => {
    //const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        resume: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        setLoading(true);
        
        try {
            const formDataCloud = new FormData();
            formDataCloud.append('file', file);
            formDataCloud.append('upload_preset', 'hrutik');
          
            
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dgm6whxvh/upload',
                formDataCloud
            );
            
            setFormData({
                ...formData,
                resume: response.data.secure_url
            });
            setLoading(false);
        } catch (error) {
            console.error('Error uploading file:', error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)
        // try {
        //     const response = await axios.post('http://localhost:8080/api/referrals', formData);
        //     if (response.status === 201) {
        //         alert('Referral added successfully!');
        //         navigate('/referrals');
        //     }
        // } catch (error) {
        //     console.error('Error submitting referral:', error);
        //     alert('Error adding referral. Please try again.');
        // }
    };

    return (
        <Container>
            <h1>Add New Referral</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Experience (years):</Label>
                    <Input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Resume:</Label>
                    <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        required
                    />
                    {loading && <LoadingText>Uploading...</LoadingText>}
                </FormGroup>
                
                <Button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Submit Referral'}
                </Button>
            </Form>
        </Container>
    );
};

export default AddReferral;

const Container = styled.div`
    width: 40%;
    margin:auto;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
    @media (max-width: 768px) {
        width: 80%;
    } 
    @media (max-width: 480px) {
        width: 90%;
    }
`;



const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Label = styled.label`
    font-weight: 600;
    color: #555;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
        outline: none;
        border-color: #4a90e2;
    }
`;

const Button = styled.button`
    padding: 10px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
   
    
    transition: background-color 0.3s;

    &:hover {
        background-color: #357abd;
    }

    &:disabled {
        background-color: #ccc;
        
    }
`;

const LoadingText = styled.p`
    color: #4a90e2;
    text-align: center;
    margin: 0.5rem 0;
`;