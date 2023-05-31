import defaultPhoto from '../../img/avatar-default.png';
import {
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
import { useParams } from 'react-router-dom';
import { Svg } from 'components/icon/Icon';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { hendleFetchContactById } from 'store/contacts/contactsOperations';
import { selectContact } from 'store/selector';

export const ContactInfo = () => {
    const dispatch = useDispatch();
    const { contactId } = useParams();
    const { name, number } = useSelector(selectContact);

    useEffect(() => {
        dispatch(hendleFetchContactById(contactId));
    }, [dispatch, contactId]);

    const tel = `tel:${number}`;

    return (
        <ContactCard>
            <PhotoWrapper>
                <BtnGoBack to={'/'}>
                    <Svg w={20} h={20} use={`${sprite}#icon-arrow-left`} />
                </BtnGoBack>
                <Photo src={defaultPhoto} alt="" />
            </PhotoWrapper>
            <ContactTitle>{name}</ContactTitle>
            <DetailsWrapper>
                <DetailsTitle>Contact info</DetailsTitle>
                <Details>
                    <DetailsItem>
                        <p>Phone:</p>
                        <a href={tel}>{number}</a>
                    </DetailsItem>
                </Details>
            </DetailsWrapper>
        </ContactCard>
    );
};
