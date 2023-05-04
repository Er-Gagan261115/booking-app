import React, { useState, useEffect } from 'react'

const Mycareer = () => {
    const [details, setdetails] = useState([]);
    useEffect(() => {
        // getimage();
        getdetails();
    }, [])

    const auth = localStorage.getItem('employee');
    let email = JSON.parse(auth).email;

    const getdetails = async () => {
        let employee = await fetch("http://localhost:4000/showdetails")
        employee = await employee.json();
        // console.log(employee);
        setdetails(employee)
        console.log(details.length)
    }

    return (
        <div className='mycareer'>

            
            <h2>Freelancers</h2>
            {
                details.length > 0 ? details.map((item, index) =>
                    // <img src={}></img>
                   
                     <ul className="mycareer_details" key={index}>
                        <img src={`http://localhost:4000/${item.image}`} style={{
                            "width": "200px",
                            "height": "200px",
                            "borderRadius": "50%",
                            "marginTop": "30px"


                        }} />
                        {/* console.log({`http://localhost:4000/${item.image}`}) */}
                        <li>Name : {item.name}</li>
                        <li>Designation : {item.designation}</li>
                        <li>Last company : {item.lastcompany}</li>
                        <li>Experience : {item.experience}</li>
                    </ul>
                   
                )
                    :
                    <h1>No result found</h1>
            }
            
        </div>
    )
}
export default Mycareer