import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import styles from './footer.module.css'

const links = [
    {
        label: 'Github Link',
        url: 'https://www.github.com/CaioCouto',
        icon: FaGithub
    },
    {
        label: 'Frontend Mentor Link',
        url: 'https://www.frontendmentor.io/profile/CaioCouto',
        icon: FaExternalLinkAlt
    },
]

function Footer() {
    return (
            <footer id="footer" className={ `footer ${styles["footer"]}` }>
                <p>Design and coded by Caio Couto.</p>
                
                <div>
                    {
                        links.map((link, index) => (
                            <a key={ index } className={ styles["footer-link"] } href={ link.url } target='blank_'>
                                <p style={{ display: 'none' }}>{ link.label }</p>
                                <link.icon 
                                    className={ `${styles["footer-icon"]} ${styles["footer-icon-menu"]}` }
                                />
                            </a>
                        ))
                    }
                </div>
            </footer>
        )
}

export default Footer
