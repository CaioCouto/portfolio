import { useContext } from 'react'

import styles from './sidebar.module.css'
import { ShowMenu } from '../../contexts'
import NetworkIcons from '../NetworkIcons'


function Sidebar() {
    const { showMenu, setShowMenu } = useContext(ShowMenu)
    
    function scrolltoContent(event) {
        const desiredSession = event.target.textContent.toLowerCase().split(' ').join('')
        document.querySelector(`#${desiredSession}`).scrollIntoView({ behavior:'smooth', block:'start' })
        setShowMenu(false)
    }

    return (
        <aside className={ `sidebar ${styles["sidebar"]} ${ showMenu ? styles["sidebar--active"] : '' }` }>
            <ul className={ `${styles["sidebar-menu-list"]}` }>
                <li className={ styles["sidebar-menu-listItem"]}><a className={ styles["sidebar-menu-link"]} onClick={ scrolltoContent }>Home</a></li>
                <li className={ styles["sidebar-menu-listItem"]}><a className={ styles["sidebar-menu-link"]} onClick={ scrolltoContent }>Projects</a></li>
                <li className={ styles["sidebar-menu-listItem"]}><a className={ styles["sidebar-menu-link"]} onClick={ scrolltoContent }>About Me</a></li>
            </ul>
            <NetworkIcons className={ `${styles["sidebar-icons"]}` }/>
        </aside>
    )
}

export default Sidebar
