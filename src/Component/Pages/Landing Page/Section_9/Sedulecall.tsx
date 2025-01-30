
import { Box, Button, Grid,  TextField } from '@mui/material';
import './Sedulecall.css'
import ImgSecdule from "../../../../assets/SeduleCallimg.png"
import { Typography } from '@mui/material';
function Sedulecall() {
    return (
        <>
            <Grid container justifyContent={'center'} mt={5} mb={2} textAlign={'center'}>

                <Grid item md={10} textAlign={'center'} pt={3} >
                    <Typography sx={{fontSize:{md:'2rem' , xs:'1.5rem'}}} fontWeight={600}> Connect with Our Expert to Start Recruiting</Typography>
                </Grid>

            </Grid>

            <Grid container my={3} justifyContent={'center'}>
                <Grid item md={11} xs={11}
                    container
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    boxShadow={4}
                    bgcolor={'#E4FFF9'}
                    py={4}
                    rowGap={4}
                    borderRadius={5}>

                    <Grid item lg={4.5} md={5}

                        sx={{
                            display: { lg: 'none', md: 'none' , xs:'block' }
                        }} >

                        <Box component='img' src={ImgSecdule}
                            sx={{
                                width: { lg: '400px', sm: '300px', xs: '300px' }
                            }}
                        />
                    </Grid>




                   


                    <Grid
                        item
                        md={5.5}
                        xs={10}
                        bgcolor="white"
                        boxShadow={4}
                        borderRadius={3}
                        p={4}
                        py={4}
                        sx={{ textAlign: "start" }}
                    >
                        <Typography
                            variant="h6"
                            pb={6}
                            fontWeight={500}
                            
                        >
                            Fill out the form below to connect with our recruitment experts and
                            kickstart your journey to finding the perfect skilled resources for
                            your company.
                        </Typography>

                        <Grid container spacing={3}>
                            {/* Name */}
                            <Grid item xs={12} sm={6} >
                                
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    size="small"
                                    placeholder="Name"
                                />
                            </Grid>

                            {/* Company Name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Company Name"
                                    variant="outlined"
                                    size="small"
                                    placeholder="Company Name"
                                />
                            </Grid>

                            {/* Company Email */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Company Email"
                                    variant="outlined"
                                    size="small"
                                    placeholder="ex.rohan.mrith@gmail.com"
                                />
                            </Grid>

                            {/* Phone Number */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone No."
                                    variant="outlined"
                                    size="small"
                                    placeholder="Phone No."
                                />
                            </Grid>

                            {/* LinkedIn */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    
                                    label="LinkedIn"
                                    variant="outlined"
                                    size="small"
                                    placeholder="LinkedIn"
                                />
                            </Grid>

                            {/* Recruitment For */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Recruitment For"
                                    variant="outlined"
                                    size="small"
                                    placeholder="Recruitment For"
                                />
                            </Grid>
                        </Grid>

                        <Box mt={3} textAlign={'center'}>
                            <Button
                            
                                variant="contained"
                                sx={{
                                    bgcolor: "#149075",
                                    color: "white",
                                    py: 1,
                                    px:6,
                                    fontSize: "16px",
                                   
                                }}
                            >
                                Schedule Call
                            </Button>
                        </Box>
                    </Grid>




                    <Grid item lg={4.5} md={5}

                        sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}

                    >

                        <Box component='img' src={ImgSecdule}
                            sx={{
                                width: { md: '400px', xs: '200px' }
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>




            {/* 
    
    
    
    
    */}







        </>
    )
}

export default Sedulecall