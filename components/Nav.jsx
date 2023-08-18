"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { set } from "mongoose";
import { useState } from "react";
const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const isUserLoggedIn = true;

  useEffect(() => {
    const setProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setProviders();
  }, []);

  return (
    <nav className=" flex-between w-full mb-16 pt-3 pb-3 px-4">
      <Link href="/" className="flex flex-center gap-2 cursor-pointer">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="logo"
          className="object-contain "
        />
      </Link>
      <p className="logo_text">chat app</p>

      {/* destop application */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex flex-center gap-3 md:gap-5">
            <Link href="/Prompt" className="black_btn ">
              Create post
            </Link>

            <button className=" outline_btn">sign out</button>
            {/* profile link */}
            <Link href={"/profile"}>
              <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                alt="logo"
                className="object-contain  "
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div key={provider.name}>
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    >
                      sign in with {provider.name}
                    </button>
                  </div>
                );
              })}
          </>
        )}
      </div>

      {/* mobile application */}
      <div className="sm:hidden flex relative">
        {/* profile link */}

        {isUserLoggedIn ? (
          <div className="flex">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="object-contain  rounded-full cursor-pointer"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          {
            toggleDropdown && (
              <div className="absolute top-10 text-black p-3 right-0 bg-white shadow-md rounded-md "
                      style={{width: "200px"}}
              >
                <Link  href="/Profile" className="w-full text-left "
                >Profile</Link>
                <button className='w-full  text-left hover:bg-gray-200 rounded' 
                onClick={() => signOut()}
                >Sign out</button>
              </div>
            )
          }
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div key={provider.name}>
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    >
                      sign in with {provider.name}
                    </button>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
