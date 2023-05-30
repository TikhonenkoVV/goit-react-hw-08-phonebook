import {
    AuthWrapper,
    Button,
    Container,
    FormBox,
    FormNav,
    FormWrapper,
    Section,
} from 'components/App.styled';
import { SignInForm } from 'components/SignInForm/SignInForm';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { useRef } from 'react';

const SignUp = () => {
    const BtnSignIn = useRef();
    const BtnSignUp = useRef();
    const FormWrapperRef = useRef();

    const hendleClick = e => {
        if (e.target.classList.contains('active')) return;
        BtnSignIn.current.classList.toggle('active');
        BtnSignUp.current.classList.toggle('active');
        FormWrapperRef.current.classList.toggle('toright');
    };

    return (
        <Section>
            <Container>
                <AuthWrapper>
                    <FormNav>
                        <Button
                            ref={BtnSignIn}
                            onClick={hendleClick}
                            className="active"
                        >
                            Sign in
                        </Button>
                        <Button ref={BtnSignUp} onClick={hendleClick}>
                            Sign up
                        </Button>
                    </FormNav>
                    <FormWrapper ref={FormWrapperRef}>
                        <FormBox>
                            <SignInForm />
                        </FormBox>
                        <FormBox>
                            <SignUpForm />
                        </FormBox>
                    </FormWrapper>
                </AuthWrapper>
            </Container>
        </Section>
    );
};

export default SignUp;
