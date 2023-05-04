import React,{useState,useEffect} from 'react'
 import {useNavigate} from 'react-router-dom'
const Signup = ()=>{
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[dob,setdob]=useState("");
    const[name,setname]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("employee")
        if(auth)
        {
            navigate('/')
        }
    })
    
    const submitdata = async()=>{
        
        let result = await fetch('http://localhost:4000/register',{
        method:'post',
        body: JSON.stringify({name,dob,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result = await result.json()
    // console.log(result);
    localStorage.setItem("employee",JSON.stringify(result));
    if(result)
    {
        navigate('/');
    }
}
return(
    <div >
    <form className='signup_form_body' >
    <h2 className='home_form_body_about'>Sign-Up</h2>

        <div className='home_form_details'>
            <input placeholder='Enter Name' type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <input placeholder='Enter DOB' type="date" value={dob} onChange={(e) => { setdob(e.target.value) }} />
            
            <input placeholder='Email' type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
            
            <input placeholder='Password' type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button type='button' onClick={submitdata}>Sign Up</button>
        </div>
    </form>
</div>
)
}
export default Signup;