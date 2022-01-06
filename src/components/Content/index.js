import React, { useEffect, useState } from "react";
import * as actions from "../Api";
import { Content } from "../../styles";
import { Card } from "../../styles";
import { BtnHolder } from "../../styles";

import deezer from "./deezer.png";

export default (props) => {
  const [modules, setModules] = useState([]);
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);

  //to set a module as favorite
  function handleFavorite(id) {
    const newFavorites = modules.map((module) => {
      if (module.id == id) {
        return {...module, favorite: !module.favorite};
      }
    });
    setFavorites(...favorites, newFavorites);
  }

  let search = "";

  if (props.term === "") {
    search = ":favorites";
  } else {
    search = props.term;
  }

  useEffect(() => {
    if (search === ":favorites" || search === "" || search === undefined) {
      setCards(favorites);
    } else {
      actions.getSearch(search).then((response) => {
        setModules(response.data.data);
        setCards(modules);
      });
    }
  }, [search]);

  return (
    <Content>
      {cards.map((module) => (
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
            <button onClick={() => handleFavorite(module.id)}>&#x2665;</button>
          </BtnHolder>
        </Card>
      ))}
    </Content>
  );
};
