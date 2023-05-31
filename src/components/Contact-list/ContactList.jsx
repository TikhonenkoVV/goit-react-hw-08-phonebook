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
import avatar from '../../img/avatar-default.png';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useEffect } from 'react';
import {
    hendleDeleteContact,
    hendleFetchContact,
} from 'store/contacts/contactsOperations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(hendleFetchContact());
    }, [dispatch]);

    const delContact = id => dispatch(hendleDeleteContact(id));

    return (
        <>
            <ContactListHeader>
                <ContactListHeaderBox>
                    <FirstElement>Name</FirstElement>
                    <p>Phone number</p>
                </ContactListHeaderBox>
            </ContactListHeader>
            <List>
                {list.map(({ id, name, number }) => {
                    const telLink = `tel:${number}`;
                    return (
                        <Item key={id}>
                            <ContactLink href={telLink}>
                                <NameWrapper>
                                    <img
                                        src={avatar}
                                        alt="avatar"
                                        width={30}
                                        height={30}
                                    />
                                    <p>{name}</p>
                                </NameWrapper>
                                <p>{number}</p>
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
                })}
            </List>
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
