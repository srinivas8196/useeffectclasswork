import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Main() {
  const [name , setname] = useState('loading..')
  const [photo,setPhoto] = useState('Loading')
  const [email, setEmail]= useState("loading..")
  const [ gender, setgender] = useState('Loading..')
  const [ age, setage] = useState('Loading..')
  const [ city, setcity] = useState('Loading..')
  const [ phone, setphone] = useState('Loading..')
  const [ country, setcountry] = useState('Loading..')
  // setTimeout(()=>{ console.log ("Hello world"),3000} )
  
  useEffect(
    ()=>{
     axios.get('https://randomuser.me/api/').then(res => {
      console.log(res.data.results[0])
      setname(res.data.results[0].name.first)
      setPhoto(res.data.results[0].picture.large)
      setEmail(res.data.results[0].email)
      setgender(res.data.results[0].gender)
      setage(res.data.results[0].dob.age)
      setcity(res.data.results[0].location.city)
      setphone(res.data.results[0].phone)
      setcountry(res.data.results[0].location.country)
      
     })
    }, [])

  return (

<div className="card">
  <img src={photo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h5 className="card-title">{email}</h5>
    <h5 className="card-title">{gender}</h5>
    <h5 className="card-title">{age}</h5>
    <h5 className="card-title">{city}</h5>
    <h5 className="card-title">{phone}</h5>
    <h5 className="card-title">{country}</h5>

    
    <a href="http://localhost:3000/" className="btn btn-primary">Change User</a>
  </div>
</div>
  )
{/* 
    // <div classNameName="Body">
    // Name : {name}
    // <br></br>
    // photo : {photo}
    // <br></br>
    // E-mail : {email}
    
    // <br></br>
    // Gender : {gender}
    // <br></br>
    // Age : {age}
    // <br></br>
    // City : {city}
    // <br></br>
    // Phone : {phone}
    // <br></br>
   
    // Country : {country}
    
    // </div> */}
  
}

export default Main