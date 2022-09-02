import React from 'react';
import vCard from '../AlexanderDevyatchenkoSoldak.vcf'

const SaveContactButton = ({ white }) => {

  const saveContact = {
    width: "77.5%",
    margin: "0 auto 20px auto",
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
    padding: "13px 0px 13px 0px",
  }

  return (
    <>
     <a style={saveContact} href={vCard}>Save contact</a>
    </>
  )
}

export default SaveContactButton;
