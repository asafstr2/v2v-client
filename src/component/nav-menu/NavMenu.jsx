import React, {useEffect, useState} from 'react';
import navMenuStyles from "./nav-menu-styles";
import { ReactComponent as CalenderIcon } from '../../assets/Calender.svg'
import { ReactComponent as StarIcon } from '../../assets/Star.svg'

function NavMenu() {
    const classes = navMenuStyles();

    return <div className={classes.menu}>
            <div className={classes.menuItem}>
                <CalenderIcon />
                <p>Past sessions</p>
            </div>
            <div className={classes.menuItem}>
                <StarIcon />
                <p>Leader board</p>
            </div>
    </div>
}

export default NavMenu;