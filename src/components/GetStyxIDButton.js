import React from "react";

const GetStyxIDButton = ({space_between_elements, white}) => {

  const getIdButton = {
    width: "77.5%",
    margin: `20px auto 30px auto`,
    display: "block",
    backgroundColor: white,
    borderRadius: "15px",
    border: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "0.055em",
    textAlign: "center",
    padding: "13px 0px",
  }

  return (
    <button style={getIdButton}>Get a styx.id</button>
  )
}

export default GetStyxIDButton;