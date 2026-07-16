import { useState } from "react";
import "./Todo.css";
const Signup = () => {
    const [formData,setformData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [error,setError] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [successMessage,setSuccessMessage]=useState('')
  const onSubmitForm = (e) => {
    e.preventDefault();
    const newErrors={}
    if(!formData.name.trim()){
        newErrors.name='name is required'
        
    }
     if(formData.email.trim()===''){
        newErrors.email='email is required'
    }
     if(formData.password.trim()===''){
        newErrors.password='password is required'
        
    }
     if(formData.confirmPassword.trim()===''){
        newErrors.confirmPassword='confirmPassword is required'
    }
    if(formData.password!==formData.confirmPassword){
        newErrors.confirmPassword='Passwords doesnt match'
    }
   setError(newErrors);
    if(Object.keys(newErrors).length===0){
        setSuccessMessage('Form Submitted Succesfuly')
    }else{
        setSuccessMessage('')
    }
  };
  const handleInputChange=(e)=>{
   const {name , value} = e.target;
   setformData((prev)=>({
    ...prev,[name]:value
   }))
   setError((prev) => ({
    ...prev,
    [name]: ""
  }));
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" maxLength={50} value={formData.name} onChange={handleInputChange}/>
          {error.name}
        </div>
        <div>
          <label>Email:</label>
          <input name='email' type="email"  value={formData.email} onChange={handleInputChange}/>
          {error.email}
        </div>
        <div>
          <label>Password:</label>
          <input name='password' type="password" minLength={6} value={formData.password} onChange={handleInputChange}/>
          {error.password}
        </div>
        <div>
        <label>Confirm password:</label>
        <input name="confirmPassword" type="password" minLength={6} value={formData.confirmPassword} onChange={handleInputChange}/>
        {error.confirmPassword}
        </div>
        <button type="submit">
            Submit
        </button>
      </form>
      <div>
        {successMessage}
      </div>
    </div>
  );
};
export default Signup;
