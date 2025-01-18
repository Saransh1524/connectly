import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {ReactNode} from 'react'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'component

// this component will wrap all of the pages within it 
// children is of type ReactNode which is a type that represents any valid React child
const HomeLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:px-14">
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout