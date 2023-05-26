import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';
import { useDispatch } from 'react-redux';
import { hendleAddContact } from 'store/operations';

const New = () => {
    const dispatch = useDispatch();

    const hendleSetState = values => {
        dispatch(hendleAddContact(values));
    };

    return (
        <Section>
            <Container>
                <ContactForm onSetState={hendleSetState} />
            </Container>
        </Section>
    );
};

export default New;
