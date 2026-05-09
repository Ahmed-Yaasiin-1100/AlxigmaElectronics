import React from 'react'
import bgImage from "../assets/bg7.jpg";

function Hero() {
  return (
    <>

        <div className="all">
            <div className="content">
                <h2>Hoyga Electonics Casriga Ah <span>AlXikma Electronics</span> </h2>
                <p>Ka dukaamayso qalabka elektaroonigga ah ee ugu dambeeyay dunida. Tayo la hubo iyo qiimo ku qanciya </p>
                <button>Hadda iibso</button>
            </div>
            <div className="image">
                    <img src={bgImage} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero