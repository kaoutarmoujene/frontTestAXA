import React, { useState, useEffect } from "react";
import "./Search.css";

function Search() {
  // Utilisation de l'état pour stocker les données des gnomes
  const [datas, setDatas] = useState([]);
  // Utilisation de l'état pour stocker le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Utilisation de l'effet useEffect pour récupérer les données des gnomes depuis une URL
  useEffect(() => {
    // Requête pour obtenir les données des gnomes depuis une source externe
    fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then((response) => {
        // Vérification de la réponse
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((json) => {
        // Stockage des données des gnomes dans l'état 'datas'
        setDatas(json.Brastlewark);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fonction de gestion de la saisie de recherche
  const handleSearchTerm = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    // Mise à jour de l'état 'searchTerm' avec le terme de recherche
    setSearchTerm(value);
  };
  return (
    <>
      {/* la barre de recherche */}
      <div className="searchBar">
        <input
          name="searchBar"
          id="searchbar"
          type="text"
          data-testid="searchbar"
          onChange={handleSearchTerm}
        />
      </div>

      <div className="search__results">
        {/* Filtrage des gnomes en fonction du terme de recherche */}
        {datas
          .filter((val) => {
            return (
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Recherche par nom
              val.age.toString().includes(searchTerm.toLowerCase()) || // Recherche par âge
              val.hair_color.toLowerCase().includes(searchTerm.toLowerCase()) || // Recherche par couleur de cheveux
              val.professions.some((profession) =>
                profession.toLowerCase().includes(searchTerm.toLowerCase())
              ) || // Recherche par professions
              val.friends.some(
                (friend) =>
                  friend.toLowerCase().includes(searchTerm.toLowerCase()) //Recherche par amis
              )
            );
          })
          .map((val) => (
            // Affichage des résultats de la recherche
            <figure className="snip1527">
              <div className="image">
                <img src={val.thumbnail} alt={val.name} />
              </div>
              <figcaption className="caption">
                <div className="date">
                  <span className="day">{val.age}</span>
                  <span className="month">ans</span>
                </div>
                <h3>{val.name}</h3>
                <p>Professions : {val.professions.join(", ")}</p>
                <div className="texte">
                  <p>Poids : {val.weight}</p>
                  <p>Taille : {val.height}</p>
                  <p>Couleur des cheveux : {val.hair_color}</p>
                  <p>Amis : {val.friends.join(", ")}</p>
                </div>
              </figcaption>
            </figure>
          ))}
      </div>
    </>
  );
}

export default Search;
