import React, { useState } from "react";
import styled from "styled-components";

const Zodic = () => {
  const [zudic, setZudic] = useState([
    {
      zudic_name: "Aries",
      zudic_hindi: "मेष",
      zudic_image: "./images/Zodic/aries.png",
    },
    {
        zudic_name: "Taurus",
        zudic_hindi: "(वृषभ)",
        zudic_image: "./images/Zodic/taurus-.png",
      },
      {
        zudic_name: " Gemini",
        zudic_hindi: " (मिथुन)",
        zudic_image: "./images/Zodic/gemini.png",
      },
      {
          zudic_name: " Cancer",
          zudic_hindi: " (कर्क)",
          zudic_image: "./images/Zodic/cancer.png",
        },
        {
            zudic_name: "Leo",
            zudic_hindi: " (सिंह )",
            zudic_image: "./images/Zodic/leo.png",
          },
          {
              zudic_name: "Virgon",
              zudic_hindi: " (कन्या)",
              zudic_image: "./images/Zodic/virgo.png",
            },
            {
              zudic_name: "Libra",
              zudic_hindi: "(पुस्तकों)",
              zudic_image: "./images/Zodic/libra.png",
            },
            {
                zudic_name: "Scorpio",
                zudic_hindi: " (वृश्चिक)",
                zudic_image: "./images/Zodic/scorpio.png",
              },
              {
                zudic_name: " Sagittarius",
                zudic_hindi: " (धनु)",
                zudic_image: "./images/Zodic/saggitarius.png",
              },
              {
                  zudic_name: "Capricorn",
                  zudic_hindi: " (मकर)",
                  zudic_image: "./images/Zodic/capricorn.png",
                },
                {
                  zudic_name: "Aquarius",
                  zudic_hindi: "  (कुंभ राशि)",
                  zudic_image: "./images/Zodic/aquarius.png",
                },
                {
                    zudic_name: "Pisces",
                    zudic_hindi: " (मीन राशि)",
                    zudic_image: "./images/Zodic/pisces.png",
                  },
  ]);
  return (
    <ZodiacDesign>
      <div>
        <div className="zodic-service">
          <div className="container">
            <h3>Zodiac Signs prediction</h3>
            <div className="row">
            {zudic.map((item)=>{
                return(
                    <div className="col-md-3 col-lg-2">
                <div className="zodic_block">
                  <a href="/">
                    <span className="zodic-img">
                      <img src={item.zudic_image }alt="" />
                    </span>
                    <p>
                    {item.zudic_name}
                      <br />
                      {item.zudic_hindi}
                    </p>
                  </a>
                </div>
              </div>
                )
            })}
            </div>
          </div>
        </div>
      </div>
    </ZodiacDesign>
  );
};

const ZodiacDesign = styled.header`
  .content_sec {
    ${
      "" /* padding: 60px 0;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        position: relative; */
    }
    padding: 30px 0;
  }
  .zodic-service {
    padding: 60px 0;
    text-align: center;
    background: #f0f8ff;
  }
  .zodic-service .container {
    max-width: 1170px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
  .zodic-service h3 {
    text-align: center;
    font-size: 40px;
    color: #001c88;
    font-family: "Philosopher", sans-serif;
    font-weight: 700;
    margin: 0 0 30px;
    padding: 0;
  }
  .row {
    ${
      "" /* display: -ms-flexbox;
        display: -webkit-box; */
    }
    display: flex;
    ${"" /* -ms-flex-wrap: wrap; */}
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
`;
export default Zodic;
