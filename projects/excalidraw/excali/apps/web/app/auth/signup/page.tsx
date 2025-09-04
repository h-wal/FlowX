"use client"; 
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    console.log(email, password)
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3008/signup", 
        {
          username: username,
          email: email,
          password: password
        });
  
      console.log(res.data);
      //add a status check
      alert("Sign-up successful!");
      router.push("/auth/signin")

    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "Sign-up failed");
    }
    
  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-15 bg-white shadow-lg rounded-lg border border-gray-200">

            <h2 className="text-2xl font-bold mb-4 p-4 text-center">Sign Up</h2>

            <input
                type="name"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <button
                type="submit"
                className="w-full mb-6 bg-blue-900 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
            >
                Sign Up
            </button>

        </form>
    </div>
  );
}
