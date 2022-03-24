import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

function Context({ children }) {
  const [fname, setfname] = useState("");
  const [email, setemail] = useState("");
  const [classnum, setclassnum] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");
  const [details, setdetails] = useState([]);
  const [current, setcurrent] = useState([]);
  const [value, setvalue] = useState("");
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    let temp = localStorage.getItem("assigncurrent");
    let temp2 = localStorage.getItem("assignlogged");
    let temp3 = localStorage.getItem("assign");
    if (temp) {
      setcurrent(JSON.parse(temp));
    }
    if (temp2) {
      setlogged(JSON.parse(temp2));
    }
    if (temp3) {
      setdetails(JSON.parse(temp3));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("assign", JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    localStorage.setItem("assigncurrent", JSON.stringify(current));
  }, [current]);

  useEffect(() => {
    localStorage.setItem("assignlogged", JSON.stringify(logged));
  }, [logged]);

  return (
    <MyContext.Provider
      value={{
        fname,
        setfname,
        details,
        setdetails,
        email,
        setemail,
        classnum,
        setclassnum,
        phone,
        setphone,
        pass,
        setpass,
        current,
        setcurrent,
        value,
        setvalue,
        logged,
        setlogged,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Context;
