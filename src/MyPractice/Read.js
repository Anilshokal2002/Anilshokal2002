import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button,  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Update from './update';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, name, phone_number,email,Message} = data;
        localStorage.setItem('ID',id)
        localStorage.setItem('name', name);
        localStorage.setItem('phone_number', phone_number);
        localStorage.setItem('email', email)
        localStorage.setItem('message', Message)
    }

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Name</Table.HeaderCell>
                        <Table.HeaderCell>phone_number</Table.HeaderCell>
                        <Table.HeaderCell>email</Table.HeaderCell>
                        <Table.HeaderCell>Message</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.phone_number}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.message}</Table.Cell>
                                {/* <Link to='/update'> */}
                                <Update>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                    </Update>
                                {/* </Link> */}
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}