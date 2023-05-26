import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    background-color: ${props => props.theme.colors.accent};
    padding: 20px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const HomeLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 700;
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const AddLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.btn};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;
