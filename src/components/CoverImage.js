import React, {useRef, useEffect} from 'react';
import cover_image from '../images/cover_image.jpg';

const CoverImage = ({height}) => {
  
  const coverImageStyle = {
    position: "absolute",
    zIndex: "-100",
    height: "25%",
    width: "100%",
    maxWidth: "400px",
    objectFit: "cover"
  }

  const ref = useRef(null)

  useEffect(() => {
    height(ref.current.clientHeight)
  }, [])

  return(
    <>
      <img ref={ref} style={coverImageStyle} src={cover_image} alt="cover"/>
    </>
  )
}

export default CoverImage;
