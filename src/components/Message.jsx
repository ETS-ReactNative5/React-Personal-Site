import React from "react";
import Messanger from "./Message/Messanger"

function Message () {

  return (
    <div class="message-background">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Leave a message if you wish</h1>
        </div>
        <div class="col-lg-6">
          <img src={process.env.PUBLIC_URL + "/images/Tap.png"} style={{marginLeft:50}} />
      <Messanger />
      </div>
    </div>
    <h1>Find me on SNS !!!!!</h1>
    <a href="https://www.facebook.com/profile.php?id=100013253410924">
    <img src={process.env.PUBLIC_URL + "/images/Icon/facebook.png"}  class="social-icon" /></a>
    <a href="https://github.com/2851kohei">
    <img src={process.env.PUBLIC_URL + "/images/Icon/github-image.png"} class="social-icon" /></a>
    <a href="https://www.instagram.com/285koheeeeeei/?hl=ja">
    <img src={process.env.PUBLIC_URL + "/images/Icon/instagram-sketched.png"} class="social-icon" /></a>
    <a href="https://twitter.com/skirim41">
    <img src={process.env.PUBLIC_URL + "/images/Icon/twitter.png"} class="social-icon" /></a>
  </div>
</div>
  )
}

export default Message;
