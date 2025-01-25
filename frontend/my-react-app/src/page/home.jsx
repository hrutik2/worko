import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
const applicants = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      experience: 3,
      resume: "https://res.cloudinary.com/demo/resume/john_doe_resume.pdf",
      status: "New",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      experience: 5,
      resume: "https://res.cloudinary.com/demo/resume/jane_smith_resume.pdf",
      status: "Evaluated",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      experience: 2,
      resume: "https://res.cloudinary.com/demo/resume/alice_johnson_resume.pdf",
      status: "Hired",
    },
    {
      name: "Robert Brown",
      email: "robert.brown@example.com",
      experience: 8,
      resume: "https://res.cloudinary.com/demo/resume/robert_brown_resume.pdf",
      status: "Rejected",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      experience: 1,
      resume: "https://res.cloudinary.com/demo/resume/emily_davis_resume.pdf",
      status: "New",
    },
    {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      experience: 4,
      resume: "https://res.cloudinary.com/demo/resume/michael_wilson_resume.pdf",
      status: "Evaluated",
    },
    {
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      experience: 6,
      resume: "https://res.cloudinary.com/demo/resume/sophia_lee_resume.pdf",
      status: "Hired",
    },
    {
      name: "James Taylor",
      email: "james.taylor@example.com",
      experience: 7,
      resume: "https://res.cloudinary.com/demo/resume/james_taylor_resume.pdf",
      status: "Rejected",
    },
  ];
  
  export default function Home(){
  const [applicant, setApplicant] = useState(applicants);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [status, setStatus] = useState("New");
  const handleUpdateStatus = (id) => {
      setUpdateStatus(true);
      
  }
 
  return (
      <Container>
          <Div>
          <p><b>All Referral</b></p>
          <Button>Add Referral</Button>
          </Div>
          <Div2>
             
              <Div3>
                  {applicants.map((applicant) => (
                      <ApplicantCard key={applicant.id}>
                         
                              <h3>Name: {applicant.name}</h3>
                              <p>Email: {applicant.email}</p>
                              <p>Experience: {applicant.experience} years</p>
                              {updateStatus ? (
                                  <select onChange={(e) => setStatus(e.target.value)}>
                                  <option value="New">New</option>
                                  <option value="Evaluated">Evaluated</option>
                                  <option value="Hired">Hired</option>
                                  <option value="Rejected">Rejected</option>
                                  </select>
                              ):(
                                  <p>Status: {applicant.status}</p>
                              )}
                              {updateStatus ? (   
                                  <button onClick={() =>  handleUpdateStatus(applicant.id)}>update status</button>
                              ):(
                                  <button  >update status</button>
                              )}

                         
                      </ApplicantCard>
                  ))}
              </Div3>

              
          </Div2>
      </Container>
  );
};   

const Container = styled.div`
width: 100%;
text-align: center;
`
const Div = styled.div`
width: 60%;
margin:  auto;
display: flex;
justify-content: space-between;
margin-bottom: 30px;
p{
    font-size: 15px;
 }
`
const Div2 = styled.div`
width: 100%;
margin:  auto;
align-items: center;
`
const Div3 = styled.div`
width: 90%;
margin:  auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 20px;
 

`   

const ApplicantCard = styled.div`

background-color:transparent;
border: 1px solid #000;
border-radius: 10px;
padding: 20px;
 button{
    background-color: #197b99;
    color: #fff;
    border: none;
    border-radius: 15px;
    padding: 7px;
 }
`

const Button = styled.button`
background-color: #197b99;
color: #fff;
border: none;
border-radius: 15px;
padding: 7px;
`



