import React from "react";
import Player from "./Movie/ReactPlayer";


function Portfolio () {

 return (
   <section id="portfolio" class="bg-color">
     <div class="container">
       <div class="row">
         <div class="col-lg-6">
           <h1 class= "container" style={{marginTop: 40}}>I'm currently a fleerance UI/UX designer and developer who builds websites and applications.</h1>
         </div>
         <div class="col-lg-6">
         <Player />
         </div>
       </div>
      <hr class="horizontal" />
        <div class="row">
          <div class="col-lg-6">
            <h1 class="buttom">Technologies</h1>
          </div>
          <div class="col-lg-6">
           <ul>
             <li>HTML5/CSS3/Javascript ES 6</li>
             <li>Bootstrap 4</li>
             <li>DOM Manipulation, jQuery</li>
             <li>Git, GitHub and Version Control</li>
             <li>NPM, Node, EJS</li>
             <li>SQL, MongoDB, Mongoose, Security, Authentication</li>
             <li>React.js, ,Material UI</li>
           </ul>
          </div>
        </div>
        <hr class="horizontal" />
          <div class="row">
            <div class="col-lg-6">
            <h1 class="buttom">Javascript</h1>
            </div>
            <div class="col-lg-6">
              <p>Java Script is inevitable when coding the frontended.</p>
              <p>After playing with jQuery and moving to Vanilla JS, I'm now prominent with React, having styled many apps using Sass and CSS Modules.</p>
              <p>Now, I'm keen on React.js to develop large-scale web applications, and the website itself is built by using it.</p>
            <a href="https://codesandbox.io/dashboard/recent">
            <p> - My React examples (tap here) - </p></a>
          </div>
        </div>
     </div>
   </section>
 );

}

export default Portfolio;
