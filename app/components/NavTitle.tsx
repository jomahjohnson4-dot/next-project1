import Link from 'next/link'
import React from 'react'


export default function NavTitle() {
  return (
    <div className='flex gap-5'>
        <Link href={'/'} className=''> Home</Link>
        <Link href={'/News'} className=''> News</Link>
        <Link href={'/Sports'} className=''> Sports</Link>
        <Link href={'/Culture'} className=''> Culture</Link>
        <Link href={'/Health'} className=''> Health</Link>
        <Link href={'/Bussiness'} className=''> Bussiness</Link>
        <Link href={'/Politics'} className=''> Politics</Link>
    </div>
  )
}
