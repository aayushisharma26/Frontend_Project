import React,{useState,useEffect} from "react";
const Signup=()=>{
const initialValues={usename:"",email:"",password:""};
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
    if(!values.usename){
        errors.usename="user name is required!"
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

    else if(values.password<=8){
        errors.password="password must be less then 10  "
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
                        <input className="input-text" type="text" name="usename" placeholder="usename"  value={formValues.usename} onChange={handleChange}/>
                    </div>

                    <p>{formErrors.usename}</p>
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
                        <input className="input-text" type="phone" name="phone" placeholder="phone" value={formValues.phone} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.phone}</p>

                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
                {
                Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui massage success">Signed is  successfull</div>) : (
                    <pre>{JSON.stringify(formValues.undefined,2)}</pre>
               )}
            </from>


        </div>       

        </>
    )
}

export default Signup;
