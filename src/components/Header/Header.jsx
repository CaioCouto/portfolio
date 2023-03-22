import { useContext } from 'react'
import { FaBars, FaCuttlefish, FaTimes } from 'react-icons/fa'

import styles from './header.module.css'
import Sidebar from '../Sidebar'
import { ShowMenu } from '../../contexts'

let lastScroll = window.pageYOffset

function toggleHeader(showMenu) {
    window.onscroll = () => {
        const headerElement = document.querySelector('#header')
        if((window.pageYOffset > lastScroll) && !showMenu) {
            headerElement.classList.add(styles["header--hidden"])
        }
        else {
            headerElement.classList.remove(styles["header--hidden"])
        }
        lastScroll = window.pageYOffset
    }
}

function Header() {
    const { showMenu, setShowMenu } = useContext(ShowMenu)

    toggleHeader(showMenu)

    return (
            <header id="header" className={ `header ${styles["header"]}` }>
                <FaCuttlefish className={ `header-logo ${styles["header-icon"]}` }/>
                {
                    !showMenu ?
                    <FaBars 
                        className={ `${styles["header-icon"]} ${styles["header-icon-menu"]}` }
                        onClick={ () => setShowMenu(true) }
                    />
                    :
                    <FaTimes 
                        className={ `${styles["header-icon"]} ${styles["header-icon-menu"]}` }
                        onClick={ () => setShowMenu(false) }
                    />
                }
                <Sidebar/>
            </header>
        )
}

export default Header
