import { RiLock2Line, RiMailLine } from '@remixicon/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo1.jpeg'
// import * as Yup from 'yup'
// import { useFormik } from 'formik'

const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    let [errorMsg, setErrorMsg] = useState(null);
  
    const navigate = useNavigate();
  
    const checkField = () => {  
        setErrorMsg(null) 
        if(email === ''){ setIsValid(false) }else{ setIsValid(true) }
        if(password === ''){ setIsValid(false) }else{ setIsValid(true) }
    }


    const handleLogin = (e) => {
      checkField();
      e.preventDefault();
      const user = {
          email,
          password,
      };
  
      loginUser(user);
   }
  
  const loginUser = async (user) => {
    try {
        const res = await fetch(`http://localhost:4000/users?email=${email}&password=${password}`);
            
        const data = await res.json(); 
        
        if (data != '' && isValid) { 
            return navigate(`/home`);
        }
        setErrorMsg("Invalid login credentials !");
    } catch (error) {
        setErrorMsg("Error while login user "+ error);
        console.log("Error while login user ", error); 
    } 
    finally {
      setIsValid(false);
    }
  }





//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema: Yup.object({
//       email: Yup.string().email('Invalid email').required('Email required'),
//       password: Yup.string().min(6, 'Minimum 6 alpha numeric characters!').required('Password required'),
//     }),
//     onSubmit: ({ ...values }) => {
//         handleLogin();
//     }
//   });


  return (
    <main className='bg-accent/35 p-3 h-screen flex items-center'>
        <form className="login-form" onSubmit={handleLogin}> 

            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col items-center gap-1'>
                <span className='capitalize flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-6 h-6' />
                    <span>Login</span>
                </span>
                <div className='border-t-[3px] border-orange-400 w-[6rem]' />
            </div>

            <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">
                <div className="input-div">
                    <label htmlFor="email" className="label">
                        <RiMailLine size={15} />
                        <span>Email</span>
                    </label>
                    <input type="text" id="email" name="email" placeholder='Email' className='input-field'
                     value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>

            <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">
                <div className="input-div">
                    <label htmlFor="password" className="label">
                        <RiLock2Line size={15} />
                        <span>Password</span>
                    </label>
                    <input type="password" id="password" name="password" placeholder='password' className='input-field'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <p className='mt-2 text-sm text-red-400'> {errorMsg} </p>
            </div>

            <div className="flex justify-between w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">               
                <button className={`btn-create !w-fit ${!isValid ? 'disabled:opacity-60 disabled:cursor-not-allowed' : ''}`} disabled={!isValid} onMouseOver={checkField}>
                    Sign in
                </button>
                
                <NavLink to={`/register`} className='btn-register !w-fit'>Sign up</NavLink>
            </div>
                
        </form>
    </main>
  )
}

Login.propTypes = {}

export default Login