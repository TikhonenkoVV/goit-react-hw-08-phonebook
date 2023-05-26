import { Container, Section } from 'components/App.styled';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <Section>
            <Container>
                <ContactInfo />
            </Container>
        </Section>
    );
};

export default Contact;
