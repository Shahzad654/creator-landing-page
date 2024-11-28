import React from 'react'
import styled from 'styled-components'
import HeroImg from '../assets/images/HeroImage.jfif'
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>

      <StyledHome>
        <div className="main_container">
          <div className="hero_content">
            <h2>
              Bring your Recipes to Life, Build a Community around your Passion
            </h2>
            <p>
              Turn your handwritten recipes into interactive digital creations.
              Share, inspire, and grow with BreakBread.
            </p>
            <button>Subscribe to Newsletter</button>
          </div>
          <div className="right_side">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.div`
  /* width: var(--section-width); */
  margin: var(--section-margin) auto var(--section-margin) auto;
  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    .hero_content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-basis: 45%;
      gap: 1rem;
      flex-direction: column;
      padding-left: 5%;
      h2 {
        line-height: 2.5rem;
      }
      p {
        line-height: 1.8rem;
      }
      button {
        background-color: var(--big-btn-color);
        border-radius: var(--l-radius);
      }
    }

    .right_side {
      flex-basis: 45%;
      img {
        /* max-width: 800px; */
        width: 100%;
        height: auto;
        clip-path: polygon(67% 0, 100% 0, 100% 100%, 15% 100%);
      }
    }
  }

  @media (max-width: 640px) {
    .main_container {
      gap: 3rem;
      .hero_content {
        flex-basis: 100%;
      }

      .right_side {
        flex-basis: 100%;
        img {
          width: 100%;
          height: auto;
          clip-path: none;
        }
      }
    }
  }
`;
