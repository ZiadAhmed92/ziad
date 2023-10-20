import React from "react";
import Lottie from "lottie-react";
import developer from "../../image/developer.json";
import "./Hero.css";
import img from "../../image/circle-ziad.png";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
        {/* <div className="developre col-md-4">
            <Lottie  animationData={developer} />
          </div> */}
          <div className="mobile-hero col-md-8  py-4 ">
            <img src={img} className=" img-hero mb-2" />
            {/* <i className="fa-solid fa-certificate" style={{color: '#11bde8'}}></i> */}
            <h1 className=" title mb-2">SoftWare Engineer</h1>
            <p className="subtitle mb-4">
              I'm Ziad Ahmed, a Software JavaScript Developer who can help your
              company to achieve more success and progress in the Web
              Development industry by translating your business ideas into real
              web applications.
            </p>
            <div className="icon-hero ">
              <a href="https://www.facebook.com/profile.php?id=100009338019129">
                <i className="fab fa-facebook mx-2"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i className="fa-brands fa-google mx-2"></i>
              </a>
              <a href="https://twitter.com/ZiadAhm27793817">
                <i className="fab fa-twitter mx-2"></i>
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <i className="fa-brands fa-linkedin mx-2"></i>
              </a>
              <a href="https://wa.me/01559992401">
                <i className="fa-brands fa-whatsapp mx-2"></i>
              </a>
            </div>
          </div>
          <div className="developer-wep col-md-4">
            <Lottie className="" animationData={developer} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
