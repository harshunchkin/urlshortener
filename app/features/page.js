"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const Short = () => {
    const [URL, setURL] = useState("")
    const [ShortURL, setShortURL] = useState("")
    const [Gen, setGen] = useState("")
    const [copysuccess, setcopysuccess] = useState('')

    const generate = ( ) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "url": URL,
          "shorturl": ShortURL
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setURL("")
            setShortURL("")
            setGen(`${process.env.NEXT_PUBLIC_HOST}/${ShortURL}`)
            setcopysuccess('')
            console.log(result)
            alert(result.message)
          })
          .catch((error) => console.error(error));
    }
    return (
        <div className='h-[calc(100vh-44px)] bg-[#F8FAFC] '>
            <div className='text-center p-12'>
                <h1 className='text-2xl p-4 '>Shorten your URL </h1>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <input minLength={4} value={URL} type="text" placeholder='Input URL' onChange={e => {setURL(e.target.value)}} className='w-[600px] p-4 rounded-lg' />
                    <input minLength={4} type="text" placeholder='Enter your desired URL' className='w-[600px] p-4 rounded-lg' onChange={e => {setShortURL(e.target.value)}} />
                    <button onClick={generate} className='focus:ring-gray-900 focus:ring-1 p-2 rounded-lg border-2 border-gray-500'>Generate</button>
                </div>
            {Gen && 
            <div className='py-4'>
              <h1 className='text-xl '>Your Link has been generated!</h1>
                <div className='text-xl flex justify-center items-center gap-8'>
                  <Link className='p-4' target='_blank' href={Gen}>{Gen}</Link> 
                </div>
            </div>}
          </div>

        </div>
    )
}
export default Short
