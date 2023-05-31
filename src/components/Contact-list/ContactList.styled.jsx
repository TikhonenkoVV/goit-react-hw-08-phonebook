import styled from '@emotion/styled';

export const ContactListHeader = styled.div`
    padding: 15px 50px 15px 10px;
    border-bottom: 1px solid grey;
`;

export const ContactListHeaderBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const FirstElement = styled.p`
    padding-left: 40px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    &:nth-of-type(2n) {
        background-image: linear-gradient(#00000022, #00000022);
    }
`;

export const ContactLink = styled.a`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: calc(100% - 30px);
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & img {
        width: 30px;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const BtnDel = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.btn};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;
