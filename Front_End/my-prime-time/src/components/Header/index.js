import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/My_Prime_Time.jpg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import IMDbLogo from '../../images/IMDb_Logo.png';



import { Wrapper, Content, LogoImg, TMDBLogoImg, IMDbLogoImg } from "./Header.styles";

const Header = (props) => {

    

    return (
        <Wrapper>
            <Content>
                <Link to='/movie'>
                    <LogoImg src={Logo} alt='mpt-logo' />
                </Link>
                <div>
                {
                    !props.isLoggedIn
                    ?
                
                <div>
                    <button className="btn" text='Login'><Link to='/'>Login</Link></button>
                </div>
                :
                <div>
                    <button className="btn" text='Logout' onClick={props.handleLogout}><Link to='/'>Logout</Link></button>
                </div>
                
                }</div>
                <button className="btn"><Link to='/watchlist'>Watchlist</Link></button>
               
                <IMDbLogoImg src={IMDbLogo} alt='IMDb-Logo' />
                <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />

            </Content>
        </Wrapper>
        );

};
export default Header;