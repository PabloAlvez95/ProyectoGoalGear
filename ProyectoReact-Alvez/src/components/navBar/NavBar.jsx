import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'
import '../cartWidget/CartWidget.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Menu>
                <MenuButton as={Button} rightIcon={<GiHamburgerMenu />} style={{ marginLeft: 1 }}>
                </MenuButton>
                <MenuList>
                    <MenuItem>Remeras</MenuItem>
                    <MenuItem>Buzos</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                    <MenuItem>Todos Nuestros Productos</MenuItem>
                    <MenuItem>Contactanos</MenuItem>
                </MenuList>
            </Menu>

                <div  className='CarWidget'>4<CartWidget /></div>
        </div>
    )
}

export default NavBar
