import React from 'react'
import styled from 'styled-components'
import HeroImg from '../assets/images/HeroImage.jfif'
import Navbar from './Navbar';

export default function Home() {
  return (
    <div id='home'>
      <StyledHome>
        <Navbar className='navbar'/>
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
    </div>
  );
}

const StyledHome = styled.div`
  height: 600px;
  overflow: hidden;
  position: relative;

  .navbar {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 10; */
  }

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
        width: 100%;
        /* height: auto; */
        /* height: 610px; */
        height: 600px;
        /* height: auto; */
        /* clip-path: polygon(67% 0, 100% 0, 100% 100%, 15% 100%); */
        object-fit: cover;
        clip-path: polygon(35% 0, 100% 0%, 100% 100%, 0% 100%);
      }
    }
  }

  @media (max-width: 750px) {
    .navbar {
      width: 90%;
    }
    .main_container {
      gap: 3rem;
      .hero_content {
        justify-content: center;
        align-items: center;
        margin-top: 25%;
        flex-basis: 100%;
        h2,p{
            text-align: center;
        }
      }

      .right_side {
        flex-basis: 100%;
        img {
          /* width: 100%;
            height: auto; */
          height: 200px;
          clip-path: none;
          object-fit: contain;
        }
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1330px) {
    .main_container {
      .hero_content {
        margin-top: 18%;
      }
    }
  }

  /* @media (min-width: 1330px) {
    .main_container {
        .right_side{
            img{
                height: 900px;
            }
        }
    }
    
  } */
`;
