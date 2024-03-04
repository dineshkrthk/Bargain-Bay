"use client";
import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/SupabaseClient";
const Header = () => {
  const [drop, setDrop] = useState(true);
  const [userdata, setUser] = useState<any>(null);
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      <div className="mx-20 hidden lg:block py-5 border-b-[2px]  ">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/Images/logo.jpeg"
                height={100}
                width={200}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex gap-x-20">
            <li className="list-none cursor-pointer text-lg">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="list-none cursor-pointer text-lg">About</li>
            <li className="list-none cursor-pointer text-lg">Features</li>
            <li className="list-none cursor-pointer text-lg">Blog</li>
          </div>
          <div>
            {userdata ? (
              <div className="flex items-center gap-x-5">
                <div onClick={logout}>
                  <Button variant="primary">Logout</Button>
                </div>
                <Button variant="primary"><Link href={'/dashboard'}>Dashboard</Link></Button>
              </div>
            ) : (
              <Link href={"/login"}>
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden  px-5 border-b-[2px] py-5 justify-between items-center">
        <div>
          <Image src="/Images/logo.jpeg" height={100} width={120} alt="Logo" />
        </div>

        {drop ? (
          <svg
            onClick={() => {
              setDrop(!drop);
            }}
            className="w-10 cursor-pointer"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2 12.32H22"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M2 18.32H22"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M2 6.32001H22"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            onClick={() => {
              setDrop(!drop);
            }}
            className="w-10 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#0F0F0F"
              ></path>{" "}
            </g>
          </svg>
        )}
      </div>

      {!drop ? (
        <div className="bg-white text-lg  flex flex-col px-5 py-5  gap-y-10 grid-cols-1 lg:hidden   z-50 h-full">
          <div className="cursor-pointer">
            <Link href={"/products"}>Products</Link>
          </div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Features</div>
          <div className="cursor-pointer">Blog</div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
