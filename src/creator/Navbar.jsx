import React from 'react'
import Logo from "../assets/logo.png";
import styled from 'styled-components'


export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="navbar">
            <img src={Logo} alt="" />

            <div className="nav_links">
              <a href="">Home</a>
              <a href="">Features</a>
              <a href="">FAQ's</a>
              <a href="">Contact</a>
            </div>
          </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
    .navbar{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        .nav_links{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            a{
                font-weight: 600;
            }
        }
    }
`;
