import React from "react";

import { useSelector } from "react-redux";

import { Content } from "../../styles";
import { Card } from "../../styles";
import { Btn } from "../../styles";

import deezer from "./deezer.png";

export default async function(){
  let modules = useSelector((state) => {
    return state;
  });

  
  return (
    <Content>
      {modules.map((module) => (
        <Card key={module[0].id}>
          <img src={module.album.cover_small} alt="cover"></img>
          <h1>{module.title_short}</h1>
          <p>{module.artist.name}</p>
          {/* <time>{module.releaseDate}</time> */}
          <time>{module.duration}</time>
          <Btn>
            <span>
              <div>&#x2665;</div>
            </span>
            <span>
              <img src={deezer} alt="dezzer_logo"></img>
            </span>
          </Btn>
        </Card>
      ))}
    </Content>
  );
};
