import { cn } from '@/lib/utils'
import React from 'react'

export default function Logo({className}:{className?:string}) {
  return (
    <div className={cn(``,className)}>
        <span className='text-yellow-400'>N</span>
        <span className='text-blue-400'>E</span>
        <span className='text-red-400'>W</span>
        <span>S</span>
    </div>
  )
}
