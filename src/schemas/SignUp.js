import * as yup from "yup"

export const SignUpSchema=yup.object({
    Username:yup.string().min(2).required("Please enter your username"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(6).required("Please enter your password"),
    ConfirmPassword:yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required()
})
