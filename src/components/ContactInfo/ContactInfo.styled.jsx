import styled from '@emotion/styled';
import { LinkStyled } from 'components/App.styled';

export const ContactCard = styled.div`
    position: relative;
    max-width: 400px;
`;

export const PhotoWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

export const BtnGoBack = styled(LinkStyled)`
    position: absolute;
    top: 0;
    left: 0;
`;

export const Photo = styled.img`
    display: block;
    width: 150px;
    aspect-ratio: 1;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #302b2b;
`;

export const ContactTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;

export const DetailsWrapper = styled.div`
    padding: 10px;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Details = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DetailsItem = styled.li`
    display: flex;
    gap: 10px;
    & a {
        transition: color 250ms;
        &:hover,
        &:focus {
            color: ${props => props.theme.colors.hover};
        }
    }
`;

export const DetailsTitle = styled.h3`
    margin-bottom: 20px;
`;
