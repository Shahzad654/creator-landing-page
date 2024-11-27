import React from 'react'
import styled from 'styled-components'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import SideImage from '../assets/sideimage1.png'

export default function Features() {
  return (
    <StyledFeatures>
      <div className="feature_container">
        <div className="feature">
          <div className="image">
            <img src={Image1} alt="" />
          </div>

          <div className="content">
            <h3>Transform Recipes Effortlessly</h3>
            <p>
              With BreakBread, creators can easily digitize their handwritten or
              typed recipes. Just snap a picture, and our advanced tools convert
              it into an interactive, shareable format. It’s never been this
              easy to modernize your cookbook.
            </p>
            <button>Digitize Recipes</button>
          </div>

         
        </div>

        <div className="feature2">
          <div className="content">
            <h3>Get new recipe ideas using AI</h3>
            <p>
              Looking for fresh inspiration? BreakBread's AI generates custom
              recipes based on your preferences. Whether it’s gluten-free
              desserts, keto-friendly meals, or authentic global cuisines, give
              specific instructions, and let BreakBread do the magic.
            </p>
            <button>Generate AI Recipes</button>
          </div>

          <div className="image">
            <img src={Image2} alt="" />
          </div>
        </div>

        <div className="feature3">
          <div className="image">
            <img src={Image3} alt="" />
          </div>

          <div className="content">
            <h3>Share & Grow Your Culinary Passion</h3>
            <p>
              Showcase your unique recipes on your personalized BreakBread page.
              Share your love for food, engage with fans, and cultivate a
              community of like-minded food enthusiasts. Watch your audience
              grow as they savor your creations.
            </p>
            <button>Create My Profile</button>
          </div>
        </div>
      </div>
    </StyledFeatures>
  );
}

const StyledFeatures = styled.div`
  width: var(--section-width);
  height: var(--section-height);
  margin: auto;

  .feature_container {
    .feature {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      .content {
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
          width: 100%;
          height: auto;
        }
      }

    }

    .feature2 {
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
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .feature3 {
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
          background-color: var(--big-btn-color);
          border-radius: var(--l-radius);
        }
      }

      .image {
        flex-basis: 45%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .feature_container {
      .feature,
      .feature3 {
        flex-direction: column;
      }
      .feature2 {
        flex-direction: column-reverse;
      }
    }
  }
`;