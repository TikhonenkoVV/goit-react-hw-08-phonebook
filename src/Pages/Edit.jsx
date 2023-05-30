import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { hendleEditContact } from 'store/contacts/contactsOperations';
import { selectContact } from 'store/selector';

const Edit = () => {
    const dispatch = useDispatch();

    const hendleSetState = (contactId, values) => {
        dispatch(hendleEditContact({ contactId, values }));
    };

    const contact = useSelector(selectContact);

    return (
        <Section>
            <Container>
                <ContactForm
                    contact={contact}
                    title="Save change"
                    onSetState={hendleSetState}
                />
            </Container>
        </Section>
    );
};

export default Edit;
