import axios from "axios";
const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 3000,
  headers: {
    "x-rapidapi-key": "68cffcc755msh968a83ec34299dep100935jsn6d95566c462d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export function getSearch(search) {
  const result = request.get(`search?q=${search}`);
  return result;
}
