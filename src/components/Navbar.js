import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div><img src="Foto_familia.png" className="Foto"
      height= "85px"
      width="120px"/> </div>
      <div >
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="heart">&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
