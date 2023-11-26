import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { supabase } from "@/store/supabase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState([]);
  const handleClick = async () => {
    const { data, error } = await supabase.from("Users").select("*");
    console.log(data || error);
    setUsers([...data]);
    if (data) {
    }
  };
  useEffect(() => {
    sendEmails();
  }, [users]);
  const sendEmails = () => {
    users.map((user, index) => {
      fetch(`/api/send?email=${user.Emails}`)
        .then((res) => res.json())
        .then((res) => console.log(index, res));
    });
  };
  return (
    <div className="">
      <div>
        <button className="text-black" onClick={handleClick}>
          Click
        </button>
        {users.map((user, index) => {
          return (
            <h1 key={index} className="text-black m-5">
              {user.Emails}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
