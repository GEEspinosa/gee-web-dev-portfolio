import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name too short")
    .max(50, "Name too long")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .trim(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .trim(),
  subject: yup
    .string()
    .max(100, "Subject too long")
    .trim()
    .notRequired(),
  text: yup
    .string()
    .required("Message is required")
    .min(10, "Message too short, please elaborate")
    .max(1000, "Message too long")
    .trim(),
});