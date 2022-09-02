import React from "react";

const StyxTag = ({ white }) => {

  // const styxTag = {
  //   textAlign: "center",
  //   color: white,
  //   marginTop: "calc(var(--top-space) + 10px)",
  //   marginBottom: "18px"
  // }

  const styxid = {
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80px",
    borderRadius: "0px 0px 20px 20px",
    padding: "0px 3px 3px 3px",
    textAlign: "center",
    color: "black",
    fontSize: "10px",
    letterSpacing: "0.22em",
    backgroundColor: white,
  }

  return (
      <div style={styxid}>STYX<b>ID</b></div>
  )
}

export default StyxTag;
