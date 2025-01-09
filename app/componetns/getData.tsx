"use client";
import { Button } from '@radix-ui/themes';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

type Data={
    id:number,
    title:string,
    description:string
}


function GetData() {
    const [data,setData]=useState<Data[] | null>(null)

    const handleDelete=async(id:number)=>{
        try {
            const res=await axios.delete(`api/issues/${id}`)
            console.log(res)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    const fetchData=async()=>{
        try {
            const res=await axios.get('/api/issues')
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      {
        data && (
            data.map((x,i)=>(
                <div className='border-2 list-none border-gray-800 mt-2 w-max  p-2' key={i}>
                    <li>Title: {x.title}</li>
                    <li>Desciption: {x.description}</li>
                    <Button onClick={()=>handleDelete(x.id)}>Delete</Button>
                </div>
            ))
        )
      }
    </div>
  )
}

export default GetData
