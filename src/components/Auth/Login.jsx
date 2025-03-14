import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 to-black font-sans">
      <div className="w-96 p-8 backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-emerald-500/30 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
        
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Welcome Back</h1>
        <p className="text-emerald-400 mb-8 text-center">Enter your credentials to access your account</p>
        
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
          <div className="relative mb-4">
            <div className="absolute left-4 top-4 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full py-4 pl-12 pr-4 text-gray-100 bg-gray-800/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:border-emerald-500 transition-all duration-300"
              type="email"
              placeholder="Enter Email" 
            />
          </div>
          
          <div className="relative mb-8">
            <div className="absolute left-4 top-4 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full py-4 pl-12 pr-4 text-gray-100 bg-gray-800/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:border-emerald-500 transition-all duration-300"
              type="password" 
              placeholder="Enter Password" 
            />
          </div>
          
          <button 
            className="py-4 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 
            rounded-xl text-white font-medium transform hover:scale-105 
            transition-all duration-300 shadow-lg 
            shadow-emerald-600/30 cursor-pointer">
            Sign In
          </button>
          {/* <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
            <a href="#" className="hover:text-emerald-400 transition-colors">Forgot Password?</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Create Account</a>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;