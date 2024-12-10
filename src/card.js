import photo from './img/photoFlat2.png';
import floor from './img/floor.svg';
import mtr1 from './img/mtr1.svg';
import mtr2 from './img/mtr2.svg';
import line41 from './img/line41.svg';

function Card({cardObj}) {
  return (
    <article className='place-card'>

      <div className="cities__image-wrapper place-card__image-wrapper">        
        <img className="place-card__image" src={photo} width="308" height="214" alt="Place " />
      </div>

      <div className="place-card__info" >        
        <div className="place-card__location">            
          <span className="place-card__price-text">Квартира в новостройке</span>
          <span className="place-card__price-text">{cardObj.housingOption}, {cardObj.meters} м<sup>2</sup></span>
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
            <b className="card__price-value">&#36;{cardObj.price}</b>
            <img className="place-card__image" src={line41} width="18" height="18" alt="Place " />
            <b className="place-card__price-text">BIN 197 797</b>
          </div>
          
          <span>&#36;1000 &#8260; м</span>
        </div>
        
      </div>

    </article>
  )
}



export default Card;