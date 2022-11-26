    import React from 'react'
import styled from 'styled-components'

    const TrustedSec = () => {
    return (
        <TrustedDesine>
        <div>
    <section className="Trusted_sec">
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="padd_blk">
                        <span className="icon_img>">
                        <img src="/images/logo/ser-icon1.png" alt="" />
                        </span>
                        <h3>Trusted</h3>
                        <p>Most Trusted Astrologer in India</p>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="padd_blk">
                        <span className="icon_img>">
                        <img src="./images/logo/ser-icon2.png" alt="" />
                        </span>
                        <h3>genuine</h3>
                        <p>Satisfied Clients in india & Globally</p>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="padd_blk">
                        <span className="icon_img>">
                        <img src="./images/logo/ser-icon3.png" alt="" />
                        </span>
                        <h3>200+</h3>
                        <p>Expert Team</p>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="padd_blk">
                        <span className="icon_img>">
                        <img src="./images/logo/ser-icon4.png" alt="" />
                        </span>
                        <h3>5000+</h3>
                        <p>Satisfied Clients in india & Globally</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        </div>
        </TrustedDesine>
    )
    }
const TrustedDesine  = styled.header`
.Trusted_sec{
  background:#FFF4b7
  padding:45px 0;
}
${
  "" /* .container{
  max-width: 1174px;
  width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
text-align: center;
text-align: center;
} */
}


.Trusted_sec .padd_blk {
  background: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  height: 100%;
}
`
    export default TrustedSec