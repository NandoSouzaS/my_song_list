import React, { useEffect, useState } from "react";
import axios from "axios";
import * as actions from "../../Api";
import { Content } from "../../styles";
import { Card } from "../../styles";
import { BtnHolder } from "../../styles";
import FavButton from "../FavButton";

import deezer from "./deezer.png";

export default (props) => {
  const [modules, setModules] = useState([]);
  const [favorites, setFavorites] = useState([]); //UPDATE EVERYTIME THE FAV BUTTON IS CLICKED, THEN IS USED TO TOGGLE THE COLLOR OF IT (CHECK src\components\FavButton\index.js)

  useEffect(() => {
    axios.get("http://localhost:3001/favorites").then((resp) => {
      setFavorites(resp.data);
    });
  }, []);

  let search = "";

  if (props.term === "" || typeof props.term != "string") {
    search = ":favorites";
    console.log(typeof props.term);
  } else {
    search = props.term;
  }

  useEffect(() => {
    if (search === ":favorites" || search == ":menu") {
      axios.get("http://localhost:3001/favorites").then((resp) => {
        setModules(resp.data);
      });
    } else {
      actions.getSearch(search).then((response) => {
        setModules(response.data.data);
      });
    }
  }, [search]);

  return (
    <Content>
      {modules.map((module) => (
        <Card key={module.id}>
          <img src={module.album.cover_medium} alt="cover"></img>
          <h1>{module.title_short}</h1>
          <p>{module.artist.name}</p>
          <time>{module.releaseDate}</time>
          <time>{module.duration}</time>
          <BtnHolder>
            <a href={module.link}>
              <img src={deezer} alt="dezzer_logo"></img>
            </a>
            <FavButton
              favorites={favorites}
              setFavorites={setFavorites}
              module={module}
            ></FavButton>
          </BtnHolder>
        </Card>
      ))}
    </Content>
  );
};
