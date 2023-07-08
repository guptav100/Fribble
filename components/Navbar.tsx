"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';


const Navbar = () => {
const session = {};

  return (
    <nav className="flex justify-between navbar"> 
      <div className='flex-1 flexStart p-5 gap-10'>
        <Link href="/">
          <Image 
            src="/logo.png"
            width={115}
            height={43}
            alt='Fribble'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                  {link.text}
              </Link>
            ))}
        </ul>
      </div>

      <div className='flex flexCenter gap-4 p-6'>
        {session ? (
          <>
            UserPhoto

            <Link href="/create-project">
              Share Work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )} 
      </div>
    </nav>
  )
}

export default Navbar