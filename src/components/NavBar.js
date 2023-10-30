//Importation du fichier CSS pour styliser la barre de navigation
import "./NavBar.css";
// Définition du composant NavBar
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <h3>Welcome to Brastlewark Town</h3>
        </div>
      </nav>
    </>
  );
}
// Exportation du composant NavBar pour qu'il puisse être utilisé ailleurs dans l'application
export default NavBar;
