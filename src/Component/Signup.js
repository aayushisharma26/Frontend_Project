import axios from "axios";
import React,{useState,useEffect} from "react";

const Signup=()=>{
const initialValues={name:"",email:"",password:"",phone_number:""};
const [formValues,setFormValues]=useState(initialValues)
const [formErrors,setFormErrors]=useState({})
const [isSubmit,setIsSubmit]=useState(false)

const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(e.target);
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
}


const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    console.log("done");


    axios.post(`https://backendproject-production-e709.up.railway.app/signup`,{
        "name":formValues.name,
        "email":formValues.email,
        "password":formValues.password,
        "phone_number":formValues.phone_number
    
    }).then((data)=>{
        console.log(data,"signup done");

    })
    .catch((data)=>{
        console.log("error",data);
    })
}

useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
    }

},[formErrors])

const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
    if(!values.name){
        errors.name="user name is required!"
    }
    if(!values.email){
        errors.email="user email is required!"
    }
    else if(!regex.test(values.email)){
        errors.email="This in not vailed email"
    }

    if(!values.password){
        errors.password="user password is required!"
    }

    else if(values.password){
        // errors.password="done "
    }
    return errors;
}
    return(
        <> 
        <div className="container">
            <from onSubmit={handleSubmit}>
                <h1 className="signup-hadding">Signup Form</h1>
                <div className="ui form">

                    <div className="filde">
                        <label>Username</label>
                        <input className="input-text" type="text" name="name" placeholder="name"  value={formValues.name} onChange={handleChange}/>
                    </div>

                    <p>{formErrors.name}</p>
                    <div className="filde">
                        <label>Email</label>
                        <input className="input-text" type="email" name="email" placeholder="email" value={formValues.email} onChange={handleChange}/>
                    </div>

                    <p>{formErrors.email}</p>

                    <div className="filde">
                        <label>Password</label>
                        <input className="input-text" type="password" name="password" placeholder="password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password}</p>


                    <div className="filde">
                        <label>Phone</label>
                        <input className="input-text" type="phone" name="phone_number" placeholder="phone_number" value={formValues.phone_number} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.phone_number}</p>

                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
                {
                Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui maessage success">Signed is  successfull</div>) : (
                    <pre>{JSON.stringify(formValues.undefined,2)}</pre>
               )}
            </from>


        </div>       

        </>
    )
}

export default Signup;

