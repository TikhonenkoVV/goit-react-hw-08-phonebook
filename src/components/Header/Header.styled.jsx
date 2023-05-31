import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
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

export const NavLinkStyled = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.btn};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const ProfileMenu = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: auto;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

export const UserMenu = styled.div`
    position: absolute;
    top: calc(100% + 22px);
    right: -9px;
    display: none;
    width: 150px;
    padding: 10px;
    border: 2px solid gray;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.accent};
    &::before {
        content: '';
        position: absolute;
        top: -14px;
        right: 14px;
        width: 25px;
        height: 25px;
        border: 2px solid gray;
        border-right: none;
        border-bottom: none;
        transform: rotate(45deg);
        background-color: ${props => props.theme.colors.accent};
    }
    &.show {
        display: block;
    }
`;

export const ProfileDescription = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    margin-bottom: 10px;
`;

export const BtnLogOut = styled.button`
    width: 100%;
    padding: 5px 0;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.btn};
    font-size: ${props => props.theme.fontSizes.small};
    transition: color 250ms;
    &:hover {
        color: ${props => props.theme.colors.hover};
    }
`;
