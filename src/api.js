const BACKEND_URL = 'https://ecrz-back.onrender.com';
const END_POINT = '/apartments';
const responce = fetch(`${BACKEND_URL}${END_POINT}`).then((response) => response.json());

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const Route = {
  GET_DATA: '/apartments',
  SEND_DATA: '/apartments/room-type',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BACKEND_URL}${route}`, {method, body});

const getData = () => load(Route.GET_DATA);
const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

export {getData,sendData};