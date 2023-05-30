import defaultPhoto from '../../img/avatar-default.png';
import {
    BtnEdit,
    BtnGoBack,
    ContactCard,
    ContactTitle,
    Details,
    DetailsItem,
    DetailsTitle,
    DetailsWrapper,
    Photo,
    PhotoWrapper,
} from './ContactInfo.styled';
import { useLocation, useParams } from 'react-router-dom';
import { Svg } from 'components/icon/Icon';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { hendleFetchContactById } from 'store/contacts/contactsOperations';
import { selectContact } from 'store/selector';

export const ContactInfo = () => {
    const dispatch = useDispatch();
    const { contactId } = useParams();
    const { name, surname, number, email, img } = useSelector(selectContact);
    const fullName = `${name} ${surname}`.trim();
    const location = useLocation();

    useEffect(() => {
        dispatch(hendleFetchContactById(contactId));
    }, [dispatch, contactId]);

    return (
        <ContactCard>
            <PhotoWrapper>
                <BtnGoBack to={'/'}>
                    <Svg w={20} h={20} use={`${sprite}#icon-arrow-left`} />
                </BtnGoBack>
                <BtnEdit to={'edit'} state={{ from: location }}>
                    <Svg w={20} h={20} use={`${sprite}#icon-pencil`} />
                </BtnEdit>
                <Photo src={img !== '' ? img : defaultPhoto} alt="" />
            </PhotoWrapper>
            <ContactTitle>{fullName}</ContactTitle>
            <DetailsWrapper>
                <DetailsTitle>Contact info</DetailsTitle>
                <Details>
                    <DetailsItem>
                        <p>Phone:</p>
                        <a href="tel:+1234567890">{number}</a>
                    </DetailsItem>
                    <DetailsItem>
                        <p>E-mail:</p>
                        <a href="mailto:ford@gmail.com">{email}</a>
                    </DetailsItem>
                </Details>
            </DetailsWrapper>
        </ContactCard>
    );
};
