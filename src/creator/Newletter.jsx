import React from "react";
import styled from "styled-components";
import Apple from "../assets/images/apple.svg";
import Burger from "../assets/images/burger.svg";
import Cake from "../assets/images/cake.svg";
import Donut from "../assets/images/donut.svg";
import Fries from "../assets/images/fries.svg";
import Leg from "../assets/images/leg.svg";
import Pasta from "../assets/images/pasta.svg";
import Pizza from "../assets/images/pizza.svg";
import Taco from "../assets/images/taco.svg";
import Wrap from "../assets/images/wrap.svg";

export default function Newletter() {
  return (
    <StyledNewsletter>
      <div className="newsletter_container">
        <h3>Ready to Share Your Culinary Passion?</h3>
        <p>
          Join thousands of creators and transform the way you share recipes
          today.
        </p>
        <button>Subscribe to Newsletter</button>
      </div>
      <div className="svg_background">
        <img src={Apple} alt="Apple" className="apple" />
        <img src={Burger} alt="Burger" className="burger" />
        <img src={Cake} alt="Cake" className="cake" />
        <img src={Donut} alt="Donut" className="donut" />
        <img src={Fries} alt="Fries" className="fries" />
        <img src={Leg} alt="Leg" className="leg" />
        <img src={Pasta} alt="Pasta" className="pasta" />
        <img src={Pizza} alt="Pizza" className="pizza" />
        <img src={Taco} alt="Taco" className="taco" />
        <img src={Wrap} alt="Wrap" className="wrap" />
      </div>
    </StyledNewsletter>
  );
}

const StyledNewsletter = styled.div`
  height: 40vh;
  background-color: var(--primary-color);
  margin: var(--section-margin) auto var(--section-margin) auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .newsletter_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    z-index: 1;

    h3 {
      color: white;
      text-align: center;
    }

    p {
      color: white;
      text-align: center;
    }

    button {
      background-color: var(--big-btn-color);
      border-radius: var(--l-radius);
    }
  }

  .svg_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .svg_background > img {
    position: absolute;
    opacity: 0.8; 
    max-width: 54px; 
  }

  .apple {
    top: 10%;
    left: 10%;
  }

  .burger {
    top: 10%;
    left: 70%;
  }

  .cake {
    top: 50%;
    left: 18%;
  }

  .donut {
    top: 25%;
    left: 80%;
  }

  .fries {
    top: 70%;
    left: 25%;
  }

  .leg {
    top: 25%;
    left: 25%;
  }

  .pasta {
    top: 65%;
    left: 70%;
  }

  .pizza {
    top: 75%;
    left: 85%;
  }

  .taco {
    top: 25%;
    left: 50%;
  }

  .wrap {
    top: 60%;
    left: 2%;
  }

  @media (max-width: 640px) {
    .svg_background > img{
        width: 10
    }
    
  }
`;
