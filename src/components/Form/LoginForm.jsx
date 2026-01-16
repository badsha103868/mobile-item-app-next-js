"use client"
 
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  // handle login
  const handleLogin =(e)=>{
    e.preventDefault()
    
    // mock login and save data to cookie
    if(email === "badshagolder5@gmail.com" && password === "Badsha1"){
      document.cookie="auth=true; path=/";
      router.push("/items")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
     <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="p-6 border rounded w-80 space-y-4"
      >
        <h2 className="text-xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;