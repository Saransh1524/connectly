"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,

  } from "@/components/ui/sheet"
import { sideBarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import  Image  from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  


import React from 'react'

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[246px]'>
        <Sheet>
  <SheetTrigger asChild>
    <Image
        src='/icons/hamburger.svg'
        width={36}
        height={36}
        alt='hamburger icon'
        className="cursor-pointer sm:hidden"
    />
  </SheetTrigger>
  <SheetContent side="left" className="border-none bg-dark-1">
  <Link href='/' className='flex item-center gap-1'>
        <Image
            src='/icons/logo.svg'
            width={32}
            height={32}
            alt='logo'
            className='max-sm:size-10'/>
            <p className='text-[26px] font-bold text-white max-sm:hidden'>Connectly </p>
            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                <SheetClose asChild>
                    <section className="flex h-full flex-col gap-6 pt-16 text-white">
                    {sideBarLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                    // closes the sidebar when a link is clicked
                    <SheetClose asChild key={link.route}>
                    <Link
                    href = {link.route}
                    key = {link.label}
                    className= {cn('flex gap-4 items-center p-4 rounded-lg w-fullmax-w-60', {
                        'bg-blue-1' : isActive,

                    })} >
                       <Image
                         src={link.imgUrl}
                         alt={link.label}
                         width={20}
                         height={20}
                       />
                       <p className=' font-semibold'>{link.label}</p>
                    </Link>
                    </SheetClose>
                )
            })}
                    </section>
                </SheetClose>
            </div>
    </Link> 
  </SheetContent>
</Sheet>

    </section>
    
  )
}

export default MobileNav