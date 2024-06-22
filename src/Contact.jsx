import React, { useState } from 'react'

const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        email:'',
        msg:'',
    });


    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
            [name]: value,
            };
    });
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My email is ${data.email}. Here is the Message: ${data.msg}`
        );

    };


    return (
        <>
          <div classNameName="my-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" 
                         name="fullname"
                         value={data.fullname}
                         onChange={inputEvent}
                         placeholder="Enter your Full name" />
                      </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" 
                         name="email"
                         value={data.email}
                         onChange={inputEvent}
                         placeholder="Enter your email" />
                      </div>
                      <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Messae</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" 
                         name="msg"
                         value={data.msg}
                         onChange={inputEvent}
                         rows="3"></textarea>
                      </div>
                      <div class="col-12">
                         <button class="btn btn-outline-primary" type="submit">Submit</button>
                       </div>
                    </form>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
};

export default Contact;