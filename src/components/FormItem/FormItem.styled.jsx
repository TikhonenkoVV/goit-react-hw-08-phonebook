import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: ${props => props.theme.fontSizes.medium};
    transition: color 250ms;
    & svg {
        transition: fill 250ms;
    }
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.hover};
    }
    &:hover svg,
    &:focus svg {
        fill: ${props => props.theme.colors.hover};
    }

    &:nth-of-type(5) {
        margin-bottom: 20px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
`;

export const Ico = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    color: #404040;
    width: 33px;
    height: 33px;
    padding: 5px;
`;

export const Input = styled(Field)`
    flex-grow: 1;
    display: block;
    margin: 0;
    padding: 5px 33px 5px;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 18px;
`;

export const Message = styled.span`
    font-size: ${props => props.theme.fontSizes.small};
`;
