
 "use client"
import React from 'react'
import { Button } from './custome-btn'
import { useRouter } from 'next/navigation'

const  RedirectBtn = ({url}:{url:string}) => {
  const router=useRouter()
  const handleClick=()=>{
     router.push(url)
  }
  return (
       <Button onClick={handleClick}>
         visit 
       </Button>
  )
}

export default  RedirectBtn