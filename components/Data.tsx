import React from 'react'

interface Props{
    "title":string;
    "subtitle":string;
    "description":string;
}

export default function Data({title,subtitle,description}:Props) {
  return (
    <div className='border border-black mb-5'>
      <h1 className='font-black'>{title}</h1>
      <h2 className='font-extrabold'>{subtitle}</h2>
      <h3 className='font-medium'>{description}</h3>
    </div>
  )
}
