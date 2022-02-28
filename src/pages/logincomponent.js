import { useState } from "react";
import {FaEye} from "react-icons/fa";


export default function Logincomponent()
{
    const [userData,setUserData]=useState({
        userEmail:"",
        userPass:""
    })
    const [errors,setErrors]=useState({
        userEmailErr:"",
        userPassErr:""
    })

    const submitData=(e)=>{
        e.preventDefault()
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    
    const emailRegex = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}[\.com|net]{2,4}$/);
    

    const changeData=(e)=>{console.log(e.target.value) 
        if(e.target.name=="userEmail"){setUserData({...userData,userEmail:e.target.value}) 
        setErrors({...errors,userEmailErr:e.target.value.length===0?"this field is required"
        :!emailRegex.test(e.target.value)?
        "email should contain /^[a-z|0-9]{2,}\@[a-z]{3,}[\.com|net]{2,4}$/"
        :null})}
        else if(e.target.name=="userPass")
        {setUserData({...userData,userPass:e.target.value})
        setErrors({...errors,userPassErr:e.target.value.length===0?"this field is required"
        :e.target.value.length<8?"min length is 8 char":null})}}


    return(<> 
    <div className="container">
      <div className="row">
        <div className="col-md-4 m-auto bg-dark">
    <form onSubmit={(e)=>submitData(e)}>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light mt-2">Email address</label>
    <input type="email" className={`form-control  ${errors.userEmailErr?"border-danger":" "}`} 
    id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.userEmail} 
    onChange={(e)=>changeData(e)} name="userEmail"/>
    <div className="text-danger">{errors.userEmailErr}</div>
  </div>
  
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
    <input type="password" className={`form-control  ${errors.userPassErr?"border-danger":" "}`} 
    id="exampleInputPassword1" value={userData.userPass} 
    onChange={(e)=>changeData(e)} name="userPass" type={passwordShown ? "text" : "password"} />
    <i onClick={togglePasswordVisiblity} className="text-light"><FaEye type="button"/></i>
    <div className="text-danger">{errors.userPassErr}</div>
  </div>

<div className="mb-2">
  <button type="submit" disabled={errors.userEmailErr||errors.userPassErr} className="btn btn-danger">Submit</button>
  </div>
</form>
</div>
</div>
    </div>
    </>)
}