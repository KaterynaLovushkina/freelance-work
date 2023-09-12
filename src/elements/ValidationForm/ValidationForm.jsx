import React from 'react';
import { Formik, Form, Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './styles.scss'
import LearnMore from '../LearnMore/LearnMore';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  email: Yup.string().email().required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .min(9, "Too Short!")
    .max(12, "Too Long!")
});



export default function ValidationForm() {
  
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:3334/api/user', values);
      toast.success('Data submitted successfully', {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } catch (error) {
      toast.error('Error submitting data');
    }
  };

  return (
    <div className='form-validation'>
    <h1>Запрос пропозиций</h1>
    <Formik
        initialValues={{
          firstName: '',
          email: '',
          phone: ''
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm })=> {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form className='d-flex flex-column align-items-center'>
          <Field name="firstName"
                 placeholder="Имя"
                 className="form-control mb-4 mx-auto" />
          <div className="text-danger text-center">
            <ErrorMessage name="firstName" component="p" />
          </div>

          <Field
            name="email" 
            type="email"
            placeholder="Почта"
            className="form-control mb-4"
          />
          <div className="text-danger text-center">
            <ErrorMessage name="email" component="p" />
          </div>

          <Field
            name="phone"
            placeholder="Телефон"
            type="number"
            className="form-control mb-4"
          />
         <div className="text-danger text-center">
          <ErrorMessage name="phone" component="p" />
        </div>
          <LearnMore text='Заказать звонок' />
          <ToastContainer/>
        </Form>
      </Formik>
      {/* <ToastContainer  className="toast"/> */}
  </div>
  )
}
