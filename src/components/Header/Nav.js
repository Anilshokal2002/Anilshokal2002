import styled from "styled-components";
import Contact from "../../MyPractice/Create";
import Popup from "../../MyPractice/Create";
// import { NavLink } from 'react-router-dom'


const Nav = () => {



  return (
      <MainHeader>
      <header id ="header" className="header_sec desktop_header" >
      <div className="container clearfix" style={{    position: 'fixed',
    height: '60px',
    width: '100%',
    
   }}>
      <div className="sticky" >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
            Astrologer
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    LOVE PROBLEMS
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    BLOG
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES 
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Best astrologer in India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Janam Kundali
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Horoscope Matching{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Face Reading
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Plam Reading{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vastu Shastra
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Child Problem Solution
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Business Problem Solution
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Education and Career
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vehicle Purchase Muhurat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Dosh Problem Solution
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    VASHIKARAN
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Specialist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Online Vashikaran
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Removal Specialist{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Mantra for Husband
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Mantra for Wife{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Mantra for Love Marriage
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Remove Block Magic
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Expert astrologer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Love Vashikaran Aghari BAba
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Best Tantrik in India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Vashikaran Specialist in UK
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <div className="phone_f1">
                <button className="form_button" onClick={Contact}>
                  Get Free Advice
                </button>
              </div>
            </div>
          </div>
        </nav>
        </div>
        </div>
        </header>
      </MainHeader>
  );
};



const MainHeader = styled.header`
#header {
  top: 0px;
}
#header {
  padding: 10px 0;
}
  @media (min-width: 993px)
#header {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
}
#header {
  width: 100%;
  position: absolute;
  z-index: 1000;
  padding: 0px 0;
  height: 88px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
}
.header_sec {
  transition: all 0.2s ease;
  background-color: #1C4D90;
  z-index: 99;
  position: relative;
}

.container {
  max-width: 100%;
  width: 100%;
  height:100%;
  padding: 0 ;
  padding-top: 0;
  padding-bottom:0 ;
  ${'' /* margin: 0 ; */}
  position: relative;
  ${'' /* position:fixed; */}
  top:0;
  background:none;
  

}
.navbar-brand{
  color:#b6b6b6
  font-size:2rem;

}
.nav-link {
  color:#001700
}


.sticky{
  box-shadow: 0 0 0 rgba ( 0, 0, 0, 0.2);
  background-color:#1c4d90;
}
${'' /* .phone_f1 {
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #1c4d90;
  } */}
  .form_button{
    background-color: #1c4d90;
    color: #fff !important;
    border-radius: 28px;
    border: #fff solid 2px;
    padding: 9px 26px !important;
    font-size: 16px;
    text-transform: uppercase;
    padding-right: 2rem;
    border-radius: 28px;

  }
.navbar-nav{
  align-item:center;
  padding-left:5rem;
  
  
}
`;

export default Nav;
