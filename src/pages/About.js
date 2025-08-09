
import Weblayout from "../layout/Weblayout";

function About() {
  return (
    <Weblayout>

<div id="main-wrapper" className="section">
    

   
    
    <div className="page-banner-section section" style={{backgroundImage: "url(img/bg/page-banner.jpg)"}}>
        <div className="container">
            <div className="row">
                
                
                <div className="page-title text-center col">
                    <h1>About us</h1>
                </div>
                
            </div>
        </div>
    </div>
    
       
    
    <div className="about-section section pt-120 pb-90">
        <div className="container">
            <div className="row flex-row-reverse">
                
                
                <div className="about-image col-lg-6 col-12 mb-30">
                    <a className="video-popup" href="https://www.youtube.com/watch?v=7e90gBu4pas"><img src="assets/img/about.jpg" alt=""/></a>
                </div>
                
                
                <div className="about-content col-lg-6 col-12 mb-30">
                    <h2>About <span>Christ</span></h2>
                    <p>There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly kn je believable There are manations of passages of Lorem Ipsum available, but the majority ahave suffered ami tar cholnay vulbo na alte ration. majority have suffered alteration in</p>
                    <a href="#" className="button">Shop Now</a>
                </div>
                
            </div>
        </div>
    </div>
    
    
    <div className="team-section section pb-120">
        <div className="container">
           
            <div className="row">
                <div className="section-title text-center col mb-60">
                    <h1>Our Team</h1>
                </div>
            </div>
            
            <div className="team-wrapper row">

                <div className="single-team col-lg-3 col-md-6 col-12">
                    <img src="assets/img/team/1.jpg" alt="team"/>
                    <div className="content">
                        <h4>Terry Soto</h4>
                        <span>CEO</span>
                    </div>
                </div>

                <div className="single-team col-lg-3 col-md-6 col-12">
                    <img src="assets/img/team/2.jpg" alt="team"/>
                    <div className="content">
                        <h4>Maria Lane</h4>
                        <span>Marketer</span>
                    </div>
                </div>

                <div className="single-team col-lg-3 col-md-6 col-12">
                    <img src="assets/img/team/3.jpg" alt="team"/>
                    <div className="content">
                        <h4>Justin Evans</h4>
                        <span>developer</span>
                    </div>
                </div>

                <div className="single-team col-lg-3 col-md-6 col-12">
                    <img src="assets/img/team/4.jpg" alt="team"/>
                    <div className="content">
                        <h4>Rose Dixon</h4>
                        <span>Designer</span>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
    
    
    <div className="funfact-section section pb-90">
        <div className="container">
            <div className="row">
               
                
                <div className="single-fact text-center col-sm-3 col-6 mb-30">
                    <div className="wrap">
                        <i className="fa fa-users"></i>
                        <h2 className="counter">110</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
                
                
                <div className="single-fact text-center col-sm-3 col-6 mb-30">
                    <div className="wrap">
                        <i className="fa fa-trophy"></i>
                        <h2 className="counter">90</h2>
                        <p>Award Winning</p>
                    </div>
                </div>
                
                
                <div className="single-fact text-center col-sm-3 col-6 mb-30">
                    <div className="wrap">
                        <i className="fa fa-thumbs-up"></i>
                        <h2 className="counter">230</h2>
                        <p>Project Done</p>
                    </div>
                </div>
                
                
                <div className="single-fact text-center col-sm-3 col-6 mb-30">
                    <div className="wrap">
                        <i className="fa fa-coffee"></i>
                        <h2 className="counter">350</h2>
                        <p>Cups of Coffee</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
    <div className="client-section section pb-90">
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <div className="client-slider text-center">
                        
                        
                        <div className="single-client"><img src="assets/img/client/1.png" alt="client"/></div>
                        <div className="single-client"><img src="assets/img/client/2.png" alt="client"/></div>
                        <div className="single-client"><img src="assets/img/client/3.png" alt="client"/></div>
                        <div className="single-client"><img src="assets/img/client/4.png" alt="client"/></div>
                        <div className="single-client"><img src="assets/img/client/5.png" alt="client"/></div>
                        <div className="single-client"><img src="assets/img/client/6.png" alt="client"/></div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

       
 



</div>
</Weblayout>
  );
}

export default About;
  