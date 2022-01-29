import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
export default function Login() {
    return (
        <div className='col-sm-5'>
            <h2>LogIn</h2>
            <Formik initialValues={{
                email:'',
                password:''

            }}
            validationSchema={
                Yup.object({
                    email:Yup.string().required('Please Enter Email').email('Please Enter Correct Email'),
                    password:Yup.string().required('Please Enter Password')
                })
            }
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
            <Form>
            
            <div className='mb-3'>
                <label>Email</label>
                <Field name="email" type="text" className="form-control"></Field>
                <ErrorMessage component="label" name="email" className='text-danger'></ErrorMessage>
            </div>
            <div className='mb-3'>
                <label>Passowrd</label>
                <Field name="password" type="password" className="form-control"></Field>
                <ErrorMessage component="label" name="password" className='text-danger'></ErrorMessage>
            </div>
            <div className='mb-3'>
                <input type="submit" value="Login" className='btn btn-primary'></input>
            </div>
            </Form>
            </Formik>
        </div>
    )
}
