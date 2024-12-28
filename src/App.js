import './App.css';
import Card from './card';
import Filter from './filter';
import Pagination from './pagination';
import { useState } from 'react';
import { TYPES } from './const';
import Footer from './footer';
import Header from './header';

import { useEffect } from 'react';
import { BACKEND_URL } from './const';

function App() {
  
  const [typeObj, setType] = useState({
    typeValue: Object.keys(TYPES)[0],
    subject: '',
  });

  const [numberPage, setNumberPage]= useState(1);
  const [pages, setPages]= useState(1);
  const [cards, setCards]= useState([]);
  const [subType, setSubType]= useState({
    sub: '',
    value: '',
  });

  useEffect(() => {
    
    const endPoint = typeObj.typeValue === Object.keys(TYPES)[0] ? '/apartments' : '/houses';
    const parameters = subType.sub !== '' ? `?${subType.sub}=${subType.value}&` : '?';
    const responce = async() => await fetch(`${BACKEND_URL}${endPoint}${parameters}page=${numberPage}`)
    .then((response) => response.json())
    .then((json) => {
      
      setPages(json.totalPages);
      setCards(json.entities);
    });
    responce();
  }, [numberPage, typeObj.typeValue, subType.sub, subType.value]);

    
  const handleAddItem = (item, val) => {
    setType({
      typeValue: val,
      subject: item
    });
  };
  

  return (
    <>
      <Header onListItemAdd = {handleAddItem} />
      <main>
        <Filter typeObj={typeObj} onListItemChange={setCards} onChangeCountPage ={setPages} onChangeType={setType} onChangeCurrentPage={setNumberPage} onChangeSubType={setSubType}/>
        <div className="card__wrapper">
          {cards.map((item, index) => <Card key={`${item.id}card`} cardObj={item}/>)}
          
        </div>
      </main>
      <Pagination onChangePage={setNumberPage} sumPages={pages}/>
      <Footer />      
    </>
  );
}

export default App;
