import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

  

export default function Home() {
  const navigate = useNavigate();
  const [updateStatus, setUpdateStatus] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [status, setStatus] = useState("");

  const handleUpdateStatus = (id, newStatus) => {
    const token = localStorage.getItem("token");
    axios.patch(`https://worko-br76.onrender.com/referrals/update/${id}`,{status:newStatus},{
      headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json"
      }
    })
    .then((res)=>{
      console.log(res.data)
      GetAllReferral();
      setSelectedId("");
      setStatus("");
      setUpdateStatus(false);
      alert(res.data.msg)
    })      
    .catch((err)=>{
      console.log(err)
    })
    
  };

  const handleAddReferral = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/addReferral");
    } else {
      navigate("/login");
    }
  };

  const GetAllReferral = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://worko-br76.onrender.com/referrals/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setApplicants(res.data);
        console.log("Referrals fetched successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching referrals:", err);
      });
  };

  useEffect(() => {
    GetAllReferral();
  }, []);

  return (
    <Container>
      <Div>
        <p><b>All Referrals</b></p>
        <Button onClick={handleAddReferral}>Add Referral</Button>
      </Div>
      <Div2>
        <Div3>
          {applicants &&
            applicants.map((applicant) => (
              <ApplicantCard key={applicant._id}>
                <h3>Name: {applicant.name}</h3>
                <p>Email: {applicant.email}</p>
                <p>Experience: {applicant.experience} years</p>
                {selectedId === applicant._id ? (
                  <>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="New">New</option>
                      <option value="Evaluated">Evaluated</option>
                      <option value="Hired">Hired</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                    <button
                      onClick={() => handleUpdateStatus(applicant._id, status)}
                    >
                        
                      Save Status
                    </button>
                    <br/>
                    <button onClick={() => setSelectedId("")}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p>Status: {applicant.status}</p>
                    <button onClick={() => setSelectedId(applicant._id)}>
                      Update Status
                    </button>
                  </>
                )}
              </ApplicantCard>
            ))}
        </Div3>
      </Div2>
    </Container>
  );
}


const Container = styled.div`
width: 100%;
text-align: center;
margin-top:20PX;

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

select{
    width: 80%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    display: block;
    margin-top: 10px;
}
 button{
    background-color: #197b99;
    color: #fff;
    border: none;
    border-radius: 15px;
    padding: 10px;
  
    margin-top: 10px;

 }
`

const Button = styled.button`
background-color: #197b99;
color: #fff;
border: none;
border-radius: 15px;
padding: 7px;
`



