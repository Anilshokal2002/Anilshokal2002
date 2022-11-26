    import React ,{useState} from 'react'
import styled from 'styled-components'


    const Services = () => {
      const [Services , setServices] = useState([
      {
        Services_name:" Love Problem Solutions",
        Services_paragraph:"  If you are stuck up in your life with any love related problem  we have a solution for you.",
        Services_button:"READ MORE",
        Services_images:"./images/kholi1.jpg"
      }
      ,
        {
        Services_name:" Get Your Love Back 100%",
        Services_paragraph:"   Get Your Love Back: The upbringing of a few people makes them stubborn and obstinate.",
        Services_button:"READ MORE",
        Services_images:"./images/kholi2.jpg"
      }
      , {
        Services_name:"Love Marriage Specialist",
        Services_paragraph:"   Anilji’s marriage predictions astrology are accurate.Solutions of Love Marriage are effective.",
        Services_button:"READ MORE",
        Services_images:"./images/kholi3.jpg"
      }
      ] )
    return (
        <ServicesDesine>
        <div>
            <div className="serviceone_sec">
                <div className="container">
                <div className="row">

                {Services.map((item) => {
                  
                  return(
                    <div className="col-md-4">
                    <div className="serviceone-blk">
                        <span className="serviceone--img">
                        <img src={item.Services_images} alt="img" />
                        </span>
                        <h4>{item.Services_name}</h4>
                        <p>
                          { item.Services_paragraph}
                        </p>
                        <a className="btn" href="/">
                        {item.Services_button}
                        </a>
                    </div>
                    </div>)
                  })}
                    {/* <div className="col-md-4">
                    <div className="serviceone-blk">
                        <span className="serviceone--img">
                        <img src="./images/kholi2.jpg" alt="" />
                        </span>
                        <h4>Get Your Love Back 100%</h4>
                        <p>
                        Get Your Love Back: The upbringing of a few people makes
                        them stubborn and obstinate.
                        </p>
                        <a className="btn" href="/">
                        READ MORE
                        </a>
                    </div>
                    </div> */}
                    {/* <div className="col-md-4">
                    <div className="serviceone-blk">
                        <span className="serviceone--img">
                        <img src="./images/kholi3.jpg" alt="" />
                        </span>
                        <h4>Love Marriage Specialist</h4>
                        <p>
                        Anilji’s marriage predictions astrology are accurate.
                        Solutions of Love Marriage are effective.
                        </p>
                        <a className="btn" href="/">
                        READ MORE
                        </a>
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
        </ServicesDesine>
    )
    }

    const ServicesDesine = styled.header`
     .serviceone_sec {
    background-image: url("./images/background.jpg");
  }

  @media (max-width: 767px) .serviceone_sec {
    padding: 20px 0;
  }
  .serviceone_sec {
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .serviceone_sec .container {
    max-width: 1170px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
  .row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  

  .serviceone_sec .serviceone-blk {
    max-width: 320px;
    width: 100%;
    margin: 40px auto;
  }
  .serviceone_sec .serviceone-blk .serviceone--img {
    display: block;
    overflow: hidden;
  }
  .serviceone_sec .serviceone-blk .serviceone--img img {
    width:15rem;
    height:15rem;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }
    .serviceone--img img {
    border: none;
    max-width: 100% ;
    vertical-align: top;
    height: auto;
  }
  .serviceone_sec .serviceone-blk h4 {
    font-family: "Philosopher", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    color: #fff;
    margin: 20px 0;
  }
  .serviceone_sec .serviceone-blk p {
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    font-family: "Philosopher", sans-serif;
    font-weight: 400;
  }
  p {
    margin: 0 0 18px !important;
  }
  .btn {
    background-color: #1c4d90;
    font-size: 16px;
    color: #fff !important;
    padding: 9px 26px !important;
  }

  `
    export default Services