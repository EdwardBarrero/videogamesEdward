import * as services from "../../../../redux/actions";
import React, { useState } from "react";
import { NAV_CONSTANTS } from "../../constants/nav-constants"; 
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary/dictionary"; 
import { useDispatch } from "react-redux"; 
import LinkComponent from "../../../../app-common/domain/molecules/link-component/link-component";
import Input from "../../../../app-common/domain/atoms/input/input";
import "./nav-organism-header.scss";

export default function NavOrganismHeader() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function submitHandle(e){
    e.preventDefault();
    dispatch(services.setBusqueda(search));
    dispatch(services.getGame(search)); 
  }

  function onChangeHandle(e){
    setSearch(e.target.value)
  }

  return (
    <div className="navbar">
      <div className="d-flex ms-3">
        <LinkComponent linkClass="nav-title color-1 me-3" text={NAV_CONSTANTS.CREATE_GAME.toUpperCase()} to='/home/creategame' fs=' m-0'/>
        <LinkComponent linkClass="nav-title color-1" text={NAV_CONSTANTS.FAVORITE_GAMES.toUpperCase()} to='/home/favorite' fs=' m-0'/>
      </div>
      <LinkComponent linkClass="nav-title color-1" text={NAV_CONSTANTS.WORLD_OF_GAMES.toUpperCase()} to='/home' fs='2' fw='bold'/>
      <form className="me-4" onSubmit={(e) => submitHandle(e)}>
        <Input placeholder={DICTIONARY.SEARCH_GAMES} onChange={(e) => onChangeHandle(e)}  />
      </form>
    </div>
  );
}