import * as Yup from 'yup';
import { validationMessages } from '../constant/messages';
import { mobileSchema } from './schema/MobileSchema';


/* A validation schema for the Update profile page. */
export const updateProfile = Yup.object().shape({
    firstName: Yup.string()
        .required(validationMessages.nameRequired),
    email: Yup.string()
        .email(validationMessages.emailInvalid)
        .required(validationMessages.emailRequired),
    mobile: mobileSchema,
});

/* A validation schema for the change password page. */
export const changePassword = Yup.object().shape({
    email: Yup.string().email(validationMessages.emailRequired).required(validationMessages.emailRequired),
    password: Yup.string().required(validationMessages.passwordRequired)
});

