import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
//import Container from '@mui/material/Container';
import { Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Login = () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const [message, setMessage]= useState('')

  const doLogin= async ()=>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
    }
    try{
      const response = await apiClient.post(process.env.REACT_APP_LOGIN_URL,userInfo);
      console.log(response);
      // setMessage(response.message)
      // console.log(response)
      }
      catch(err){
        setMessage('Login Fail..')
        console.log('Error in login', err)
      }
  }
  return (
    <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} direction="column" style={{ height: '60vh', width:'80vh', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#FEF7E5', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item mt={2}>
          <p style={{ color: '#987D9A' }}>{message}</p>
          <TextField inputRef={emailRef} label="Email" variant="outlined"  />
        </Grid>
        <Grid item>
          <TextField inputRef={pwdRef} type="password" label="Password" variant="outlined" />
        </Grid>
        <Grid item>
          <Button onClick={doLogin} variant="contained" style={{ backgroundColor: '#CD9692', color: '#fff' }}>Login</Button>
        </Grid>
      </Grid>
    </Container>
  )
}