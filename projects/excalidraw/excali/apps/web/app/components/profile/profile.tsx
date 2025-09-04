"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user?.name;

  return (
    <div id="profile" className="rounded-3xl border bg-indigo-50 p-4 text-black basis-3/12 my-4 ml-1 mr-1 flex justify-center">
      <div className="text-2xl flex items-center content-center">
        Hi, {user ?? "Guest"}
      </div>
    </div>
  );
}
