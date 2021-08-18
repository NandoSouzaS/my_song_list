import { createStore } from "redux";

function reducer() {
  return [
    
    {
      id: 1,
      img: "img",
      name: "name",
      artist: "artist",
      releaseDate: "releaseDate",
      duration: "duration",
    },
    {
      id: 2,
      img: "img",
      name: "name2",
      artist: "artist",
      releaseDate: "releaseDate",
      duration: "duration",
    },
  ];
}

const store = createStore(reducer);

export default store;
