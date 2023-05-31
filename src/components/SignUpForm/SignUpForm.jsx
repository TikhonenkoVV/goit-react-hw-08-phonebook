import { Svg } from 'components/icon/Icon';
import {
    FormikForm,
    Ico,
    Input,
    InputWrapper,
    Label,
    Message,
    SubmitButton,
} from './SignUpForm.styled';
import { ErrorMessage, Formik } from 'formik';
import { validationSchemaLogin } from 'services/validate-schema-login';
import sprite from '../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { hendleSignUp } from 'store/auth/authOperations';

export const SignUpForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            validationSchema={validationSchemaLogin}
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            onSubmit={(values, { resetForm }) => {
                dispatch(hendleSignUp(values));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <FormikForm onSubmit={handleSubmit}>
                        <Label>
                            Name
                            <InputWrapper>
                                <Ico>
                                    <Svg
                                        w={23}
                                        h={23}
                                        use={`${sprite}#icon-contact`}
                                    />
                                </Ico>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                />
                            </InputWrapper>
                            <ErrorMessage name="name">
                                {msg => <Message>{msg}</Message>}
                            </ErrorMessage>
                        </Label>
                        <Label>
                            E-mail
                            <InputWrapper>
                                <Ico>
                                    <Svg
                                        w={23}
                                        h={23}
                                        use={`${sprite}#icon-email`}
                                    />
                                </Ico>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter e-mail"
                                    onChange={handleChange}
                                />
                            </InputWrapper>
                            <ErrorMessage name="email">
                                {msg => <Message>{msg}</Message>}
                            </ErrorMessage>
                        </Label>
                        <Label>
                            Password
                            <InputWrapper>
                                <Ico>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-key`}
                                    />
                                </Ico>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                            </InputWrapper>
                            <ErrorMessage name="password">
                                {msg => <Message>{msg}</Message>}
                            </ErrorMessage>
                        </Label>
                        <SubmitButton type="submit">
                            <Svg
                                w={20}
                                h={20}
                                use={`${sprite}#icon-save-contact`}
                            />
                            Sign Up
                        </SubmitButton>
                    </FormikForm>
                );
            }}
        </Formik>
    );
};
