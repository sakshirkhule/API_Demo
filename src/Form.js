import './App.css'
import React,{useState} from 'react'
import axios from 'axios';

function Form() {
    const data={fname:"",lname:""};
    const[inputData,setInputData]=useState(data)
    const handleData=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })

    }
  return (
    <>
    <div className="form-container">
  <label style={{ marginRight: '10px' }}>First Name:</label>
  <input 
    type='text' 
    name='fname' 
    value={inputData.fname} 
    onChange={handleData} 
    style={{ marginBottom: '10px', padding: '5px' }} 
  /><br/>

  <label style={{ marginRight: '10px' }}>Last Name:</label>
  <input 
    type='text' 
    name='lname' 
    value={inputData.lname} 
    onChange={handleData} 
    style={{ marginBottom: '10px', padding: '5px' }} 
  /><br/>

  <button onClick={handleSubmit} style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
  <button onClick={handleUpdate} style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}>Update</button>
</div>

    </>
  )
}

export default Form
