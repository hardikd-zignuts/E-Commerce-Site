import * as Yup from 'yup';
import { validationMessages } from '../constant/messages';
import { mobileSchema } from './schema/MobileSchema';
import { passwordSchema } from './schema/PasswordSchema';

/* Creating a schema for the signup form. */

export const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required(validationMessages.nameRequired),
    email: Yup.string()
        .email(validationMessages.emailInvalid)
        .required(validationMessages.emailRequired),
    mobile: mobileSchema,
    password: passwordSchema,
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], validationMessages.passwordMatch)
        .required(validationMessages.requiredPasswordConfirm),
});
/* Creating a schema for the login form. */

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email(validationMessages.emailInvalid)
        .required(validationMessages.emailRequired),
    password: Yup.string()
        .required(validationMessages.passwordRequired)
});
/* A validation schema for the change password form. */

export const changePassword = Yup.object().shape({
    passwordCurrent: passwordSchema,
    passwordNew: passwordSchema,
    passwordNewConfirm: Yup.string()
        .oneOf([Yup.ref('passwordNew'), null], validationMessages.passwordMatch)
        .required(validationMessages.requiredPasswordConfirm)
});

