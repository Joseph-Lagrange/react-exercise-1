import React, { Component } from 'react';
import imgURL from '../src/assets/avatar.jpg';
import './Head.scss';

class Head extends Component {
  render() {
    return (
      <div className="head">
        <Logo />
        <Foreword />
      </div>
    );
  }
}

function Logo() {
  return <img src={imgURL} alt="Logo" />;
}

function Foreword() {
  return (
    <div>
      <h1>HELLO,</h1>
      <h1>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h1>
      <hr />
    </div>
  );
}

export default Head;
