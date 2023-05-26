import styled from '@emotion/styled';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

export const FormikForm = styled(Form)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    padding-bottom: 30px;
`;

export const BtnClose = styled(Link)`
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
`;

export const AddPhoto = styled.input`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;

export const PhotoLabel = styled.label`
    display: block;
    width: 150px;
    margin: 0 auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #302b2b;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.file});
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
