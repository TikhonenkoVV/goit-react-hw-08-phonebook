import styled from '@emotion/styled';
import { LinkStyled } from 'components/App.styled';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    padding-bottom: 30px;
`;

export const BtnClose = styled(LinkStyled)`
    position: absolute;
    top: 0px;
    left: 0;
`;

export const PhotoLabel = styled.label`
    position: relative;
    display: block;
    width: 150px;
    margin: 0 auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #302b2b;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('${props => props.file}');
    cursor: pointer;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const IconEdit = styled.div`
    position: absolute;
    bottom: -3px;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.mainBackground};
    transition: color 250ms;
`;

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
    border-radius: 4px;
    font-size: 18px;
    background-color: ${props => props.theme.colors.btn};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;
