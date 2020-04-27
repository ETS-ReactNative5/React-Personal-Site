import React from "react";
import Demo from './buttonImage/demo';
import FadeIn from "./FadeIn/FadeIn";

function About() {

  return (<section id="about" class="bg-color">
  <FadeIn />
    <div class="container-about">
      <h1 style={{
          textAlign: "center"
        }} class="buttom">
        <span class="MyHobbies">- Interest -</span>
      </h1>
      <p style={{
          textAlign: "center"
        }}> I'm a person with a lot of interests. </p>
      <div class="image-style image-center">
        <Demo/>
      </div>
      <hr class="horizontal"/>
      <h1 style={{
          textAlign: "center"
        }}>
        <span class="MyEducation">- Education -</span>
      </h1>
      <div class="image-style">
        <img class="waseda" src={process.env.PUBLIC_URL + "/images/school/Waseda.jpg"} alt="Video Editor"/>
        <h2>Waseda University</h2>
        <h3>Fundamental Science and Engineering</h3>
        <h4>-Communications and Computer Engineering-</h4>
        <p>My undergraduate days, I learbed a lot about computer science. I was thrilled to be exposed to cutting-edge technology and this broadened my perspectives.
        </p>
        <p>Apr. 2016 ~ Mar. 2020</p>
      </div>
      <div class="image-style">
        <img class="exeter" src={process.env.PUBLIC_URL + "/images/school/Exeter.jpg"} alt="Video Editor"/>
        <h2>Exeter University</h2>
        <h3>MSc Advanced Computer Science</h3>
        <p>The UK has a great cultural diversity, and I whole heartedly believe that this journey will have a strong power to change my life. I am looking forward to it.</p>
        <p>Sep. 2020 ~</p>
      </div>
      <hr class="horizontal"/>
      <h1 style={{
          textAlign: "center"
        }} class="buttom">
        <span class="MyPhotos">- A few tips all over the world -</span>
      </h1>
      <p style={{
          textAlign: "center"
        }}>Let's run the dance floor, talk stage design, draft an idea on Figma, and belt 90s R&B jams.</p>
      <p style={{
          textAlign: "center"
        }}>Here are a few snaps I took before graduating college:</p>
      <div class="row">
        <div class="image-style">
          <div class="img_wrap">
            <img src={process.env.PUBLIC_URL + "/images/Photos/IND.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/Flower.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/Beach.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/SouthAfrica2.jpg"}/>
          </div>
          <div class="img_wrap">
            <img src={process.env.PUBLIC_URL + "/images/Photos/IND2.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/Mountain.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/SouthAfrica.jpg"}/>
            <img src={process.env.PUBLIC_URL + "/images/Photos/SouthAfrica3.jpg"}/>
          </div>
        </div>
      </div>
    </div>
  </section>);

}

export default About;
