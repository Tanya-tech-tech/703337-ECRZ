import './App.css';
import Card from './card';
import Filter from './filter';
import Pagination from './pagination';
import { useState } from 'react';
import { TYPES } from './const';
import Footer from './footer';
import Header from './header';
import { mockArr } from './mock';
//https://ru.hexlet.io/courses/html/lessons/github/theory_unit
//https://ru.hexlet.io/blog/posts/kak-deploit-prilozhenie-na-render-gayd-dlya-frontenderov-i-bekenderov


function App() {
  const [typeObj, setType] = useState({
    typeValue: Object.keys(TYPES)[0],
    subject: '',
  });
  

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
        <Filter typeObj={typeObj} onListItemChange={handleAddItem}/>
        <div className="card__wrapper">
          {mockArr.map((item, index) => <Card key={`${index}card`} cardObj={item}/>)}
          
        </div>
      </main>
      <Pagination />
      <Footer />      
    </>
  );
}

export default App;
