import PropTypes from 'prop-types';
import {
    BtnDel,
    ContactLink,
    ContactListHeader,
    ContactListHeaderBox,
    FirstElement,
    Item,
    List,
    NameWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selector';
import { Container } from 'components/App.styled';
import avatar from '../../img/avatar-default.png';
import { useLocation } from 'react-router-dom';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useEffect } from 'react';
import { hendleDeleteContact, hendleFetchContact } from 'store/operations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(hendleFetchContact());
    }, [dispatch]);

    const delContact = id => dispatch(hendleDeleteContact(id));

    const location = useLocation();
    return (
        <>
            <section>
                <Container>
                    <ContactListHeader>
                        <ContactListHeaderBox>
                            <FirstElement>Name</FirstElement>
                            <p>Phone mumber</p>
                            <p>E-mail</p>
                        </ContactListHeaderBox>
                    </ContactListHeader>
                    <List>
                        {list.map(
                            ({ id, name, surname, number, email, img }) => {
                                const fullName = name + ' ' + surname;
                                return (
                                    <Item key={id}>
                                        <ContactLink
                                            to={`contact/${id}`}
                                            state={{ from: location }}
                                        >
                                            <NameWrapper>
                                                <img
                                                    src={
                                                        img !== ''
                                                            ? img
                                                            : avatar
                                                    }
                                                    alt="avatar"
                                                    width={30}
                                                    height={30}
                                                />
                                                <p>{fullName.trim()}</p>
                                            </NameWrapper>
                                            <p>{number}</p>
                                            <p>{email}</p>
                                        </ContactLink>
                                        <BtnDel
                                            type="button"
                                            onClick={() => delContact(id)}
                                        >
                                            <Svg
                                                w={20}
                                                h={20}
                                                use={`${sprite}#icon-del-contact`}
                                            />
                                        </BtnDel>
                                    </Item>
                                );
                            }
                        )}
                    </List>
                </Container>
            </section>
        </>
    );
};

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};
