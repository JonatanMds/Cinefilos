import {Link} from 'react-scroll'
import styles from './NavBar.module.css'
import cinefilos from '../../assets/img/cinefilos-logo2.png'

function NavBar(){

    return(
        <nav  className={styles.navbar}>
            <ul>
                {/* <li><Link to="destaque" smooth={true} duration={1000}>Home</Link></li> */}
                <li>Cinéfilos</li>
                <li><Link to="tops" smooth={true} duration={1000}>Tops da semana</Link></li>
            </ul>
        </nav>
    )
}


export default NavBar
