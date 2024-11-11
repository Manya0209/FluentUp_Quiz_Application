import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
//import Container from '@mui/material/Container';
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const nameRegex = /^[a-zA-Z ]+$/;

export const Register= () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const nameRef= useRef()
  const phoneRef= useRef()

  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const doRegister= async ()  =>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
      'name': nameRef.current.value,
      'phone': phoneRef.current.value,
    }

    if (!emailRegex.test(emailRef.current.value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
    if (pwdRef.current.value.length < 8) {
      setPwdError('Password must be at least 8 characters');
    } else {
      setPwdError('');
    }
    if (!nameRegex.test(nameRef.current.value)) {
      setNameError('Invalid name format');
    } else {
      setNameError('');
    }
    if (!phoneRegex.test(phoneRef.current.value)) {
      setPhoneError('Invalid phone number format');
    } else {
      setPhoneError('');
    }

    try{
    const response= await apiClient.post(process.env.REACT_APP_REGISTER_URL,userInfo)
    setMessage(response.message)
    console.log('Response is ', response)
    console.log('User Info ', userInfo)
    }
    catch(err){
      setMessage('Register Fail..')
      console.log('Error is ', err)
    }
  }

  return (
    <Container maxWidth="sm" style={{ height: '86vh', display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop:'62px' }}>
    <Grid container spacing={2} direction="column" style={{ height: '80vh', width:'80vh', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#FEF7E5', justifyContent: 'center', alignItems: 'center' }}>
    <Grid item mt={2} style={{ display: 'flex', flexDirection: 'column' }}>
    <p>{message}</p>
      <TextField inputRef={emailRef} label="Email" variant="outlined" />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
    </Grid>
    <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField inputRef={pwdRef} type="password" label="Password" variant="outlined" />
      {pwdError && <div style={{ color: 'red' }}>{pwdError}</div>}
    </Grid>
    <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField inputRef={nameRef} label="Name" variant="outlined" />
      {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
    </Grid>
    <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField inputRef={phoneRef} label="Phone" variant="outlined" />
    </Grid>
    {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
    <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
      <Button onClick={doRegister} variant="contained" style={{ backgroundColor: '#CD9692', color: '#fff', }}>Register Yourself</Button>
    </Grid>
    <p>If already registered? <Link to="/login" style={{ color: '#9C9797', fontWeight:'bold' }}>Login</Link></p>
  </Grid>
  </Container>
  )
}