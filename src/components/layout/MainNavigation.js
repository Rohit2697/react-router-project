import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNaviogation = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to={'/quotelist'} activeClassName={classes.active} >All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add-new-quote'} activeClassName={classes.active} >Add Quotes</NavLink>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default MainNaviogation