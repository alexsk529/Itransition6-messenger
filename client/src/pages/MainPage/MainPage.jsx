import React, {useCallback, useEffect} from 'react';
import {Container} from "@mui/material";
import axios from '../../axios.js';
import {Sender} from '../../components/Sender.jsx';
import {Reciever} from '../../components/Reciever.jsx';

import './MainPage.css'

const MainPage = () => {
    const [name, setName] = React.useState('');
    const [form, setForm] = React.useState({});
    const [msgs, setMsgs] = React.useState({})

    const getData = useCallback(async () => {
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            await axios
                .get(`/api/main/refresh/:${data.name}`)
                .then(res => setMsgs(res))
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        setName(data.name);
    }, [])

    useEffect(() => {
        const interval = setInterval(getData, 3000)

        return (() => clearInterval(interval))
    }, [getData])

    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{
                display: 'flex',
                mt: 4
            }}
        >
            <Sender form={form} setForm={setForm} name={name}/>
            <Reciever name={name} msgs={msgs}/>
        </Container>
    )
}
export default MainPage