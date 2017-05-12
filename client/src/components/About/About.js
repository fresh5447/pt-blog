import React from 'react'
import {largeButton} from './styles.css'
import {button} from '../../sharedStyles/styles.css' // original button

const About = (props) => {
  return (
    <div>
      <h1> Hello from About Component! </h1>
      <button
      onClick={() => alert('coolest btn everrrr')}
       className={largeButton} type='button'> Composed Button </button>
      <button className={button} type='button'> Original Button </button>
    </div>
  )
}

export default About
