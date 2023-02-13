import React,{useState} from 'react'


const MyFormValidation = () => {

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const [error2,setError2] = useState(false)

    
    const validate = () =>{
       
        if (email !== "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" ) {
           setError(true)
          }

        if(password !== ""){
            if (password !== /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/) {
                setError2(true)
               }
        }



    }

  return (
    <div >
<center>

<div className="d-flex flex-column border border-secondary p-3  w-25  mt-5 "><h1>Login Form</h1>
<input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="...Email" className="mt-3"></input>
{error? <span className="text-danger">Invalid email</span> : "" }
<input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="...Password" className="mt-3"></input>
{error2? <span className="text-danger">Please Enter a valid Password</span> : "" }
<input type="text" placeholder="...ConfirmPassword" className="mt-3"></input>
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary mt-3" type="button" onClick={validate}>Button</button>
</div>

{email}
</div>

</center>


    </div>
  )
}

export default MyFormValidation