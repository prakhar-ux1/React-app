import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.scss"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navigation(props) {
    let history = useNavigate();
    const { logout } = useAuth0();
    const [isOpen, setOpen] = useState(false);
    const handle_button = (e) =>
        (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            setOpen(e)
        };

    const menu_item = [
        {
            text: "ToDo",
            Click: () => { history('/home') }
        },
        {
            text: "Card",
            Click: () => { history('/cards') }
        },
        {
            text: "Post",
            Click: () => { history('/posts') }
        },
        {
            text: "About Me",
            Click: () => { history('/about') }
        },
        {
            text: "Logout",
            Click: () => { history('/') }
        }

    ]
    return (
        <div className='navigationBar'>

            <div className='heading'><i className='fa  fa-connectdevelop'></i>
                <span>Connect</span>
            </div>
            <div className='menu'>
                <Link to="/home">Todos</Link>
                <Link to="/cards">Cards</Link>
                <Link to="/posts" >Posts</Link>
                <Link to="/about" >About me</Link>
                <Link on onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
            </div>
            <div className='Hamburger_menu' onClick={() => { setOpen(true) }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <Drawer open={isOpen} anchor="left" onClose={handle_button(false)}>
                <Box role="presentation" onClick={handle_button(false)}
                    onKeyDown={handle_button(false)} >
                    <List>
                        {menu_item.map((item) => {
                            const { text, Click } = item;
                            return (<ListItem key={text} disablePadding onClick={Click}>
                                <ListItemButton sx={{ textAlign: 'left' }}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>);
                        })}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default Navigation