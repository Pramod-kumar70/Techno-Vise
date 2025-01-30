
import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import News1 from "../../../../assets/nasscom.png"
import News2 from "../../../../assets/Startupindia.png"
import News3 from "../../../../assets/STPI.png"
import News4 from "../../../../assets/MSME.png"
import News5 from "../../../../assets/HisdustanTimes.png"
import News6 from "../../../../assets/News18.png"
function News() {
    return (
        <>

            <Grid container justifyContent={'center'} mt={7} mb={3} textAlign={'center'}>

                <Grid item md={11.3} xs={12} textAlign={'center'} pt={3} mb={5} >  <Typography variant='h4' fontWeight={'bold'} >News, Media & Recognition</Typography> <br />
                            <br />
                    <Typography variant='h6' fontSize={'26px'} color='#149075' fontWeight={600} > Our Achievements and Accolades</Typography> 
                    <Typography variant='h5'mt={1} >Techovise has been recognized by various media outlets and industry bodies for our  innovative approach to recruitment and retention. </Typography>



                </Grid>

                {/* News Images */}

                <Grid container my={5} rowGap={2} justifyContent={'space-evenly'} >

                    <Grid item md={2.7} sm={5}>
                        <Box
                            component='img'
                            src={News1}
                            width={'180px'}
                        />
                    </Grid>
                    <Grid item md={2.7} sm={5}>
                        <Box
                            component='img'
                            src={News2}
                            width={'180px'}
                        />
                    </Grid>
                    <Grid item md={2.7} sm={5}>
                        <Box
                            component='img'
                            src={News3}
                            width={'150px'}
                        />
                    </Grid>
                    <Grid item md={2.7} sm={5}>
                        <Box
                            component='img'
                            src={News4}
                            width={'110px'}
                        />
                    </Grid>
                    <Grid item md={3.4} sm={5}>
                        <Box
                            component='img'
                            src={News5}
                            width={'250px'}
                        />
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Box
                            component='img'
                            src={News6}
                            width={'210px'}
                        />
                    </Grid>
                </Grid>

            </Grid>







        </>
    )
}

export default News