import React, { useEffect, useState } from "react";
import axios from "axios";
import * as actions from "../../Api";
import { Content } from "../../styles";
import { Card } from "../../styles";
import { BtnHolder } from "../../styles";

import deezer from "./deezer.png";

const baseURL = "http://localhost:3001/favorites";

export default (props) => {
  const [modules, setModules] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((resp) => {
      setFavorites(resp.data);
    });
  }, []);

  //to set a module as favorite
  function handleFavorite(module) {
    let idChecked = false;

    function idCheck(u, id) {
      if (u === id) {
        idChecked = true;
      }
    }
    favorites.forEach((u) => {
      idCheck(u.id, module.id);
    });
    let url = baseURL;
    if (idChecked) {
      url = `${baseURL}/${module.id}`;
      axios.delete(url);
    } else {
      url = baseURL;
      axios.post(url, module);
    }
    axios.get(baseURL).then((resp) => {
      setFavorites(resp.data);
    });
  }

  let search = "";

  if (props.term === "") {
    search = "favorites";
  } else {
    search = props.term;
  }

  useEffect(() => {
    actions.getSearch(search).then((response) => {
      setModules(response.data.data);
    });
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
            <button onClick={() => handleFavorite(module)}>
              &#x2665;
            </button>
          </BtnHolder>
        </Card>
      ))}
    </Content>
  );
};
