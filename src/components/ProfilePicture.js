import React, {useState, useEffect, useRef} from 'react';
import profile_picture from '../images/profile_picture.png';

const ProfilePicture = ({coverImageHeight}) => {

  const [height, setHeight] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.offsetWidth)
  },[])
  
  const profilePictureStyle = {
    width: "40%",
    minWidth: "120px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
    paddingTop: `${coverImageHeight - height  / 2}px`,
  }

  console.log(height)

  return (
    <>
      <img style={profilePictureStyle} ref={ref} src={profile_picture} alt="profile" />
    </>
  )
};

export default ProfilePicture;
