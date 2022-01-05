import React from 'react';
import { Link } from 'react-router-dom';
import {Wrapper, Content } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
            <span>|</span>
            <Link to='/'>
                <span>Add to Watchlist</span>
            </Link>

        </Content>
    </Wrapper>
);

export default BreadCrumb;