import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";
import './SignUpPage.css'

const SignUpPage = () => {

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [profession, setProfession] = useState('')
    const [reasonForJoining, setReasonForJoining] = useState('')



    const [professionDetailsDisabled, setProfessionDetailsDisabled] = useState(true)
    const [professionDetailsText, setProfessionDetailsText] = useState('')
    const [professionDetails, setProfessionDetails] = useState('')

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'sign_up'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

    const handleFirstNameInput = evt => {
        setFirstName(evt.target.value)
    }

    const handleSecondNameInput = evt => {
        setSecondName(evt.target.value)
    }

    const handleEmailInput = evt => {
        setEmail(evt.target.value)
    }

    const handleProfessionSelectInput = evt => {
        const selected = evt.target.value
        if (selected === 'Other'){
            setProfessionDetailsDisabled(false)
            setProfessionDetailsText('Please Specify')
        } else {
            setProfession(selected)
            setProfessionDetailsDisabled(true)
            setProfessionDetailsText('')
            setProfessionDetails('')
        }
    }

    const handleProfessionTextInput = evt => {
        setProfessionDetails(evt.target.value)
    }

    const handleReasonForJoiningInput = evt => {
        setReasonForJoining(evt.target.value)
    }

    const handleSubmit = evt => {
        const url = 'http://localhost:3001/sign-up'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                second_name: secondName,
                email: email,
                profession: professionDetails === '' ? profession : professionDetails,
                reason_for_joining: reasonForJoining
            })
        }
        console.log(requestOptions.body)
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }

    return (
        <section className="d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark" id="signUp">
            <Form className="col-12 col-lg-8">
                <h3 className="card-title text-light text-muted text-center mb-3">Sign up for more information</h3>
                <div className="d-flex flex-row flex-nowrap mb-2">
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="firstName" value={firstName} onChange={handleFirstNameInput} max={30}/>
                        <label htmlFor="firstName">First name</label>
                    </FormGroup>
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="lastName" value={secondName} onChange={handleSecondNameInput} max={30}/>
                        <label htmlFor="lastName">Last name</label>
                    </FormGroup>
                </div>
                <FormGroup className="form-floating mx-1 mb-2">
                    <input className="form-control" type="email" id="email" value={email} onChange={handleEmailInput} max={120}/>
                    <label htmlFor="email">Email address</label>
                </FormGroup>
                <div className="d-flex flex-row flex-nowrap mb-2">
                    <FormGroup className="form-floating flex-grow-1 mx-1" value={profession} onChange={handleProfessionSelectInput}>
                        <select className="form-control" id="profession">
                            <option key={0} value={0}> </option>
                            <option key={1}>Scientist</option>
                            <option key={2}>Engineer</option>
                            <option key={3}>Politician</option>
                            <option key={4}>Influencer</option>
                            <option key={5}>Other</option>
                        </select>
                        <label htmlFor="profession">Profession</label>
                    </FormGroup>
                    <FormGroup className="form-floating flex-grow-1 mx-1">
                        <input className="form-control" type="text" id="professionDetails" disabled={professionDetailsDisabled}
                            value={professionDetails} onChange={handleProfessionTextInput} max={120}/>
                        <label htmlFor="professionDetails">{professionDetailsText}</label>
                    </FormGroup>
                </div>
                <FormGroup className="form-floating mx-1 mb-2" >
                    <textarea className="form-control h-auto"  rows={5} id="comment" value={reasonForJoining}
                              onChange={handleReasonForJoiningInput} maxLength={500}/>
                    <label htmlFor="comment">Please tell us a little about your reason for joining</label>
                </FormGroup>
            </Form>
            <button className="btn btn-secondary mx-auto" onClick={handleSubmit}>Sign Up</button>
        </section>
    )
}

export default SignUpPage