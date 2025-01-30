import './Footer.css'
import { Box, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Logoimg from '../../../assets/Logo 3.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <>

            <Grid container item px={2} rowGap={8} justifyContent={'space-evenly'} bgcolor={'#149075'} color={'white'} py={5} mt={8}>
                <Grid item md={3} sm={7.2} xs={10}>

                    <Box
                        component='img'
                        src={Logoimg}
                        textAlign={'left'}
                        
                        sx={{ width: { sx: '10px', sm: '220px', md: '290px', lg: '310px' } }}
                    ></Box>


                    <Typography variant='h6' textAlign={'justify'}>Techovise is dedicated to transforming
                        the recruitment landscape by providing
                        companies  with skilled resources that
                        match their technical requirements and
                        retain them for the long  term</Typography>
                </Grid>
                <Grid item md={1} xs={3} textAlign={'start'}>

                    <List>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography style={{ fontWeight: 'bold' }}>
                                        Panels
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Guide" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={1.4} xs={3}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography style={{ fontWeight: 'bold' }}>
                                        Terms of Use
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Policy Privacy" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Terms and Conditions" />
                        </ListItem>
                    </List>


                </Grid>
                <Grid item md={1} xs={3}>
                <List>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography style={{ fontWeight: 'bold' }}>
                                       QUICK LINKS
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Service" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Contact" />
                        </ListItem>
                        
                    </List>

                   
                </Grid>

                <Grid item md={2.5} sm={5} xs={8} textAlign={{ md: 'start', xs: 'start' }}><Typography variant='h6'> <b>SOCIAL MEDIA & ADDRESS</b> </Typography>

                    <FacebookOutlinedIcon className='FooterIcons' />
                    <InstagramIcon className='FooterIcons' />
                    <TwitterIcon className='FooterIcons' />
                    <LinkedInIcon className='FooterIcons' />
                    <Typography> Head Office: L
                        9 / 826, 4th Floor Mehrauli
                        South Delhi- 110030</Typography>
                    <Typography display={'flex'} justifyContent={'start'} my={2} alignItems={'center'} ><AddIcCallIcon className='FooterIcons' /> 8574-485-4835</Typography>
                    <Typography textAlign={'justify'} >
                        Branch Office: Near SBI ATM
                        Block Road, Refugee Colony
                        Saharsa, Bihar  - 85220

                    </Typography>
                    <Typography display={'flex'} justifyContent={'start'} my={2} alignItems={'center'} ><AddIcCallIcon className='FooterIcons' /> 8574-485-4835</Typography>


                    <Typography
                        component={'button'}

                        border={0}
                        my={2}
                        boxShadow={3}

                        borderRadius={4}
                        bgcolor={'rgb(20, 204, 60)'}

                        fontWeight={700}
                    >
                        <Button sx={{ color: 'white',fontSize:'17px' }} > <WhatsAppIcon className='FooterIcons' /> Chat On Whatapp</Button>
                    </Typography>



                </Grid>

            </Grid>
            <Typography mt={.3} bgcolor={'#149075'} color={'white'} py={5} textAlign={'center'} >  © 2024 TechIntelliVerse Private Limited. All rights reserved. </Typography>








        </>
    )
}

export default Footer