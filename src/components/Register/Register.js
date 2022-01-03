import { Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { useFirebase } from '../../Hooks/useFirebase';

const Register = () => {
    const { userRegister } = useFirebase();
    const [userInput, setUserInput] = useState({});
    const user = useSelector(selectUser);
    const handleUserInput = (e) => {
        const tmpData = { ...userInput };
        tmpData[e.target.name] = e.target.value;
        setUserInput(tmpData);
        // console.log(userInput);
    }
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (userInput.password !== userInput.confirmPassword) {
            alert("Password doesn't match");
            return;
        }
        userRegister(userInput.name, userInput.photoURL, userInput.email, userInput.password);
    }
    // console.log(user);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ p: 8, width: "500px" }}>
                <form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <FormControl variant="standard">
                            <InputLabel>Full Name</InputLabel>
                            <Input onBlur={handleUserInput} name="name" type="text" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 2 }}>
                            <InputLabel>Email</InputLabel>
                            <Input onBlur={handleUserInput} name="email" type="email" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 2 }}>
                            <InputLabel>Password</InputLabel>
                            <Input onBlur={handleUserInput} name="password" type="password" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 2 }}>
                            <InputLabel>Confirm Password</InputLabel>
                            <Input onBlur={handleUserInput} name="confirmPassword" type="password" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 2 }}>
                            <InputLabel>Profile Photo URL (optional)</InputLabel>
                            <Input onBlur={handleUserInput} name="photoURL" type="text" />
                        </FormControl>
                        <Button type="submit" onClick={handleSubmitRegister} variant="contained" sx={{ mt: 5 }}>Register</Button>
                        <Typography variant='subtitle' sx={{ mt: 2 }}>Already have an account? <a href="#">Sign in</a></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Register;