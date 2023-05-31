import { Container } from 'components/App.styled';
import {
    Avatar,
    BtnLogOut,
    HeaderStyled,
    HomeLink,
    Nav,
    NavLinkStyled,
    ProfileDescription,
    ProfileMenu,
    UserMenu,
    Wrapper,
} from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { ToastContainer } from 'react-toastify';
import avatar from '../../img/avatar-default.png';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn, selectUserName } from 'store/selector';
import { hendleSignOut } from 'store/auth/authOperations';

export const Header = () => {
    const userMenu = useRef();
    const dispatch = useDispatch();

    const onToggle = () => {
        userMenu.current.classList.toggle('show');
    };

    const onLogOut = () => {
        dispatch(hendleSignOut());
    };

    const isSignedIn = useSelector(selectIsSignedIn);
    const signedInUser = useSelector(selectUserName);

    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Nav>
                        <HomeLink to={'/'}>
                            <Svg
                                w={40}
                                h={40}
                                use={`${sprite}#icon-address-book`}
                            />
                            Home
                        </HomeLink>
                    </Nav>
                    {isSignedIn ? (
                        <>
                            <Filter />
                            <NavLinkStyled to={'contacts'}>
                                Contacts
                            </NavLinkStyled>
                            <ProfileMenu onClick={onToggle}>
                                <Avatar src={avatar} alt="avatar" />
                                <UserMenu ref={userMenu}>
                                    <ProfileDescription>
                                        Signed in as
                                    </ProfileDescription>
                                    <ProfileDescription>
                                        {signedInUser}
                                    </ProfileDescription>
                                    <BtnLogOut onClick={onLogOut}>
                                        Logout
                                    </BtnLogOut>
                                </UserMenu>
                            </ProfileMenu>
                        </>
                    ) : (
                        <NavLinkStyled to={'auth'}>Login</NavLinkStyled>
                    )}
                </Wrapper>
            </Container>
            <ToastContainer />
        </HeaderStyled>
    );
};
