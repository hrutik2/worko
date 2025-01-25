import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Navbar=()=>{
    return(
        <Container>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/signup'>Signup</StyledLink>
            <StyledLink to='/login'>Login</StyledLink>
        </Container>
    )
}
const Container=styled.div`
    width: 98%;
    margin-top:0;
    margin-left:0;
    display: flex;
    justify-content: space-between;
  
    padding:20px;
    background-color:cadetblue;
`
const StyledLink=styled(Link)`
    text-decoration: none;
    color: white;
    
`

