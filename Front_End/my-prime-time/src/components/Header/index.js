import React from "react";
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../images/My_Prime_Time.jpg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import IMDbLogo from '../../images/IMDb_Logo.png'
import Button from "../Button";

import { Wrapper, Content, LogoImg, TMDBLogoImg, IMDbLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={Logo} alt='mpt-logo' />
            </Link>
            <h3><Link to='/watchlist'>Watchlist</Link></h3>
            <h3><Link to='/watchlist/watched'>Watched Movies</Link></h3>
            
            <IMDbLogoImg src={IMDbLogo} alt='IMDb-Logo' />
            <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />

        </Content>
    </Wrapper>
);

export default Header;