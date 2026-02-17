"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";

const TEST_EMAIL = "test@gmail.com";
const TEST_PASSWORD = "test";

export function TestLoginButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTestLogin = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${API_BASE_URL}/api/v1/signin`,
        { email: TEST_EMAIL, password: TEST_PASSWORD },
        { withCredentials: true }
      );
      router.push("/dashboard");
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      alert(err.response?.data?.message ?? "Test login failed. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleTestLogin}
      disabled={loading}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-amber-500/50 text-amber-400 font-medium hover:bg-amber-500/10 hover:border-amber-500/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Signing in…" : "Try with test account"}
    </button>
  );
}
