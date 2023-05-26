import { Container } from 'components/App.styled';
import { AddLink, HeaderStyled, HomeLink, Nav, Wrapper } from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { ToastContainer } from 'react-toastify';

export const Header = () => {
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
                            Contacts
                        </HomeLink>
                    </Nav>
                    <Filter />
                    <AddLink to={'new'}>
                        <Svg w={20} h={20} use={`${sprite}#icon-add-contact`} />
                    </AddLink>
                </Wrapper>
            </Container>
            <ToastContainer />
        </HeaderStyled>
    );
};
