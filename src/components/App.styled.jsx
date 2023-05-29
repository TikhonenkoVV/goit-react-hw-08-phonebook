import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    padding: 20px 0;
`;

export const Container = styled.div`
    width: 100%;

    padding-left: ${props => props.theme.spacing.step * 5}px;
    padding-right: ${props => props.theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
        width: ${props => props.theme.breakpoints.s};
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: ${props => props.theme.breakpoints.m};
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: ${props => props.theme.breakpoints.l};
    }
`;

export const LinkStyled = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.btn};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const MainStyled = styled.main``;
