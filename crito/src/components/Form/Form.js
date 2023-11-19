import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [msg, setMsg] = useState('')
    const [msgError, setMsgError] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handlechange = (e) => {

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value))
                break;
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value))
                break;
            case 'msg':
                setMsg(e.target.value)
                setMsgError(validateLength(e.target.value))
                break; 
        }
    }

    const validateLength = (value) => {
        if (value.length < 1) return true
        else  return false 
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        for(let element of e.target) {
            switch (element.name) {
                case 'name':
                    setName(element.value)
                    setNameError(validateLength(element.value))
                    break;
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateLength(element.value))
                    break;
                case 'msg': 
                    setMsg(element.value)
                    setMsgError(validateLength(element.value))
                    break; 

            }
        }

        if (!nameError && !emailError && !msgError) {
            const result = await fetch('', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, msg
                })

            })
        }

    }


  return (
    <div className='formWrapper'>
        <form onSubmit={handleSubmit} noValidate>
            
            <h2>Leave us a message for any information.</h2>
            <input type="text" name="name" value={name} onChange={(e) => handlechange(e)} className={`${nameError ? 'formName error': 'formName'}`} placeholder={`${nameError ? 'You need to enter your name': 'Name*'}`}/>
            <input type="text" name="email" value={email} onChange={(e) => handlechange(e)} className={`${emailError ? 'formEmail error': 'formEmail'}`} placeholder={`${emailError ? 'You need to enter your email': 'Email*'}`}/>
            <input type="text" name="msg" value={msg} onChange={(e) => handlechange(e)} className={`${msgError ? 'formMsg error': 'formMsg'}`} placeholder={`${msgError ? 'You need to write a message': 'Write your message here*'}`}/>
            <button type="submit" className="button yellow">Send message <i className="fa-regular fa-arrow-up-right"></i></button>
            <p className="errorMessage">{errorMessage}</p>


        </form>
    </div>

  )
}

export default Form