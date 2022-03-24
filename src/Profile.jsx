import React, { useState, useContext } from "react";
import { MyContext } from "./Context";

function Profile() {
  const { details, current } = useContext(MyContext);

  return (
    <div className="profile">
      <div className="left2">
        <h2>Your Profile</h2>
       <div className="card"> 
        {current.map((e) => (
          <>
            <label htmlFor="">Name </label>
            <h1>{e.name}</h1>
            <label htmlFor="">Name </label>
            <h1>{e.name}</h1>
          </>
        ))}
     </div>
      </div>
      <div className="right">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b040cb102758345.5f3db9b33f941.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Profile;
