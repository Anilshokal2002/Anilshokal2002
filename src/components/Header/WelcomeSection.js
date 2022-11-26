    import React from 'react'
import styled from 'styled-components'

    const WelcomeSection = () => {
    return (

        <WelcomeDesine>
        <div>
                <div className="welcome_sec">
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <h1>Online Astrologer in India</h1>
                    <p align="justify">
                        Anil Bhargav is one of the
                        <strong> best astrologer in India </strong>well-known for
                        his astrological accurate predictions and effective
                        remedies. His far-reaching services are popular in numerous
                        cities of India as well in abroad. With profound learning
                        and immense experience in astrology, Anilji has achieved
                        deep insight for predicting and resolving various life
                        problems.
                    </p>
                    <p align="justify">
                        Anilji is an expert jyotishi of India specializing in
                        vashikaran, predictions, palmistry, numerology, gemology,
                        and horoscope matching. He is a leading
                        <strong>online Astrologer in India</strong>, palmist, and
                        vashikaran specialist with high expertise in all aspects of
                        Jyotish shastra. His charitable work includes providing
                        accurate solutions for problems such as love life or
                        business issues through astrology which he has done
                        successfully over many years!
                    </p>
                    <p align="justify">
                        when it comes to reading kundali matchings, Anil Ji's talent
                        has no bounds; whether you're looking into your future
                        prospects at work or in love, he has the uncanny ability to
                        give you an accurate picture of what's to come.
                    </p>
                    <button className="btn" href="/">
                        CONTACT NOW
                    </button>
                    </div>
                    <div className="col-md-5">
                    <span className="Welcome-image">
                        <img
                        src="./images/Horoscope1.jpg"
                        alt="Horoscope"
                        className="rotate linear infinite"
                        />
                    </span>
                    </div>
                </div>
                </div>
            </div>

        </div>
        </WelcomeDesine>
    )
    }

    const WelcomeDesine = styled.header`
    
  p {
    margin: 0 0 18px !important;
  }
  p {
    color: #000;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 15px;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .welcome_sec {
    padding: 55px 0;
    overflow: hidden;

  }
  .btn {
    z-index:1;
    background-color: #1c4d90;
    font-size: 16px;
    color: #fff !important;
    padding: 9px 26px !important;
  
  }
  .Welcome-image img {
    animation: rotation 6s;
  }
  .Welcome-image img {
    animation-timing-function: linear;
  }
  .Welcome-image img {
    animation-iteration-count: infinite;

  }
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.Welcome-image{
  z-index:-1;
}
.Welcome-image img{
  ${"" /* padding:1rem; */}
  ${
    "" /* align:center;
  border: none;
max-width: 100%;
vertical-align: top;
height: auto;
outline: none; */
  }
${"" /* background-repeat: no-repeat; */}
max-width: 448px;
display: block;
    margin: 0 auto;
        margin-top: 0px;
        box-sizing: border-box;
        align:center;
${'' /* padding:1rem; */}
}


    @media (max-width: 767px)

. welcome_sec .welcome-image {

    margin-top: 20px;

}
.welcome-image {

    ${
      "" /* -webkit-animation: spin 6s linear infinite;
    -moz-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite; */
    }
    padding:4rem;
}
    ${"" /* display: inline-block; */}
    ${"" /* overflow:hidden; */}
  ${"" /* margin: 0 auto; */}
    ${"" /* margin-top: 0px; */}
  ${"" /* max-width: 448px; */}
  }
  img {
    border: none; 
    max-width: 100%; 
  vertical-align: top; 
  height: auto; 
  }

  .banner_slider img {
    width: 100%;
  }
  .col-md-7 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    z-index:1;
  }
  /* zodic section   */
 
    `
    export default WelcomeSection