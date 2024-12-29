import React from 'react'
import bag from "@/public/bag.png"
import shoes from "@/public/shoes.png"
import shoes1 from "@/public/shoes1.png"
import Image from 'next/image'
const Specialcard = () => {
  return (
    <>
    <div className='flex text-3xl  border m-4 border-black'>
       <div>
        <h1>helo</h1>
        <Image src={bag} alt='bag' width={300} height={10}/>
        </div> 
    </div>
    </>
  )
}

export default Specialcard