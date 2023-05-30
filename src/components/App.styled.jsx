import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    padding: 100px 0;
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

export const AuthWrapper = styled.div`
    margin: 0 auto;
    max-width: 400px;
    padding: 20px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.mainBackground};
    overflow: hidden;
`;

export const FormWrapper = styled.div`
    display: flex;
    gap: 40px;
    width: calc(200% + 40px);
    height: auto;
    transition: transform 250ms;
    &.toright {
        transform: translateX(calc(-50% - 20px));
    }
`;

export const FormBox = styled.div`
    flex-basis: calc((100% - 40px) / 2);
    transform: translateX(0);
    transition: transform 250ms;
`;

export const FormNav = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: ${props => props.theme.colors.light};
    background-color: #5c5555;
    border-radius: 4px;
    transition: color 250ms, background-color 250ms;
    &.active {
        color: ${props => props.theme.colors.hover};
        background-color: ${props => props.theme.colors.btn};
    }
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;
