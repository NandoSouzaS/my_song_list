import React, { useEffect, useState } from "react";
import * as actions from "../Api";
import { Content } from "../../styles";
import { Card } from "../../styles";
import { Btn } from "../../styles";
import deezer from "./deezer.png";
import SearchBar from "../Header/SearchBar";

export default (props) => {
  const [modules, setModules] = useState([]);
  let search = "eminem";
  if (props.term === "") {
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
          {<time>{module.releaseDate}</time>}
          <time>{module.duration}</time>
          <Btn>
            <a>
              <div>&#x2665;</div>
            </a>
            <a href={module.link}>
                <img src={deezer} alt="dezzer_logo"></img>
            </a>
          </Btn>  
        </Card>
      ))}
    </Content>
  );
};