/* A validation schema for mobile number. */
import * as Yup from 'yup';
import { validationMessages } from '../../constant/messages';

export const mobileSchema = Yup.string()
    .matches(/^[0-9]+$/, validationMessages.mobileNumChar)
    .min(10, validationMessages.mobileMinLength)
    .max(12, validationMessages.mobileMaxLength)
    .required(validationMessages.mobileRequired)
