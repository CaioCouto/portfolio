import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import styles from './networkIcons.module.css'

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

function NetworkIcons({ className }) {
    return (   
        <div className={ styles["NetworkIcons-links"] }>
            {
                links.map((link, index) => (
                    <a key={ index } className={ `${styles["NetworkIcons-link"]} ${className}` } href={ link.url } target='blank_'>
                        <p style={{ display: 'none' }}>{ link.label }</p>
                        <link.icon 
                            className={ `${styles["NetworkIcons-icon"]} ${styles["NetworkIcons-icon-menu"]}` }
                        />
                    </a>
                ))
            }
        </div>
    )
}

export default NetworkIcons
