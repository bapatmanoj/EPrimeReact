import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
export default function SignUp() {
    return (
        <div className="col-sm-4">
            <h2>User Sign In</h2>
            <Formik initialValues={{
                name:'',
                email:'',
                password:'',
                confirmpassword:'',
                phonenumber:''


            }}
            validationSchema={
                Yup.object({
                    name:Yup.string().required('Please Enter Name'),
                    email:Yup.string().required('Please Enter Email').email('Please Enter Correct Email'),
                    password:Yup.string().required('Please Enter Password'),
                    confirmpassword:Yup.string().required('').oneOf([
                        Yup.ref('password'),null],"Confirm Password Doesn't match"
                    ),
                    phonenumber:Yup.string().required('Please Enter Phone Number'),

                })
            }
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
            <Form>
            <div className='mb-3'>
                <label>Name</label>
                <Field name="name" type="text" className="form-control"></Field>
                <ErrorMessage component="label" name="name" className='text-danger'></ErrorMessage>
            </div>
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
                <label>Confirm Password</label>
                <Field name="confirmpassword" type="password" className="form-control"></Field>
                <ErrorMessage component="label" name="confirmpassword" className='text-danger'></ErrorMessage>
            </div>
            <div className='mb-3'>
                <label>Phone Number</label>
                <Field name="phonenumber" type="text" className="form-control"></Field>
                <ErrorMessage component="label" name="phonenumber" className='text-danger'></ErrorMessage>
            </div>
            <div className='mb-3'>
                <input type="submit" value="Sign Up" className='btn btn-primary'></input>
            </div>
            </Form>
            </Formik>
        </div>
    )
}
