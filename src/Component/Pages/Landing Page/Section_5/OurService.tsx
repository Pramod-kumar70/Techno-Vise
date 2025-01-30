
import { Box, Grid, Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import Image1 from "../../../../assets/Screenshot 2024-08-26 135111 1.png"
function OurService() {
    return (
        <>
            <Grid container justifyContent={'center'} mt={6} mb={3} textAlign={'center'}>

                <Grid item md={5} textAlign={'center'} pt={3} > <Typography variant='h3' fontWeight={600} > Our Service</Typography> </Grid>

            </Grid>




            <Grid container justifyContent={'center'} bgcolor={'#E4FFF9'} pt={4} pb={9} >
                <Grid item md={10} xs={11}>
                    <Grid container rowGap={7}>
                        <Typography mt={1.5} variant='h6' sx={{ textAlign: { md: 'center', xs: 'justify' }, mb: { md: 7, xs: 2 } }} > InternNexus offers a range of services including website development, application development, and digital marketing, aimed at
                            providing comprehensive solutions for businesses and individuals looking to enhance their online presence and reach.</Typography>



                        <Grid container justifyContent={'space-evenly'} rowGap={3} >
                            <Grid item lg={3} md={5} sm={5} xs={12} textAlign={'center'}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent >
                                        <Box
                                            component='img'
                                            src={Image1}
                                            sx={{
                                                width: { md: '220px', xs: '340px', sm: '200px' }
                                            }}
                                        />

                                        <hr style={{ height: '5px', backgroundColor: '#149075', border: 'none', marginBlock: '10px' }} />

                                        <Typography variant='h5' my={2} fontWeight={600} > Website Development</Typography>
                                        <Typography variant='h6' textAlign={'justify'}> Website Development is the
                                            process of creating, designing,
                                            and maintaining websites,
                                            ensuring they are functional,
                                            user-friendly, and visually
                                            appealing</Typography>
                                    </CardContent>
                                </Card>

                            </Grid>


                            <Grid item lg={3} md={5} sm={5} xs={12} textAlign={'center'}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent >
                                        <Box
                                            component='img'
                                            src={Image1}
                                            sx={{
                                                width: { md: '220px', xs: '340px', sm: '200px' }
                                            }}
                                        />

                                        <hr style={{ height: '5px', backgroundColor: '#149075', border: 'none', marginBlock: '10px' }} />

                                        <Typography variant='h5' my={2} fontWeight={600} > App Development</Typography>
                                        <Typography variant='h6' textAlign={'justify'}>

                                            App Development is the
                                            process of creating software
                                            applications for mobile devices
                                            or desktops, focusing on
                                            functionality, user experience,
                                            and performance.
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>


                            <Grid item lg={3} md={5} sm={5} xs={12} textAlign={'center'}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent >
                                        <Box
                                            component='img'
                                            src={Image1}
                                            sx={{
                                                width: { md: '220px', xs: '340px', sm: '200px' }
                                            }}
                                        />

                                        <hr style={{ height: '5px', backgroundColor: '#149075', border: 'none', marginBlock: '10px' }} />

                                        <Typography variant='h5' my={2} fontWeight={600} > Website Development</Typography>
                                        <Typography variant='h6' textAlign={'justify'}> Website Development is the
                                            process of creating, designing,
                                            and maintaining websites,
                                            ensuring they are functional,
                                            user-friendly, and visually
                                            appealing</Typography>
                                    </CardContent>
                                </Card>

                            </Grid>

                        </Grid>

                        <Grid container xs={12} justifyContent={'center'} gap={'90px'} >
                            <Grid item lg={3} md={5} sm={5} xs={12} textAlign={'center'}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent >
                                        <Box
                                            component='img'
                                            src={Image1}
                                            sx={{
                                                width: { md: '220px', xs: '340px', sm: '200px' }
                                            }}
                                        />

                                        <hr style={{ height: '5px', backgroundColor: '#149075', border: 'none', marginBlock: '10px' }} />

                                        <Typography variant='h5' my={2} fontWeight={600} >  Cyber Security</Typography>
                                        <Typography variant='h6' textAlign={'justify'}>

                                            Cybersecurity involves protecting
                                            systems, networks, and data from
                                            digital attacks, unauthorized
                                            access, and damage by
                                            implementing various security
                                            measures and protocols.

                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>

                            <Grid item lg={3} md={5} sm={5} xs={12} textAlign={'center'}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent >
                                        <Box
                                            component='img'
                                            src={Image1}
                                            sx={{
                                                width: { md: '220px', xs: '340px', sm: '200px' }
                                            }}
                                        />

                                        <hr style={{ height: '5px', backgroundColor: '#149075', border: 'none', marginBlock: '10px' }} />

                                        <Typography variant='h5' my={2} fontWeight={600} > Website Development</Typography>
                                        <Typography variant='h6' textAlign={'justify'} pb={3.3}> Website Development is the
                                            process of creating, designing,
                                            and maintaining websites,
                                            ensuring they are functional,
                                            user-friendly, and visually
                                            appealing</Typography> 
                                    </CardContent>
                                </Card>

                            </Grid>

                        </Grid>








                    </Grid>
                </Grid>
            </Grid>















        </>
    )
}

export default OurService