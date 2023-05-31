import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';
import { ContactList } from 'components/Contact-list/ContactList';

const Contacts = () => {
    return (
        <>
            <Section>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>Contacts</h1>
                    <ContactForm />
                </Container>
            </Section>
            <section>
                <Container>
                    <ContactList />{' '}
                </Container>
            </section>
        </>
    );
};

export default Contacts;
