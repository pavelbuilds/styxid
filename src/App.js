import React, { useState, useEffect, useRef } from 'react';
import CoverImage from './components/CoverImage';
import ProfilePicture from './components/ProfilePicture';
import PersonalInfo from './components/PersonalInfo';
import IconCollection from './components/IconCollection'
import SaveContactButton from './components/SaveContactButton';
import GetStyxIDButton from './components/GetStyxIDButton';
import StyxTag from './components/StyxTag'

const App = () => {

  const space_between_elements = "0px";
  const white = "#f6f6f6";
  const grey = "#828282";

  const [coverImageHeight, setCoverImageHeight] = useState(null);
  const mainContainer =  {
    maxWidth: "400px",
    margin: "0 auto",
  }

  return (
    <div style = {mainContainer}>
      <CoverImage height={setCoverImageHeight}/>
      <ProfilePicture coverImageHeight={coverImageHeight}/>
      <PersonalInfo space_between_elements={space_between_elements} white={white} />
      <IconCollection white={white} grey={grey}/>
      <SaveContactButton white={white}/>
      {/* <GetStyxIDButton white={white}/> */}
      {/* <StyxTag white={white}/> */}
    </div>
    
  )
}

export default App