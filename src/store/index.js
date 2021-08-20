import { createStore } from "redux";

import axios from "axios";

let db = [];
const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "eminem" },
  headers: {
    "x-rapidapi-key": "68cffcc755msh968a83ec34299dep100935jsn6d95566c462d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

async function transferData(resp) {
  db[0] = await axios.request(options).then((response) => {
    return response.data.data;
  }).then(response =>resp(response))
}

function reducer(state) {
  return state;
}



const store = createStore(transferData(reducer()));

export default store;
