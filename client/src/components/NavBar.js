import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom';

import SearchForm from "./SearchForm";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const { basket } = useContext(Context);
    const history = useHistory();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const basketLabel = basket.getCounter() > 0 ? "Товаров в корзине:" + basket.getCounter() : "В корзине нет товаров";

    return (
        <nav class="navbar navbar-dark bg-info">
            <Container>
                <NavLink style={{ color: 'white', fontSize: 32, fontFamily: ""}} to={SHOP_ROUTE}>Book Store</NavLink>            
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <SearchForm />
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(BASKET_ROUTE)}
                        >
                            {basketLabel}
                        </Button>
                        <Button
                            style={{fontFamily: "'Mochiy Pop P One', sans-serif"}}
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                            className="ml-3"
                        >
                            Администрационная панель
                        </Button>  
                        <Button
                            style={{fontFamily: "'Fira Sans', sans-serif"}}
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-3"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button 
                            style={{fontFamily: "'Fira Sans', sans-serif"}}
                            variant={"outline-light"} 
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </nav>

    );
});

export default NavBar;
