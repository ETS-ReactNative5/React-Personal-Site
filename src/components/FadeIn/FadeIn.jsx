import {BackgroundImage} from "react-image-and-background-image-fade";
import React from "react";

function FadeIn() {

  return (<BackgroundImage useChild="useChild" src={process.env.PUBLIC_URL + "/images/Otomo.jpg"} transitionTime="1500ms">
    <div style={{
        width: "1440px",
        height: "800px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6 image-style container">
          <h1 class="colored-section">- Hey, I'm Kohei Otomo.-</h1>
        </div>
      </div>
    </div>
    </BackgroundImage>
    );
}

export default FadeIn;
