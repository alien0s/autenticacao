import { Formik, Form, ErrorMessage, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import Api from '../api'
import * as yup from 'yup'
import React from 'react'
import LoginImg from '../img/welcomeback-img.png'
export default function Login(){

    const navigate = useNavigate()

    const handleSubmit = values => {
        Api.post("login",values).then(resp => {
        const token = resp.data.token
        console.log(token)
        if(token.length === 17){
            sessionStorage.setItem('token',token)
            navigate('/dashboard')
        }}
        )
    }
    const validations = yup.object().shape({
        email: yup.string(),
        password: yup.string()
    })
    return (
    <div id="login_page">
        <img alt="welcome back" src={LoginImg} />
        <div id="login_container">
            <div id="box_login">
                <h1>Login<a target="_blank" href="https://reqres.in" rel="noreferrer" id="api_link">(reqres.in/api)</a></h1>
                <Formik
                    initialValues={{email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validations}>
                    <Form>
                        <div className="input_group">
                            <Field name="email" className="field" placeholder="Type your email"/>
                            <ErrorMessage component="span" name="email"></ErrorMessage>
                            <Field type="password" name="password" className="field" placeholder="Type your password"/>
                            <ErrorMessage component="span" name="password"></ErrorMessage>
                        </div>
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
    )
}

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"