import '../assets/styles/Header.css';
import logo from '/Imaganes/VariedadesActuales.png'
function Header(){
    return(
        <header className="header">
            <img src={logo}></img>
            <div id="header_div">
                <br></br>
                <center><span>Las Canciones más escuchadas de 2022</span></center>
            </div>
        </header>
    )
}
export default Header;