import React, {useEffect, useState} from 'react';
import navMenuStyles from "./nav-menu-styles";
import { ReactComponent as CalenderIcon } from '../../assets/Calender.svg'
import { ReactComponent as StarIcon } from '../../assets/Star.svg'
import {
    Avatar,
    Divider,
    Drawer,
    List,
    ListItem, ListItemAvatar,
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
            <ListSubheader>Most Active Mentors</ListSubheader>
            <List>
                {[{name: 'Nicci Troiani', text: 'Mentored sessions: 12'}, {name: 'George Fields', text: 'Mentored sessions: 9'}, {name: 'Jones Dermot', text: 'Mentored sessions: 6'}, {name: 'Jane Doe', text: 'Mentored sessions: 2'}].map((item, index) => (
                    <ListItem key={item.name}>
                        <ListItemAvatar>
                            <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListSubheader>Most Active Mentees</ListSubheader>
            <List>
                {[{name: 'Nicci Troiani', text: 'Participated sessions: 12'}, {name: 'George Fields', text: 'Participated sessions: 9'}, {name: 'Jones Dermot', text: 'Participated sessions: 6'}, {name: 'Jane Doe', text: 'Participated sessions: 2'}].map((item, index) => (
                    <ListItem key={item.name}>
                        <ListItemAvatar>
                            <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.text} />
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