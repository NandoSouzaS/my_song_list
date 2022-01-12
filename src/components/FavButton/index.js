import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../styles";

export default (props) => {
  const baseURL = "http://localhost:3001/favorites";

  //CHECKING IF THE MODULE BEING RENDERIZED IS IN THE FAVORITES LIST
  props.favorites.forEach((u) => {
    if (u.id === props.module.id) {
      props.module.fav = true;
    }
  });

  //POSTING OR DELETING THE MODULE OF THE FAVORITES LIST
  function handleFavorite(module) {
    let idChecked = false;

    function idCheck(u, id) {
      if (u === id) {
        idChecked = true;
      }
    }

    props.favorites.forEach((u) => {
      idCheck(u.id, module.id);
    });

    let url = baseURL;
    if (idChecked) {
      url = `${baseURL}/${module.id}`;
      axios.delete(url).then((props.module.fav = !props.module.fav));
    } else {
      url = baseURL;
      axios.post(url, module).then((props.module.fav = !props.module.fav));
    }

    axios.get(baseURL).then((resp) => {
      props.setFavorites(resp.data);
    });
  }
  return (
    <Button
      fav={props.module.fav}
      onClick={() => {
        handleFavorite(props.module);
      }}
    >
      &#x2665;
    </Button>
  );
};
