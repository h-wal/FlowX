"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"


export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        console.log(email, password)
        e.preventDefault();

        try {
        const res = await axios.post(
            "http://localhost:3030/api/v1/signin", 
            {
            email: email,
            password: password
            }, { 
                withCredentials: true 
            } );
    
        console.log(res.data);

        
        alert("Sign-In successful!");
        router.push("/dashboard")

        } catch (error: any) {
        console.error(error);
        alert(error.response?.data?.message || "Sign-In failed");
        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
            <div className="w-full max-w-sm p-8 rounded-2xl shadow-lg bg-[#2a2a2a]">

                <h2 className="text-2xl font-semibold text-center text-orange-500 mb-8">
                    Sign In
                </h2>

                <div className="flex flex-col gap-8">
                    
                    <div className="flex flex-col">
                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-xl bg-[#333333] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-xl bg-[#333333] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                        className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 
                                   text-white font-semibold transition shadow-md cursor-pointer"
                        onClick={handleSubmit}
                        >
                        Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
