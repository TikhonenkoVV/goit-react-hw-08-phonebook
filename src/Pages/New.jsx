import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';

const New = () => {
    return (
        <Section>
            <Container>
                <ContactForm />
            </Container>
        </Section>
    );
};

export default New;
