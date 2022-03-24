import React, { useContext,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";

function Register() {
  const navigate = useNavigate();
  const[err2,seterr2]=useState(false)
  const {
    fname,
    setfname,
    email,
    setemail,
    classnum,
    setclassnum,current,
    phone,value,
    setphone,
    pass,
    details,
    setdetails,
    setpass,setvalue
  } = useContext(MyContext);

  const handlesubmit = (e) => {
    e.preventDefault()
    if (details.some((e) => e.email === email)) {
      seterr2(true)
      setTimeout(() => {
        seterr2(false)
      }, 1000);
    setdetails(details.filter(ele=>{
      return ele
    }))
  } 
  else{
    e.preventDefault()
    console.log("Submitted");
    setdetails([...details, {name:fname, email:email,pass:pass,classnum:classnum,phone:phone}]);
    setemail("")
    setfname("")
    setpass("")
    setclassnum("")
    setphone("")

    console.log("value",value)
  }


  }


  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Register</h1>
          <h1
            style={{
              fontWeight: "100",
              fontSize: "1.2rem",
              borderBottom: "2px solid #b13bb1",
              paddingBottom: "10px",
            }}
          >
            Please fill in this form to create an account
          </h1>

          <form onSubmit={handlesubmit}>
            <input
              placeholder="First Name"
              value={fname}
              required
              onChange={(e) => setfname(e.target.value)}
            />
            {/* <input placeholder="Last Name" /> */}
            <input
              placeholder="Email"
              style={{ flex: "100%" }}
              value={email}
              type="email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              placeholder="Class"
              value={classnum}
              type="text"
              required
              onChange={(e) => setclassnum(e.target.value)}
            />
            <input
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value) }
            />
            <input
              placeholder="Password"
              value={pass}
              type="password"
              minLength={5}
              required
              onChange={(e) => setpass(e.target.value)}
            /> 
            {<h2 className={err2?"errmsg2":"errmsg"}>Email already in use, please log</h2>
            }
            {/* <input placeholder="Confirm Password" minLength={6} maxLength={20} onKeyUp={check}/> */}
            <button type="submit">Sign up</button>
          </form>

          <div className="signin">
            ALREADY AN EXISTING USER? &nbsp; &nbsp;
            <b
              style={{ cursor: "pointer", color: "#4267B2" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login here
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
