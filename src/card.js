import floor from './img/floor.svg';
import mtr1 from './img/mtr1.svg';
import mtr2 from './img/mtr2.svg';
import line41 from './img/line41.svg';
import { useRef } from 'react';

function Card({cardObj}) {
  let slideIndex = 0;
  const slideCount = 3;
  const prev = 'prev-button';
  const next = 'next-button';
  const sliderRef = useRef(null);

  const handleButtonSliderClick = (e) => {
    
    if(e.target.classList.contains(prev)){
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      slide();
    } else if(e.target.classList.contains(next)){
      slideIndex = (slideIndex + 1) % slideCount;
      slide();
    }
    
  };

  const slide = () => {
    const imageWidth = sliderRef.current.clientWidth;
    const slideOffset = -slideIndex * imageWidth;
    sliderRef.current.style.transform = `translateX(${slideOffset}px)`;
  }

  return (
    <article className='place-card'>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <img src="./img/photoFlat.png" width="30" height="21" alt="Фото1"/>
          <img src="./img/photoFlat2.png" width="30" height="21" alt="Фото1"/>
          <img src="./img/photoFlat3.png" width="30" height="21" alt="Фото1"/>
        </div>
        <button className="prev-button" type="button" aria-label="Посмотреть предыдущий слайд" onClick={handleButtonSliderClick}>&lt;</button>
        <button className="next-button" type="button" aria-label="Посмотреть следующий слайд" onClick={handleButtonSliderClick}>&gt;</button>
	    </div>
      

      <div className="place-card__info" >        
        <div className="place-card__location">            
          <span className="place-card__price-text">{cardObj.name}</span>
          <span className="place-card__price-text">{cardObj.roomType ? cardObj.roomType : cardObj.houseType}, {cardObj.totalArea} м<sup>2</sup></span>
          <span className="place-card__price-text">Брест, К.Маркса, 12</span>
          
        </div>

        <div className="half-line"><hr style={{borderWidth: 1+'px', borderColor: '#E8E8E9',}}></hr></div>

        <div className="card__feature">
          <div className="card__feature-block">
            <img className="place-card__image" src={mtr1} width="20" height="20" alt="Place " />
            <span className="place-card__price-text"> 14м<sup>2</sup> </span>
          </div>
          <div className="card__feature-block">
            <img className="place-card__image" src={mtr2} width="20" height="20" alt="Place " />
            <span className="place-card__price-text"> 25м<sup>2</sup> </span>    
          </div>
          <div className="card__feature-block">
            <img className="place-card__image" src={floor} width="20" height="20" alt="Place " />
            <span className="place-card__price-text"> 3&#47;10 этаж</span>
          </div>
          
        </div>
        
        
        <div className="card__price">
          <div className="card__price-info">
            <b className="card__price-value">&#36;{cardObj.priceUsd}</b>
            <img className="place-card__image" src={line41} width="18" height="18" alt="Place " />
            <b className="place-card__price-text">BIN {cardObj.priceByn}</b>
          </div>
          
          <span>&#36;1000 &#8260; м</span>
        </div>
        
      </div>

    </article>
  )
}



export default Card;