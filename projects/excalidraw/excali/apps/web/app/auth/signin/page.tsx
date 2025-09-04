"use client"; // Needed in Next.js App Router for client-side interactivity
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent form reload
    console.log(email , password)

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/interface"; // Redirect after success
    }

  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-15 bg-white shadow-lg rounded-lg border border-gray-200">

            <h2 className="text-2xl font-bold mb-4 p-4 text-center">Sign In</h2>

            <input
                type="text"
                placeholder="Email or Username"
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
                Sign In
            </button>

            <div className="w-full">
              <div className="flex text-red-400 justify-center">
                {error}
              </div>
            </div>

        </form>
    </div>
  );
}
