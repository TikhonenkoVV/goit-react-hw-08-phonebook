import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';
import { useDispatch } from 'react-redux';
import { hendleAddContact } from 'store/operations';

const New = () => {
    const dispatch = useDispatch();

    const hendleSetState = (_, values) => {
        dispatch(hendleAddContact(values));
    };

    const initialState = {
        name: '',
        surname: '',
        number: '',
        email: '',
        img: '',
    };

    return (
        <Section>
            <Container>
                <ContactForm
                    contact={initialState}
                    title="Add contact"
                    onSetState={hendleSetState}
                />
            </Container>
        </Section>
    );
};

export default New;
