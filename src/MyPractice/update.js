import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
// import { useHistory } from 'react';

export default function Update() {
    // let history = useHistory();

    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('name'));
        setPhone_number(localStorage.getItem('phone_number'));
        setEmail(localStorage.getItem('email'));
        setMessage(localStorage.getItem('message'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            id,
            name,
            phone_number,
            email,
            Message

        })
        // .then(() => {
        //     history.push('/Read')
        // })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>phone_number</label>
                    <input placeholder='phone_number' value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input placeholder='phone_number' value={email} onChange={(e) => setPhone_number(e.target.value)}/>
                </Form.Field>
                <label>message</label>
                    <input placeholder='message' value={Message} onChange={(e) => setMessage(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}