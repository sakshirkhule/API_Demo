import axios from'axios'
import React, { useEffect, useState } from 'react'

function Demo() {
    const [userdata,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    },[])
  return (
    <div>
         Demo
         {userdata.map((data)=>{
            return(
                <div>{data.name}</div>
            )
         })}
    </div>
  )
}

export default Demo
