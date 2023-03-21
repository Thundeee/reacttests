import * as yup from 'yup';

const userSchema = yup
.object({
  fullName: yup
    .string()
    .min(3, 'Your name should be at least 3 characters.')
    .max(50, 'Your name cannot be longer than 50 characters.')
    .required('Please enter your full name'),
  email: yup
  .string()
    .email("Email needs to be valid")
    .required('Please enter your email address.'),
    subject: yup
    .string()
    .min(3, 'Your subject should be at least 3 characters.')
    .max(10, 'Your subject cannot be longer than 10 characters.')
    .required('Please enter your subject.'),
  body: yup
    .string()
    .min(3, 'Your text must be atleast 3 characters.')
    .max(1000, 'Your text cannot be longer than 1000 characters.')
    .required('Please enter your text.'),
})
.required();


const otherSchema = yup
.object({
  dwjndew: yup
    .string()
    .min(3, 'Your first name should be at least 3 characters.')
    .max(10, 'Your first name cannot be longer than 10 characters.')
    .required('Please enter your first name'),
  qwjenqw: yup
    .number()
    .min(18, 'Your age must be 18 or higher')
    .max(100, 'Your age must be 100 or lower')
    .typeError('Your age must be a number'),
})
.required();


export { userSchema, otherSchema }
