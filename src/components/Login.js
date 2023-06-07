import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
// import { blue } from '@mui/material/colors'
// import Navbar from './Navbar'
// import axios from 'axios';
// import { useState,useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";
import {Grid} from '@mui/material'
import {Paper} from '@mui/material'
// import background from './images/background.jpg'
import './Login.css'

const Login = () => {
   
  return (
    <div  >
   

  <div className='a1'>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>

   <h1 className='ll'>LOGIN</h1>  
  <TextField  className='textfield' label="Email" variant="outlined" name='userEmail'/>
  {/* {...register('userEmail')} */}
<br></br><br></br>
  <TextField className='textfield' id="outlined-basic" label="Password" variant="outlined" type='password' name='userPassword'
//  {...register('userPassword')} 
/><br></br><br></br><br></br><br></br>
   <Button className='id' variant='text'>Forgot password?</Button><br></br>
  <Button className='tl' variant="contained">Login</Button><br></br>
  </div>
 
 
  
  </div>
  )
}

export default Login
