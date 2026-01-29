import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import loaderAnim from '../../assets/contentLoader.json'

function ContentLoader() {
  
  return (
    <>
      
      <Player
        autoplay
        loop
        src={loaderAnim}
        style={{ height: "200px", width: "200px" }}
      ></Player>

      <p style={{width:'100%',textAlign:'center',marginTop:'-50px',fontSize:'x-small',fontFamily:"Verdana",color:'gray'}}>Content Loading..</p>
    </>
  );
}

export default ContentLoader;
