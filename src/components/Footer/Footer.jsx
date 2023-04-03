import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import styles from './footer.module.css'
import NetworkIcons from '../NetworkIcons'

function Footer() {
    return (
            <footer id="footer" className={ `footer ${styles["footer"]}` }>
                <p>Design and coded by Caio Couto.</p>
                
                <NetworkIcons />
            </footer>
        )
}

export default Footer
