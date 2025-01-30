import './VirtualCTO.css'
import { Box, Grid, Typography } from '@mui/material';
import CTOIMG from "../../../../assets/Screenshot_2024-08-26_143800-removebg-preview 1.png"






function VirtualCTO() {


    return (
        <>
            <Grid container justifyContent={'center'} mt={5} mb={2} textAlign={'center'}>

                <Grid item md={5} textAlign={'center'} pt={3} >  <Typography variant='h4' fontWeight={'600'}> Virtual CTO</Typography> </Grid>

            </Grid>


            <Grid container justifyContent={'center'} my={5} bgcolor={'#E4FFF9'}>
                <Grid item md={10} xs={11} container py={5} alignItems={'center'} >

                    <Grid container justifyContent={'space-evenly'} py={2} rowGap={4} alignItems={'center'} >
                        <Grid item md={5.5} xs={10} sx={{textAlign:{md:'start', xs:'center'}}}>
                            <Box
                                component='img'
                                src={CTOIMG}
                                


                                sx={{
                                    width: { lg:'490px', md: '380px', sm:'450px', xs: '300px' },
                                   


                                }}
                            ></Box>
                        </Grid>
                        <Grid item md={5.5} xs={10} className='SlectQuestion'>

                            <select name="" style={{ paddingBlock: '25px', paddingInline: '20px' }} id="">select
                                <option value="">Who is CTO ? </option>
                                <option value="1" style={{ paddingBlock: '20px' }}>one  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor. </option>

                            </select>

                            <select name="" style={{ paddingBlock: '25px', paddingInline: '20px' }} id="">select
                                <option value=""> Why do companies need a CTO? </option>
                                <option value="1" style={{ paddingBlock: '20px' }}>one  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor. </option>

                            </select>


                            <select name="" style={{ paddingBlock: '25px', paddingInline: '20px' }} id="">select
                                <option value="">Why Startups Should Consider Virtual CTOs ? </option>
                                <option value="1" style={{ paddingBlock: '20px' }}>one  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor. </option>

                            </select>

                            <select name="" style={{ paddingBlock: '25px', paddingInline: '20px' }} id="">select
                                <option value=""> Why Choose a Virtual CTO from TechoVise ? </option>
                                <option value="1" style={{ paddingBlock: '20px' }}>one  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor. </option>

                            </select>







                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default VirtualCTO