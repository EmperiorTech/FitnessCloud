import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box sx={{
            height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <Box>
                <Grid container spacing={3} rowSpacing={6} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'start' } }}>
                            <span style={{ fontSize: '9rem' }}>
                                404
                            </span>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ borderLeft: '2px solid black' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'start' } }}>
                            <Typography variant='h3'>
                                SORRY!
                            </Typography>
                            <Typography>
                                The Page You're Looking For Was Not Found
                            </Typography>
                            <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontWeight: '600', marginTop: '5px' }}><ArrowBackIosIcon /> <span>Go Back</span></NavLink>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </Box >
    );
};

export default PageNotFound;