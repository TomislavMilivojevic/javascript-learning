import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

import { Logo } from "../components/index";

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      {/* Info */}
      <div className="container page  ">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis cum ea veritatis aut commodi neque obcaecati alias. Aut
            inventore debitis beatae cumque eligendi, accusantium a expedita
            nisi est autem ab.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
