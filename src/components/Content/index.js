import React, { useEffect, useState } from "react";
import * as actions from '../Api'
import { Content } from "../../styles";
import { Card } from "../../styles";
import { Btn } from "../../styles";

import deezer from "./deezer.png";


export default function () {
  const [modules, setModules] = useState([])
  let search = 'zé vaqueiro'
  useEffect(()=>{
    actions.getSearch(search).then((response)=>{setModules(response.data.data)})
    
  },[search])
  return (
    <Content>
      {modules.map((module) => (
        <Card key={module.id}>
          <img src={module.album.cover} alt="cover"></img>
          <h1>{module.title_short}</h1>
          <p>{module.artist.name}</p>
          {<time>{module.releaseDate}</time>}
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
}
