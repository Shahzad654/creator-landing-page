import React, {useState} from 'react'
import Logo from "../assets/Images/logo.png";
import styled from 'styled-components'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";



export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {["Home", "Features", "FAQ's", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Box>
    );

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

        <div className="mobile_navbar">
          <GiHamburgerMenu
            onClick={toggleDrawer(true)}
            style={{ width: "25px", height: "25px", cursor: "pointer" }}
          />
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  .navbar {
    width: 50%;
    padding-left: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .nav_links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      a {
        font-weight: 600;
        color: var(--text-light-color);
        &:hover {
          color: var(--primary-color);
        }
      }
    }

    .mobile_navbar {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .navbar {
        width: 90%;
      .mobile_navbar {
        display: block !important;
      }
      .nav_links {
        display: none !important;
      }
    }
  }
`;
