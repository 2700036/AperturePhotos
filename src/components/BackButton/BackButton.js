import React, { Component } from 'react';
import './back-button.css'

const BackButton = ({children}) => {
  return (
  <button className='back-button'>&#x276E; {children}</button>
  )
}

export default BackButton;

