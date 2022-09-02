import React from "react";

const PersonalInfo = ({space_between_elements, white}) => {

  const info_container = {
    marginTop: `${space_between_elements}`,
    textAlign: "center",
  }

  const city = {
    color: "#828282",
    fontSize: "11px",
    fontWeight: "600",
    marginTop: "30px",
  }

  const about = {
    color: "#828282",
    fontSize: "11px",
    fontWeight: "600",
    marginTop: "7px",
  }

  const name = {
    color: white,
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "0.075em",
    marginTop: "7px",
  }
  
  return (
    <div style={info_container}>
      <div style={city}>Paris · Berlin</div>
      <div style={name}>Alexander<br/>Devyatchenko Soldak</div>
      <div style={about}>Film Director · Creative Producer</div>
    </div>
  )
}

export default PersonalInfo;
