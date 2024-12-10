import arrowDown from './img/arrowDown.svg';
import { TYPES, HAUSES, PLOTS, COMMERCIAL, SERVICES } from './const';
import { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

function Filter({typeObj, onListItemChange}) {
  const shortcutName = 'Коммерческая';
  const longType = 'comm';
  const outFilter = 'services';
  const arrTypes = Object.keys(TYPES).filter((item) => item !== outFilter);
  let current ='';
  

  const [optionsOpen, setOptionsOpen] = useState({
    types: false,
    subject: false,    
  });

  
  const firstFilter = typeObj.typeValue === longType ? shortcutName : TYPES[typeObj.typeValue].type;
  
  const secondFilter = TYPES[typeObj.typeValue].meaning;
  
  const handleListClick = (e) => {
    const strType = e.currentTarget.className;
    let typeFilter = '';
    for(let item of Object.keys(optionsOpen)){
      if(strType.includes(item)){
        typeFilter = item;
        current = optionsOpen[item];
      }
    }
    setOptionsOpen((prev) => {
      for (const key of Object.keys(prev)) {
        if(key !== typeFilter){}
        prev[key] = false;
      }        
      return ({...prev, [typeFilter]: !current})
    })
  };

  const handleItemTypeClick = (type) => {
    typeObj.typeValue = type;
    typeObj.subject = '';
  }

  const handleItemSubClick = (sub) => {    
    typeObj.subject = sub;

  }

  return (
    
    <div className="catalog-filter" >

      <section className="catalog-info">

        <div className="breadcrumbs">
          <div className="breadcrumbs-container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                Главная /
                
              </li>

              <li className="breadcrumbs__item">
                Купить 1-комн. квартиру                
                
              </li>
            </ul>
          </div>
        </div>

        <div className="catalog-info__sort">
          <div className="catalog-info__sort--text">
            <span className="catalog-info__title">Купить 1-комн. квартиру</span>
            <span className="catalog-info__result">100 результатов</span>
          </div>
          <div>
            <span>Сначала новые</span>
            <img className="arrow-filter" src={arrowDown} alt="arrow" width="16" height="16" />
          </div>
        </div>
        
      </section>

      <div className="catalog-filter__wrapper">

        <div className="catalog-filter__block">
          <div className="catalog-filter__block--wrapper catalog-filter__types" onClick={handleListClick}>            
            <div className="title ">
              <span className="title-type ">Тип</span>              
              <span className="sorting-type">{firstFilter}</span>
            </div>
            <ul className={cn( 'types-filter__options--custom', {'flats__options--opened': optionsOpen.types})}>
              {
                arrTypes.map((typeFil) => <li onClick={()=> handleItemTypeClick(typeFil)} key={`${typeFil}SortFilter`} className="flats__option" tabIndex="0">{TYPES[typeFil].type}</li>)
              }
            </ul>
            
            <img className="arrow-filter" src={arrowDown} alt="arrow" width="16" height="16" />
          </div>
        </div>

        <div className="catalog-filter__block">
          <div className="catalog-filter__block--wrapper catalog-filter__subject" onClick={handleListClick}>
            <div>
              <div className="title">
                <span className="title-type">{secondFilter}</span>            
                <span className="sorting-type">{typeObj.subject}</span>
              </div>
              <ul className={cn( 'subject-filter__options--custom', {'flats__options--opened': optionsOpen.subject})}>
                {
                  TYPES[typeObj.typeValue].value.map((sub) => <li onClick={()=> handleItemSubClick(sub)} key={`${sub}SortFilter`} className="flats__option" tabIndex="0">{sub}</li>)
                }
              </ul>
            </div>
            <img className="arrow-filter" src={arrowDown} alt="arrow" width="16" height="16" />
          </div>
        </div>
        {
          ['Стоимость', 'Площадь'].map((item) => 
            <div className="catalog-filter__block" key={`${item}otherFil`}>
              <div className="title">
                <span className="title-type">{item}</span>          
                <span className="sorting-type"></span>
              </div>
              <div className="catalog-filter__content">                            
              </div>
              <img className="arrow-filter" src={arrowDown} alt="arrow" width="16" height="16" />
            </div>
          )
        }

        

        <div className="catalog-filter__block catalog-filter__block--btn">
          <div className="block-btn__wrapper">
            <button className="catalog-btn--add">Доп.фильтры</button>
            <button className="catalog-btn">Показать</button>
          </div>          
        </div>

      </div>

      <div className="extra-filter__block "></div>
      
    </div>
    
  )
}

export default Filter;

