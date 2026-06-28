import React from 'react'
import Link from 'next/link'
export default function Extra() {
  return (
    <div className='flex gap-10'>
         <Link href={'/Contacts'} className=''> Contacts</Link>
         <Link href={'/About'} className=''> About</Link>
         <Link href={'/Discover'} className=''> Discover</Link>
    </div>
  )
}
