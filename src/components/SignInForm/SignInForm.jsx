import { Svg } from 'components/icon/Icon';
import {
    FormikForm,
    Ico,
    Input,
    InputWrapper,
    Label,
    Message,
    SubmitButton,
} from './SignInForm.styled';
import { ErrorMessage, Formik } from 'formik';
import { SchemaLogin } from 'services/validate-schema-login';
import sprite from '../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { hendleSignIn } from 'store/auth/authOperations';

export const SignInForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            validationSchema={SchemaLogin}
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values, { resetForm }) => {
                dispatch(hendleSignIn(values));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <>
                        <FormikForm onSubmit={handleSubmit}>
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
                                Sign In
                            </SubmitButton>
                        </FormikForm>
                    </>
                );
            }}
        </Formik>
    );
};
