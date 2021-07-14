import React, {useEffect, useState} from 'react';
import navMenuStyles from "./nav-menu-styles";
import { ReactComponent as CalenderIcon } from '../../assets/Calender.svg'
import { ReactComponent as StarIcon } from '../../assets/Star.svg'
import {
    Avatar,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from "@material-ui/core";
import clsx from "clsx";

function NavMenu() {
    const classes = navMenuStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Typography variant="h6" gutterBottom>
                                Remy Sharp
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Mentored sessions: - 12
                            </Typography>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>ICON</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return <div>
        <div className={classes.menu} onClick={toggleDrawer('right', true)}>
                <div className={classes.menuItem}>
                    <CalenderIcon />
                    <p>Past sessions</p>
                </div>
                <div className={classes.menuItem}>
                    <StarIcon />
                    <p>Leader board</p>
                </div>
        </div>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
        </Drawer>
    </div>
}

export default NavMenu;