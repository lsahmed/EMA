import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className="border-2 rounded-xl border-emerald-600 p-20">
            <form 
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required 
                className='text-black border-2 border-emerald-600 bg-transparent rounded-full text-xl py-3 px-5' 
                type="email"
                 placeholder='Enter Email'/>

                <input 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required 
                className='text-black border-2 border-emerald-600 bg-transparent rounded-full text-xl mt-3 py-3 px-5' 
                type="password" 
                placeholder='Enter Password'/>

                <button className='mt-5 bg-emerald-600 rounded-full text-xl py-3 px-20' >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login