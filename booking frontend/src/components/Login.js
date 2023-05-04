import React ,{useEffect,useState} from 'react'
 import {useNavigate} from 'react-router-dom'
const Login=()=>{
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('employee');
        if(auth)
        {
            navigate('/');
        }
    })
    const log_in = async()=>{
        // console.log(email,password);
        let result = await fetch('http://localhost:4000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
         result = await result.json();
         console.log(result);
         if(result.name!==undefined)
         {
            localStorage.setItem("employee",JSON.stringify(result))
            navigate('/mycareer')
            
         }
         else{
            alert("Invalid email or password");
         }
    }
return(
    <div >
    <form className='login_form_body' >
    <h2 className='home_form_body_about'>Log-In</h2>

        <div className='home_form_details'>
            
            <input placeholder='Email' type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
            
            <input placeholder='Password' type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button type='button'  onClick={log_in} style={{
                "marginTop": "30px",
                "fontSize": "17px"
            }}>Log In</button>
        </div>
    </form>
</div>
)
}
export default Login;