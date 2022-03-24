import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";

function Login() {
  const { details, setcurrent, current, setvalue, logged, setlogged } =
    useContext(MyContext);
  const [email2, setemail2] = useState("");
  const [pass2, setpass2] = useState("");
  const [err1, seterr1] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    details.some((ele) => {
      if (ele.email === email2 && ele.pass === pass2) {
        setcurrent([ele]);
        navigate("/");
        setvalue(current.map((e) => e.email));
        setlogged(true);
      } else {
        seterr1(true);
        setTimeout(() => {
          seterr1(false);
        }, 1000);
      }
    });

    if (details.length === 0) {
      seterr1(true);
      setTimeout(() => {
        seterr1(false);
      }, 1000);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="wrapper2">
          <h1>Login</h1>
          <h1
            style={{
              fontWeight: "100",
              fontSize: "1.2rem",
              borderBottom: "2px solid #b13bb1",
              paddingBottom: "10px",
            }}
          >
            Login to your account
          </h1>

          <form onSubmit={handlesubmit}>
            <input
              placeholder="Email"
              type="text"
              style={{ flex: "100%" }}
              value={email2}
              onChange={(e) => setemail2(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={pass2}
              onChange={(e) => setpass2(e.target.value)}
            />
            <h2 className={err1 ? "errmsg2" : "errmsg"}>
              Please check your credentials again
            </h2>
            <button type="submit">Log in</button>
          </form>

          <div className="signin">
            Don't have an account? &nbsp; &nbsp;
            <b
              style={{ cursor: "pointer", color: "#4267B2" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register here
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
