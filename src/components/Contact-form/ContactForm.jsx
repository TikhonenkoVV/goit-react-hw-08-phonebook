import { FormikForm, SubmitButton } from './ContactForm.styled';
import { Formik } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'store/selector';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { FormItem } from 'components/FormItem/FormItem';
import { hendleAddContact } from 'store/contacts/contactsOperations';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);

    const dispatch = useDispatch();

    const hendleSetState = values => {
        dispatch(hendleAddContact(values));
    };

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                number: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val => val.name.toLowerCase() === values.name.toLowerCase()
                );
                const isNumberExist = contacts.find(
                    val => val.number === values.number
                );
                if (isNameExist) {
                    toast(`${values.name} is already in contacts.`);
                    return;
                }
                if (isNumberExist) {
                    toast(
                        `${values.number} is already in contacts as ${isNumberExist.name}.`
                    );
                    return;
                }
                hendleSetState(values);
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <>
                        <FormikForm onSubmit={handleSubmit}>
                            <FormItem
                                type="text"
                                name="name"
                                use="contact"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="tel"
                                name="number"
                                use="phone"
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-save-contact`}
                                />
                                Add contact
                            </SubmitButton>
                        </FormikForm>
                    </>
                );
            }}
        </Formik>
    );
};
