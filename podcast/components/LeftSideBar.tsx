import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LeftSideBar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6 '>
            <Link href="/">
            <Image src={""}/>
            
            </Link>
        </nav>
    </section>
  )
}

export default LeftSideBar