import React from 'react'
import styled from 'styled-components'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png'
import SideImage from '../assets/images/sideimage1.png'
import SideImage2 from "../assets/images/sideimage3.webp";
import SideImage3 from "../assets/images/sideimage2.jpg";

export default function Features() {
  return (
    <div id="features">
      <StyledFeatures>
        <div className="feature_container">
          <div className="feature">
            <div className="feature_content">
              <div className="image">
                <img src={Image1} alt="" />
              </div>

              <div className="content">
                <h3>Transform Recipes Effortlessly</h3>
                <p>
                  With BreakBread, creators can easily digitize their
                  handwritten or typed recipes. Just snap a picture, and our
                  advanced tools convert it into an interactive, shareable
                  format. It’s never been this easy to modernize your cookbook.
                </p>
                <button>Digitize Recipes</button>
              </div>
            </div>

            <div className="side_image">
              <img src={SideImage2} alt="" />
            </div>
          </div>

          <div className="feature2">
            <div className="feature_content">
              <div className="content">
                <h3>Get new recipe ideas using AI</h3>
                <p>
                  Looking for fresh inspiration? BreakBread's AI generates
                  custom recipes based on your preferences. Whether it’s
                  gluten-free desserts, keto-friendly meals, or authentic global
                  cuisines, give specific instructions, and let BreakBread do
                  the magic.
                </p>
                <button>Generate AI Recipes</button>
              </div>

              <div className="image">
                <img src={Image2} alt="" />
              </div>
            </div>

            <div className="side_image">
              <img src={SideImage} alt="" />
            </div>
          </div>

          <div className="feature3">
            <div className="feature_content">
              <div className="image">
                <img src={Image3} alt="" />
              </div>

              <div className="content">
                <h3>Share & Grow Your Culinary Passion</h3>
                <p>
                  Showcase your unique recipes on your personalized BreakBread
                  page. Share your love for food, engage with fans, and
                  cultivate a community of like-minded food enthusiasts. Watch
                  your audience grow as they savor your creations.
                </p>
                <button>Create My Profile</button>
              </div>
            </div>

            <div className="side_image">
              <img src={SideImage3} alt="" />
            </div>
          </div>
        </div>
      </StyledFeatures>
    </div>
  );
}

const StyledFeatures = styled.div`
  width: var(--section-width);
  /* height: var(--section-height); */
  margin: var(--section-margin) auto var(--section-margin) auto;
  position: relative;
  .feature_container {
    margin-top: var(--section-margin);
    .feature {
      .feature_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        .content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-basis: 45%;
          gap: 1rem;
          flex-direction: column;
          p {
            max-width: 120ch;
          }
          button {
            border-radius: var(--l-radius);
          }
        }

        .image {
          flex-basis: 45%;
          img {
            width: 90%;
            height: auto;
            transform: rotate(10deg);
          }
        }
      }

      .side_image {
        height: 50px;
        img {
          position: sticky;
          left: 100%;
          top: 50%;
          width: 80px;
          height: auto;
        }
      }
    }

    .feature2 {
      .feature_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding-top: 10%;

        .content {
          flex-basis: 45%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-direction: column;
          h3 {
            max-width: 25ch;
          }
          p {
            max-width: 60ch;
          }
          button {
            background-color: var(--big-btn-color);
            border-radius: var(--l-radius);
          }
        }

        .image {
          flex-basis: 45%;
          position: relative;
          img {
            width: 80%;
            height: auto;
          }
        }
      }

      .side_image {
        height: 50px;
        img {
          position: absolute;
          left: -5%;
          top: 65%;
          width: 60px;
          height: auto;
        }
      }
    }

    .feature3 {
      .feature_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding-top: 10%;
        .content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-basis: 45%;
          gap: 1rem;
          flex-direction: column;
          h3 {
            max-width: 25ch;
          }
          p {
            max-width: 55ch;
          }
          button {
            border-radius: var(--l-radius);
          }
        }

        .image {
          flex-basis: 45%;
          position: relative;
          img {
            width: 70%;
            height: auto;
          }
        }
      }

      .side_image {
        height: 50px;
        img {
          position: absolute;
          left: 100%;
          top: 100%;
          width: 60px;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 640px) {
  
    .feature_container {
      .feature {
        .feature_content {
          flex-direction: column;
        }
      }
      .feature3 {
        .feature_content {
          flex-direction: column;
        }
      }
      .feature2 {
        .feature_content {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;