import { TYPES } from "./const";
import arrowDown from './img/arrowDown.svg';
import { useState } from "react";
import cn from "classnames";
import { HAUSES, PLOTS, COMMERCIAL, SERVICES } from "./const";


function NavHeader({onListItemAdd}) {
  const typeArr = Object.keys(TYPES);
  const [type, setType] = useState('');
  const [optionsOpen, setOptionsOpen] = useState({
    flats: false,
    hauses: false,
    plots: false,
    comm: false,
    services: false,
  });

  const handleListClick = (e) => {
    let typeFilter = '';
    const notFilter = 'services';
    const strType = e.currentTarget.className;
    for(let item of typeArr){
      if(strType.includes(item)){
        typeFilter = item;
      }
    }    
    
    if(e.currentTarget.classList.contains(`${typeFilter}__sorting-type`)){
      const current = optionsOpen[typeFilter]
      setOptionsOpen((prev) => {        
        for (const key of Object.keys(prev)) {
          if(key !== typeFilter){}
          prev[key] = false;
        }        
        return ({...prev, [typeFilter]: !current})
      });

      if(!optionsOpen[typeFilter] && typeFilter !== notFilter){        
        setType(typeFilter);
      } else{
        setType('');
      }
    }    
  };

  const handleListItemClick = (item ) => {    
    setOptionsOpen({...optionsOpen, [type]: false});
    if(type !== ''){
      onListItemAdd(item, type);
    } 
    else{
      setOptionsOpen({...optionsOpen, services: false});
    }    
  };

  return (
    <nav className="main-nav header__main-nav">
              <ul className="main-nav__list">
                {Object.keys(TYPES).map(((item) => 
                 <li key={`${item}Sort`} className="main-nav__item">
                  <div className={`sorting-type ${item}__sorting-type`} onClick={handleListClick}>
                    <span className="main-nav__link--text">{TYPES[item].type}</span>
                    <img className="arrow" src={arrowDown} alt="arrow" width="16" height="16" />
                  </div>           
                  <ul className={cn( `${item}__options--custom`, {'flats__options--opened': optionsOpen[item]})}>
                    {TYPES[item].value.map((sub) => <li onClick={()=> handleListItemClick(sub, item)} key={`${sub}Sort`} className="flats__option" tabIndex="0">{sub}</li>)}
                    
                  </ul>
                </li>))}

                <li className="main-nav__item">                
                  <span className="main-nav__link--text">О компании</span>
                </li>

              </ul>
            </nav>
  )
}

export default NavHeader;

