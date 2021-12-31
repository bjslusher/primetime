import React from "react";
import Logo from '../../images/My_Prime_Time.jpg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt='mpt-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />
        </Content>
    </Wrapper>
);

export default Header;