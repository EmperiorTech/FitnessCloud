import { Button, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography>
                <Button>HOME</Button>
            </Typography>
        </div>
    );
};

export default Home;