import {
    FormikForm,
    SubmitButton,
    AddPhoto,
    PhotoLabel,
    BtnClose,
    IconEdit,
} from './ContactForm.styled';
import { Formik } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'store/selector';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useRef, useState } from 'react';
import defaultPhoto from '../../img/avatar-default.png';
import { FormItem } from 'components/FormItem/FormItem';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fbStorage } from '../../services/fireBase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const ContactForm = ({ contact, title, onSetState }) => {
    const contacts = useSelector(selectContacts);
    const navigate = useNavigate();
    const contactId = useParams().contactId ?? '';
    const [uploadImg, setUploadImg] = useState('');

    const [contactImg, setContactImg] = useState(
        contact.img !== '' ? contact.img : defaultPhoto
    );

    const addImg = useRef();

    const hendleUploadImg = photo => {
        const imgRef = ref(fbStorage, `images/${photo.name}`);
        uploadBytes(imgRef, photo).then(res => {
            getDownloadURL(ref(fbStorage, res.metadata.fullPath)).then(url => {
                setUploadImg(url);
            });
        });
    };

    const hendleFileChange = e => {
        const photo = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => setContactImg(reader.result);
        hendleUploadImg(photo);
    };

    const location = useLocation();
    const goBackLink = location?.state?.from || '/';

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: `${contact.name ?? ''}`,
                surname: `${contact.surname ?? ''}`,
                number: `${contact.number ?? ''}`,
                email: `${contact.email ?? ''}`,
                img: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val =>
                        val.name.toLowerCase() === values.name.toLowerCase() &&
                        val.surname.toLowerCase() ===
                            values.surname.toLowerCase() &&
                        val.id !== contactId
                );
                const isNumberExist = contacts.find(
                    val => val.number === values.number && val.id !== contactId
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
                values.img = uploadImg;
                onSetState(contactId, values);
                resetForm();
                navigate('/');
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <>
                        <FormikForm onSubmit={handleSubmit}>
                            <BtnClose to={goBackLink}>
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-close`}
                                />
                            </BtnClose>
                            <AddPhoto
                                ref={addImg}
                                id="img"
                                name="img"
                                type="file"
                                accept="image/jpeg"
                                onChange={hendleFileChange}
                            />
                            <PhotoLabel htmlFor={'img'} file={contactImg}>
                                <IconEdit>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-pencil`}
                                    />
                                </IconEdit>
                            </PhotoLabel>
                            <FormItem
                                type="text"
                                name="name"
                                use="contact"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="text"
                                name="surname"
                                use="contact"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="tel"
                                name="number"
                                use="phone"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="email"
                                name="email"
                                use="email"
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-save-contact`}
                                />
                                {title}
                            </SubmitButton>
                        </FormikForm>
                    </>
                );
            }}
        </Formik>
    );
};
