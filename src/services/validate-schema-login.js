import * as yup from 'yup';

export const SchemaLogin = yup.object().shape({
    email: yup
        .string()
        .matches(/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message: 'Invalid email address',
            test: value => {
                return /^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    value
                );
            },
        })
        .required('Invalid email address'),
    password: yup
        .string()
        .matches(/^[A-Z0-9!@#$%^&*]{8,16}$/i, {
            message:
                'The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16',
            test: value => {
                return /^[A-Z0-9!@#$%^&*]{8,16}$/i.test(value);
            },
        })
        .required(
            'The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16'
        ),
});

export const validationSchemaLogin = yup.object().shape({
    name: yup
        .string()
        .matches(
            /^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$/,
            {
                message:
                    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
                test: value => {
                    return /^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$/.test(
                        value
                    );
                },
            }
        )
        .nullable(true)
        .transform((value, startValue) =>
            startValue.trim() === '' ? null : value
        )
        .required(
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ),
    email: yup
        .string()
        .matches(/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message: 'Invalid email address',
            test: value => {
                return /^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    value
                );
            },
        })
        .required('Invalid email address'),
    password: yup
        .string()
        .matches(/^[A-Z0-9!@#$%^&*]{8,16}$/i, {
            message:
                'The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16',
            test: value => {
                return /^[A-Z0-9!@#$%^&*]{8,16}$/i.test(value);
            },
        })
        .required(
            'The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16'
        ),
});
