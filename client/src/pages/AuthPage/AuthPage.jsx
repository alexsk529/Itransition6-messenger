import React from 'react';
import {Box, TextField, Button} from "@mui/material";
import axios from '../../axios.js'
import {AuthContext} from '../../context/AuthContext.js'

import './AuthPage.css'

const AuthPage = function () {
    const [name, setName] = React.useState({name: ''});
    const [isPending, setIsPending] = React.useState(false)
    const {enter} = React.useContext(AuthContext)

    const handlerEnter = async () => {
        try {
            setIsPending(true)
            await axios
                .post('/api/auth', name, {
                header: {
                    'Content-Type':'application/json',
                }
            })
                .then(res => {
                    console.log(res)
                    enter(res.data.token, res.data.userId, res.data.name);
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
            sx={{
                mt: 7,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
            }}>
            <TextField
                id="standard-basic"
                label="Your name"
                name="name"
                variant="standard"
                onChange={(e) => setName({name: e.target.value})}
            >
            </TextField>
            <Button
                variant="contained"
                onClick={handlerEnter}
            >{isPending ? 'Loading...' : 'Enter the Messenger'}</Button>
        </Box>
    )
}

export default AuthPage