import React from 'react'
import Data from '../components/Data'
import { data2 } from '@/constants/data'



export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      {data2.map((d)=>(
        <div key={d.title}>
          <Data title={d.title} subtitle={d.subtitle} description={d.description}/>
        </div>
      ))}
      {/* <Data title='News' subtitle='Current ongoing news' description='All over the world'/>
      <Data title='Recent Activity' subtitle='past activities' description='30min and before'/> */}
    </div>
  )
}
