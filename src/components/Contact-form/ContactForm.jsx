import {
    FormikForm,
    SubmitButton,
    AddPhoto,
    PhotoLabel,
    BtnClose,
} from './ContactForm.styled';
import { Formik } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts, selectCurrentImg } from 'store/selector';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useRef, useState } from 'react';
import defaultPhoto from '../../img/avatar-default.png';
import { FormItem } from 'components/FormItem/FormItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { fbStorage } from '../../services/fireBase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { setCurrentImg } from 'store/contactsSlice';

export const ContactForm = ({ onSetState }) => {
    const contacts = useSelector(selectContacts);
    const currImg = useSelector(selectCurrentImg);
    const navigate = useNavigate();
    const currentImg = useDispatch();

    const [contactImg, setContactImg] = useState(defaultPhoto);
    const addImg = useRef();

    const hendleUploadImg = photo => {
        const imgRef = ref(fbStorage, `images/${photo.name}`);
        uploadBytes(imgRef, photo).then(res => {
            getDownloadURL(ref(fbStorage, res.metadata.fullPath)).then(url => {
                currentImg(setCurrentImg(url));
                console.log(url);
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
                name: '',
                surname: '',
                number: '',
                email: '',
                img: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val =>
                        val.name.toLowerCase() === values.name.toLowerCase() &&
                        val.surname.toLowerCase() ===
                            values.surname.toLowerCase()
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
                values.img = currImg;
                console.log(values);
                onSetState(values);
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
                            <PhotoLabel
                                htmlFor={'img'}
                                file={contactImg}
                            ></PhotoLabel>
                            <FormItem
                                type="text"
                                name="name"
                                onChange={handleChange}
                                use="contact"
                            />
                            <FormItem
                                type="text"
                                name="surname"
                                onChange={handleChange}
                                use="contact"
                            />
                            <FormItem
                                type="tel"
                                name="number"
                                onChange={handleChange}
                                use="phone"
                            />
                            <FormItem
                                type="email"
                                name="email"
                                onChange={handleChange}
                                use="email"
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
