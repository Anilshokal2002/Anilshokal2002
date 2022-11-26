import React from "react";
import styled from "styled-components";
import Zodic from "./Zodic";
import Footer from "./Footer";
import Nav from "./Nav";
import WelcomeSection from "./WelcomeSection";
import Services from "./Services";
import TrustedSec from "./TrustedSec";
import Accordion2 from "./Accordion2";
const Header = () => {
  
  return (
    <>
      <BannerHeader>
        <body>
          <Nav />
          <header id="header" className="header_sec fixed">
          <div className="landing_banner">
            <span className="banner_slider">
              <img src="./images/banner1.webp" alt="banner"></img>
            </span>
          </div>
          </header>
          <WelcomeSection/>
          <Accordion2/>
          <Zodic/>
          <Services/>
          <TrustedSec/>
          <Footer />
        </body>
      </BannerHeader>
    </>
  );
};

const BannerHeader = styled.header`
${'' /* element {

}

    @media (max-width: 1023px)

#header {

    height: 72px;

}
#header {

    top: 0px;

}

    @media (max-width: 991px)

#header {

    padding: 0;

}
#header {

    padding: 10px 0;

}
#header {

    width: 100%;
    position: absolute;
    z-index: 1000;
    padding: 0px 0;
    height: 88px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

}

    @media (max-width: 992px)

.desktop_header {
    display: none;

} */}
.landing_banner{
  width:90%,
  height:90%
}
img {
  border: none;
  max-width: 100%;
  vertical-align: top;
  height: auto;
}
.banner_slider img {
  object-fit: cover;
  height: 100%;
  display: inline-block;
  vertical-align: top;
}

`;

export default Header;
