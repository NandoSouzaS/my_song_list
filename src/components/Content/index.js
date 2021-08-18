import React from "react";

import { Content } from "../../styles";

import { connect } from "react-redux";

import { Card } from "../../styles";
import { Btn } from "../../styles";

import deezer from "./deezer.png";

const Main = ({ modules }) => {
  return (
    <Content>
      {modules.map((module) => (
        <Card key={module.id}>
          <img key={module.img} alt="cover"></img>
          <h1>{module.name}</h1>
          <p>{module.artist}</p>
          <time>{module.releaseDate}</time>
          <time>{module.duration}</time>
          <Btn>
            <span> &#x2665;</span>
            <span>
              <img src={deezer} alt="dezzer_logo"></img>
            </span>
          </Btn>
        </Card>
      ))}
    </Content>
  );
};

export default connect((state) => ({ modules: state }))(Main);
