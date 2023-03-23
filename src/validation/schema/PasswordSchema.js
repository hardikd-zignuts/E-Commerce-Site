import * as Yup from 'yup';
import { validationMessages } from '../../constant/messages';

/* This is a validation schema for the password field. */
export const passwordSchema = Yup.string()
    .min(8, validationMessages.passwordMinLength)
    .max(32, validationMessages.passwordMaxLength)
    .matches(/[A-Z]/,validationMessages.passwordUppercaseLetter)
    .matches(/[a-z]/, validationMessages.passwordLowercaseLatter)
    .matches(/[0-9]/, validationMessages.passwordNumChar)
    .matches(/[!@#$%^&*(),.?":{}|<>]/, validationMessages.passwordSpecialcaseLatter)
    .required(validationMessages.passwordRequired)
