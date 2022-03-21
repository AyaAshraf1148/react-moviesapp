import { useState } from "react";
import {FaEye} from "react-icons/fa";

export default function Registerationcomponent()
{
    const [userData,setUserData]=useState({
        userEmail:"",
        userPass:"",
        userName:"",
        userPass2:"",
        Name:""
    })
    const [errors,setErrors]=useState({
        userEmailErr:"",
        userPassErr:"",
        userNameErr:"",
        userPassErr2:"",
        NameErr:""
    })

    const submitData=(e)=>{
        e.preventDefault()
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    
    const emailRegex = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}[\.com|net]{2,4}$/);
    const spaces = new RegExp(/\s/);
    const passvalid=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    

    const changeData=(e)=>{console.log(e.target.value) 
        if(e.target.name=="userEmail"){setUserData({...userData,userEmail:e.target.value}) 
        setErrors({...errors,userEmailErr:e.target.value.length===0?"this field is required"
        :!emailRegex.test(e.target.value)?
        "email should contain /^[a-z|0-9]{2,}\@[a-z]{3,}[\.com|net]{2,4}$/"
        :null})}

        else if(e.target.name=="userPass")
        {setUserData({...userData,userPass:e.target.value})
        setErrors({...errors,userPassErr:e.target.value.length===0?"this field is required"
        // :e.target.value.length<8?"min length is 8 char"
        :!passvalid.test(e.target.value)?"pass not valid":null})}

        else if(e.target.name=="userName")
        {setUserData({...userData,userName:e.target.value})
        setErrors({...errors,userNameErr:e.target.value.length===0?"this field is required"
        :spaces.test(e.target.value)?"spaces not allowed":null})}

        else if(e.target.name=="Name")
        {setUserData({...userData,Name:e.target.value})
        setErrors({...errors,NameErr:e.target.value.length===0?"this field is required"
        :null})}

        else if(e.target.name=="userPass2")
        {setUserData({...userData,userPass2:e.target.value})
        setErrors({...errors,userPassErr2:e.target.value.length===0?"this field is required"
        // :e.target.value.length<8?"min length is 8 char"
        // :!passvalid.test(e.target.value)?"pass not valid"
        :(e.target.value!==userData.userPass)?"pass doesn't match":null})}

    }


    return(<> 
    <div className="container">
      <div className="row">
        <div className="col-md-4 m-auto bg-dark">
    <form onSubmit={(e)=>submitData(e)}>
    <div class="mb-3 mt-2">
    <label htmlFor="exampleInputName2" class="form-label text-light">Name</label>
    <input type="text" className={`form-control  ${errors.NameErr?"border-danger":" "}`} id="exampleInputName2" 
    aria-describedby="nameHelp" 
    value={userData.Name} name="Name" onChange={(e)=>changeData(e)}/>
    <div id="nameHelp" class="text-danger">{errors.NameErr}</div>
  </div>

    <div class="mb-3">
    <label htmlFor="exampleInputName1" class="form-label text-light">userName</label>
    <input type="text" className={`form-control  ${errors.userNameErr?"border-danger":" "}`} id="exampleInputName1"
     aria-describedby="nameHelp" 
    value={userData.userName} name="userName" onChange={(e)=>changeData(e)}/>
    <div id="nameHelp" class="text-danger">{errors.userNameErr}</div>
  </div>

  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
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

  <div class="mb-3">
    <label htmlFor="exampleInputConfirmPassword1" className="form-label text-light">Confirm Password</label>
    <input type="password" className={`form-control  ${errors.userPassErr2?"border-danger":" "}`} 
    id="exampleInputPassword2" value={userData.userPass2} 
    onChange={(e)=>changeData(e)} name="userPass2" type={passwordShown ? "text" : "password"} />
    {/* <i onClick={togglePasswordVisiblity}><FaEye type="button"/></i> */}
    <div className="text-danger">{errors.userPassErr2}</div>
  </div>
<div className="mb-2">
  <button type="submit" disabled={errors.userEmailErr||errors.userPassErr||errors.userNameErr||errors.userPassErr2||errors.NameErr} 
  className="btn btn-danger ">Submit</button>
  </div>
</form>
</div>
</div>
    </div>
    </>)
}