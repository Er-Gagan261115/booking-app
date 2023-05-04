import React, { useState } from 'react'
import pic from './images/homeimage.jpg'
import './Style.css'
import axios from 'axios'
const Details = () => {
    const auth = localStorage.getItem('employee');
    let _email = JSON.parse(auth).email;

    const [name, setname] = useState("");
    const [designation, setdesignation] = useState('');
    const [lastcompany, setlastcompany] = useState('');
    const [experience, setexperience] = useState('');
    const [email, setemail] = useState(_email)
    const [image, setimage] = useState(pic)
    const [toshowimage,settoshowimage]=useState("");
    // console.log(email);

    const Add_new_employee =  () => {

       
        const formData = new FormData()
        formData.append("name", name)
        formData.append("designation", designation)
        formData.append("lastcompany", lastcompany)
        formData.append("experience", experience)
        formData.append("email", email)
        formData.append("image", image)
         axios.post("http://localhost:4000/details", formData)
         setname("");
         setdesignation("");
         setlastcompany("");
         setexperience("");
         setemail("");
         settoshowimage(pic);
    }
    
const handleonchange=async (e)=>{
    setimage(e.target.files[0]);
    const img = await convertTobase64(e.target.files[0]);
    console.log(img);
    settoshowimage(img);
}
    return (
        <div >
            <div className="landingbackground">
            <div className='landingbackgrounddiv'><h2>WELCOME</h2></div>
             </div>
        <div className='home_form_body'>
            <form  >
                <h2 className='home_form_body_about'>About</h2>

                <img src={toshowimage || pic} alt="" style={{
                    "width": "200px",
                    "height": "200px",
                    "borderRadius": "50%"

                }}>

                </img>

                <input
                    type="file"
                    onChange={handleonchange}
                    style={{
                        "color": "rgb(234, 254, 251)",
                        "marginLeft": "170px",

                    }}
                />


                <div className='home_form_details'>
                    <input placeholder='Enter Name' type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input placeholder='Enter Designation ' type="text" value={designation} onChange={(e) => { setdesignation(e.target.value) }} />
                    <input placeholder='Last company you worked for' type="text" value={lastcompany} onChange={(e) => { setlastcompany(e.target.value) }} />
                    <input placeholder='Experience' type="text" value={experience} onChange={(e) => { setexperience(e.target.value) }} />
                    <button  type="button" onClick={Add_new_employee} >Submit</button>
                </div>
            </form>

        </div>
        </div>
    )
}
export default Details

// coverting image to  base64
function convertTobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.oneError = (error) => {
            reject(error)
        }
    })
}