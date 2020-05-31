import React from 'react';
import { Container, Loader } from 'semantic-ui-react';
import styled from 'styled-components';

export default ({ title, img, pub, link }) => {
    return (
        <FeedWrapper href={link} target='_blank'>
            <FeedImg src={img} alt={title} />
            <Title>{title}</Title>
            <Date>{pub}</Date>
        </FeedWrapper>
    );
};

const FeedWrapper = styled.a`
    display: block;
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid black;
    // -webkit-box-shadow: 0px 2px 3px lightgray;
    // box-shadow: 0px 2px 3px lightgray;
`;
const FeedImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;
const Title = styled.div`
    color: var(--clr-light);
    font-size: 1.2rem;
    font-family: var(--ff-third);
    padding: 0.5em 0;
`;
const Date = styled.div`
    color: var(--clr-accent);
    font-size: 0.8rem;
    font-family: var(--ff-forth);
    text-align: right;
    padding-bottom: 0.5em;
`;