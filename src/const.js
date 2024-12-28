export const NUMBER_CARDS_ON_PAGE = 12;

export const TYPES = {
  flats: {
    type:'Квартиры',
    value: ['1-к.квартиры', '2-к.квартиры'],//'3-к.квартиры', '4-к.квартиры', 'Комнаты в квартирах'
    meaning: 'Кол-во комнат',
  },
  houses: {
    type:'Дома',
    value: ['Жилой дом', 'Садовый дом'],
    meaning: 'Тип строения',
  },
  plots: {
    type:'Участки',
    value: ['Участки до 10сот.', 'Участки до 20сот.', 'Участки ИЖС', 'Участки Промназначения', 'Все объекты'],
    meaning: 'Тип участка',
  },
  comm: {
    type:'Коммерческая недвижимость',
    value: ['Офисы', 'Склады', 'Свободное назначение', 'Все объекты'],
    meaning: 'Назначение',
  },
  services: {
    type:'Юридические услуги',
    value: ['Продажа недвижимости', 'Помощь в оформлении кредита', 'Оформление тех.документации', 'Вывод в нежилой фонд'],
    meaning: null,
  }
  
};

export const FLATS = {
  '1-к.квартиры': 'ONE_ROOM',
  '2-к.квартиры': 'TWO_ROOM',
};

export const PLOTS = ['Участки до 10сот.', 'Участки до 20сот.', 'Участки ИЖС', 'Участки Промназначения', 'Все объекты'];

export const HOUSES = {
  'Жилой дом': 'RESIDENTIAL',
  'Садовый дом': 'GARDEN%20',
};

export const COMMERCIAL = ['Офисы', 'Склады', 'Свободное назначение', 'Все объекты'];

export const SERVICES = ['Продажа недвижимости', 'Помощь в оформлении кредита', 'Оформление тех.документации', 'Вывод в нежилой фонд'];

export const TypeFilter ={
  flats: 'Кол-во комнат',
  hauses: 'Тип строения',
  plots: 'Тип участка',
  commercial: 'Назначение',
}

export const getKeyObj = (arr, value) => {
  const key = Object.keys(arr).find(k => arr[k] === value);
  return key;
}

export const BACKEND_URL = 'https://ecrz-back.onrender.com';
export const END_POINT = '/apartments';

