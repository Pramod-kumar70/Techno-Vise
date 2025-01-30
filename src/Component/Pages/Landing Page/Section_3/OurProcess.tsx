
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import Image1 from "../../../../assets/smiling-people-checking-giant-check-list-background 1.png"
import Image2 from "../../../../assets/Our process 2.png";
import Image3 from "../../../../assets/Our process img 3.png";

import { Grid } from '@mui/material';
export default function OurProcess() {
    return (
        <>


            <Grid container justifyContent={'center'} marginTop={'160px'} textAlign={'center'}>
                <Grid item md={5} textAlign={'center'} py={3} > <Typography variant='h3' fontWeight={600} > Our Process</Typography> </Grid>

            </Grid>



            <Grid container rowGap={'40px'} py={3} justifyContent={'center'} bgcolor={'#E4FFF9'}   >



                {/* Step 1 start */}
                <Grid container md={10.3} xs={11} rowGap={3} my={3.5} justifyContent={'space-evenly'} alignItems={'center'} >

                    <Grid item md={1.9} xs={5} sm={3} >
                        <Typography
                            variant="h5"
                                

                            bgcolor="#149075"
                            boxShadow={5}
                            py={'59px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 1
                        </Typography>

                    </Grid>

                    <Grid container item md={9.5} xs={12} py={4}
                        sx={{

                            bgcolor: 'white',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: { md: 'row', xs: 'column' },
                            textAlign: { md: 'start', xs: 'start' }

                        }}
                        justifyContent={'space-evenly'} alignItems={'center'} boxShadow={5} borderRadius={5} border={1}>

                        <Grid item lg={2.2} md={3.8}  >
                            <Box
                                component='img'
                                src={Image1}

                                sx={{
                                    width: { md: '210px', xs: '300px' },


                                }}

                            >

                            </Box>
                        </Grid>
                        <Grid item lg={7.5} md={7.9} xs={11}  >
                            <Typography variant='h5' fontWeight={600}>Analyze the Technical Requirements:-</Typography>
                            <Typography variant='h6'> We begin by deeply analyzing your company's technical
                                requirements and understanding  your tech-stack needs. Our AI
                                driven model generates detailed reports based on your  SDLC
                                model to ensure precise matching</Typography>
                        </Grid>

                    </Grid>


                </Grid>

                {/* Step 1 End */}




                {/* Step 2 start */}

                <Grid container md={10.3} xs={11} rowGap={3} my={3.5} justifyContent={'space-evenly'} alignItems={'center'} >

                    <Grid item md={1.9} xs={5} sm={3}
                        sx={{
                            display: { md: 'none' }
                        }}

                    >
                        <Typography
                            variant="h5"


                            bgcolor="#149075"
                            boxShadow={5}
                            py={'60px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 2
                        </Typography>

                    </Grid>

                    <Grid container item md={9.5} xs={12} py={3}
                        sx={{

                            bgcolor: 'white',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: { md: 'row', xs: 'column' },
                            textAlign: { md: 'start', xs: 'start' }

                        }}
                        justifyContent={'space-evenly'} alignItems={'center'} boxShadow={5} borderRadius={5} border={1}>

                        <Grid item lg={2.2} md={3.8}  >
                            <Box
                                component='img'
                                src={Image2}

                                sx={{
                                    width: { md: '210px', xs: '300px' },


                                }}

                            >

                            </Box>
                        </Grid>
                        <Grid item lg={7.5} md={7.9} xs={11} sx={{py:{md:0,xs:3}}} >
                            <Typography variant='h5' fontWeight={600}>Analyze the Technical Requirements:-</Typography>
                            <Typography variant='h6'> We begin by deeply analyzing your company's technical
                                requirements and understanding  your tech-stack needs. Our AI
                                driven model generates detailed reports based on your  SDLC
                                model to ensure precise matching</Typography>
                        </Grid>

                    </Grid>

                    <Grid item md={1.9} xs={5} sm={3}
                        sx={{
                            display: { md: 'block', xs: 'none' }
                        }}

                    >
                        <Typography
                            variant="h5"


                            bgcolor="#149075"
                            boxShadow={5}
                            py={'60px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 2
                        </Typography>

                    </Grid>

                </Grid>

                {/* Step 2 End */}





                {/* Step 3 start ***************** */}
                <Grid container md={10.3} xs={11} rowGap={3} my={3.5} justifyContent={'space-evenly'} alignItems={'center'} >

                    <Grid item md={1.9} xs={5} sm={3} >
                        <Typography
                            variant="h5"


                            bgcolor="#149075"
                            boxShadow={5}
                            py={'60px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 3
                        </Typography>

                    </Grid>

                    <Grid container item md={9.5} xs={12} py={5}
                        sx={{

                            bgcolor: 'white',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: { md: 'row', xs: 'column' },
                            textAlign: { md: 'start', xs: 'start' }

                        }}
                        justifyContent={'space-evenly'} alignItems={'center'} boxShadow={5} borderRadius={5} border={1}>

                        <Grid item lg={2.3} md={3.8} py={4}  textAlign={'center'} >
                            <Box
                                component='img'
                                textAlign={'center'}
                                src={Image3}

                                sx={{
                                    width: { md: '200px', xs: '300px' },


                                }}

                            >

                            </Box>
                        </Grid>
                        <Grid item lg={7.5} md={7.9} xs={11}  >
                            <Typography variant='h5' fontWeight={600}>Analyze the Technical Requirements:-</Typography>
                            <Typography variant='h6'> We begin by deeply analyzing your company's technical
                                requirements and understanding  your tech-stack needs. Our AI
                                driven model generates detailed reports based on your  SDLC
                                model to ensure precise matching</Typography>
                        </Grid>

                    </Grid>


                </Grid>

                {/* Step 3 End */}





                {/* Step 4 start */}
                <Grid container md={10.3} xs={11} rowGap={3} my={3.5} justifyContent={'space-evenly'} alignItems={'center'} >

                    <Grid item md={1.9} xs={5} sm={3}
                        sx={{
                            display: { md: 'none' }
                        }}

                    >
                        <Typography
                            variant="h5"


                            bgcolor="#149075"
                            boxShadow={5}
                            py={'60px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 4
                        </Typography>

                    </Grid>

                    <Grid container item md={9.5} xs={12} py={4}
                        sx={{

                            bgcolor: 'white',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: { md: 'row', xs: 'column' },
                            textAlign: { md: 'start', xs: 'start' }

                        }}
                        justifyContent={'space-evenly'} alignItems={'center'} boxShadow={5} borderRadius={5} border={1}>

                        <Grid item lg={2.2} md={3.8}  >
                            <Box
                                component='img'
                                src={Image1}

                                sx={{
                                    width: { md: '210px', xs: '300px' },


                                }}

                            >

                            </Box>
                        </Grid>
                        <Grid item lg={7.5} md={7.9} xs={11}  >
                            <Typography variant='h5' fontWeight={600}>Analyze the Technical Requirements:-</Typography>
                            <Typography variant='h6'> We begin by deeply analyzing your company's technical
                                requirements and understanding  your tech-stack needs. Our AI
                                driven model generates detailed reports based on your  SDLC
                                model to ensure precise matching</Typography>
                        </Grid>

                    </Grid>

                    <Grid item md={1.9} xs={5} sm={3}
                        sx={{
                            display: { md: 'block', xs: 'none' }
                        }}

                    >
                        <Typography
                            variant="h5"


                            bgcolor="#149075"
                            boxShadow={5}
                            py={'60px'}

                            textAlign="center"
                            color="white"

                            sx={{
                                borderRadius: 5,
                                clipPath:
                                    "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",

                            }}
                        >
                            Step 4
                        </Typography>

                    </Grid>

                </Grid>

                {/* Step 4 End */}




            </Grid>






        </>
    )
}
