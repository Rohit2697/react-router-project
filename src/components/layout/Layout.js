import { Fragment } from 'react';
import classes from './Layout.module.css'
import MainNaviogation from './MainNavigation';

const Layout = (props) => {

    return (
        <Fragment>
            <MainNaviogation />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout;