import React from 'react'
import Home from '../creator/Home'
import Navbar from '../creator/Navbar'
import Features from '../creator/Features'
import Newletter from '../creator/Newletter'


export default function Creator() {
  return (
    <>
      {/* <Navbar/> */}
      <Home id="home" />
      <Features id="features" />
      <Newletter id="newsletter" />
    </>
  );
}
