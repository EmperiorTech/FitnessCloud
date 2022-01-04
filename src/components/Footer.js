import { Button, Container, Grid, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import logo from '../assets/logo.png';

const iconList = ['FaFacebookF', 'FaTwitter', 'FaInstagram', 'FaYoutube'];

const Footer = () => {
    return (
        <Box className="footer" sx={{ backgroundColor: '#0D0D0D', border: '1px solid black', overflow: 'hidden', color: 'inherit' }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <img style={{ width: '162.5px', height: 'auto' }} src={logo} alt="" />
                            <Box sx={{ my: 2 }}>
                                <Typography sx={{ my: 1 }}>
                                    Lifting Training Center
                                </Typography>
                                <Typography variant='caption' sx={{ color: '#f42828' }}>View Information</Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Box className="footer-icon">
                                        <FaFacebookF />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaTwitter />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaInstagram />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaYoutube />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaPinterestP />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant='button' sx={{ fontSize: 25 }}>
                            QUANCA CLUB
                        </Typography>
                        <Typography sx={{ my: 3 }}>
                            We match you with the trainer best equipped to help you meet your specific goals and preferences Give yourself the kit you need to leave your competition in the dust.
                        </Typography>
                        <Button variant="contained" color="primary">Become Memeber</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant='button' sx={{ fontSize: 25 }}>
                                        CAREERS
                                    </Typography>
                                    <ul>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                    </ul>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant='button' sx={{ fontSize: 25 }}>
                                        MEMBERSHIP
                                    </Typography>
                                    <ul>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                        <li>text</li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant='overline' sx={{ mt: 2, display: 'inline-block' }}>
                    © 2020 Quanca | Premium Gym Club
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;