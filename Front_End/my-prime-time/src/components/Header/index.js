import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/My_Prime_Time.jpg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={Logo} alt='mpt-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />
        </Content>
    </Wrapper>
);

export default Header;