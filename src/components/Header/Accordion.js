import React , {useState} from 'react'
import styled from 'styled-components'

const Accordion = () => {

    const [selected, setSelected] = useState(0);

  return (
    <AccordionButton>
    <div>
        <div className='content-sec'>
          <div className='container'>
          <h3>Astrological Consultant</h3>
            <div className='accordion'>
              <div className='accordion-blk'>
                <button className='accordionButton' onClick={() =>{ setSelected(1)
                }}>
                  Astrological Consultant
                </button>
                
                {selected === 1 ? 
                <div className='accordionContent'>
                  <p>You can start your luck-making ventures today! Visit us or call our number for the most auspicious time to do good deeds.</p>
                  <p>Astrology is a popular all around the world, with people seeking out astrological data for both their problems and auspicious occasions. From kundali making and naamkaran to knowing our Rashi bhavishya; we look for the best astrologer in India. We are all trapped in complex life problems, but we can seek solutions by consulting an expert who has been studying the stars for years.</p>
                  <p>But it is important to find a learned and scholarly astrological professional. Anilji is a veteran astrological consultant who has been imparting his valuable services in Ahmedabad, Baroda and other cities for over many years. He offers convenient online astrology services to keep up with the times!</p>
                </div>
                : null}
              </div>
              <div className='accordion-blk'>
              <button className='accordionButton' onClick={() => setSelected(2)}>
              Horoscope Expert                
              </button>
              {selected === 2 ? 

                <div className='accordionContent'>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                </div>
                : null}

              </div>
              <div className='accordion-blk'>
              <button className='accordionButton' onClick={() => setSelected(3)}>
              Life Problem Solutions Expert 
                </button>
                {selected === 3 ? 

              <div className='accordionContent'>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                </div>
                : null}

              </div>
              <div className='accordion-blk'>
              <button className='accordionButton' onClick={() => setSelected(4)}>
              Astrology for All                 
              </button>
              {selected === 4 ? 

              <div className='accordionContent'>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                  <p>Vedic astrology is one of the most practical sciences because it provides solutions to problems caused by adverse celestial conditions in your horoscope. With vashikaran techniques like these Vedic pandits can make sure these bad luck events do not turn into the worst ones. </p>
                </div>
                : null}

              </div>
            </div>
          </div>
        </div>
    </div>
    </AccordionButton>
  )
}

const AccordionButton =styled.header`

@media (max-width: 767px)
.content_sec {
  padding: 30px 0;
}
.content_sec {
  padding: 60px 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.content_sec .container {

    max-width: 1170px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

}
@media (max-width: 767px)
.content_sec .accordion {
  margin: 30px 0 0 0;
}
.content_sec .accordion {
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
}
.content_sec h3 {
  text-align: center;
  font-size: 40px;
  color: #004c81;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
@media (max-width: 767px)
.content_sec .accordion .accordion-blk {
  width: 100%;
}
.content_sec .accordion .accordion-blk {
  width: 50%;
  padding: 5px 1%;
}
@media (max-width: 767px)
.accordion .accordion-blk .accordionButton {
  font-size: 18px;
  padding: 12px 40px 12px 15px;
}
.accordion .accordion-blk .accordionButton {
  background: #fcfafa;
  border: #e8e8e8 solid 1px;
  padding: 15px 20px;
  font-size: 22px;
  font-family: 'Philosopher', sans-serif;
  font-weight:100%;
  position: relative;
  cursor: pointer;
  color: #000;
  
}

.accordion .accordion-blk .accordionContent {
  ${'' /* display: none;s */}
  background: #fcfafa;
  padding: 20px;
  border-left: #e8e8e8 solid 1px;
  border-right: #e8e8e8 solid 1px;
  border-bottom: #e8e8e8 solid 1px;
}
p {
  margin: 0 0 18px !important;
}
p {
  color: #000;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
  ${'' /* margin-bottom: 15px; */}
}


`

export default Accordion ;