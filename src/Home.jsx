import React, { useState, useEffect,useContext} from "react";
import video from "./Video/video.mp4";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Axios from "./Axios"
import { Navigate } from "react-router";
function Home() {

  return (
    <>

    
    <Axios/>
      <section></section>
      <div className="sec1">
        <motion.div
          className="left"
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          <h1>Pathcharya App</h1>
          <p>#बनेंExamReady</p> <br /> <br /> <br />
          <button>Enroll now</button>
        </motion.div>
        <motion.div
          className="right"
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2, delay: 0 }}
        >
          <img
            src="https://images.schooglink.com/image/I5Ph2owWT6.png"
            alt=""
            srcSet=""
          />
        </motion.div>
      </div>
      <div className="sec2">
        <video src={video} width="750" height="500" controls></video>
      </div>
    </>
  );
}

export default Home;
