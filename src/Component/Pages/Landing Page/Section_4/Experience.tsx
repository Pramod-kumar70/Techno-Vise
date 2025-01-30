
import { Button, Grid } from '@mui/material';
import { Typography } from '@mui/material';
function Experience() {
    return (
        <>

            <Grid container
                justifyContent={'center'}
                my={'50px'}
            >

                <Grid item container
                  sx={{border:'3px solid #149075'}}
                  boxShadow={2}
                    justifyContent={'space-between'}
                    py={'70px'}
                    md={11}
                    xs={11}
                    my={5}
                    gap={4}
                    borderRadius={3}
                    rowGap={5}
                >

                    <Grid item md={7} px={4} xs={11}>
                        <Typography variant='h4' fontWeight={600} > Experience the Techovise Advantage -</Typography> 
                         <Typography variant='h5' my={2.8} > 99% Resource Retain Accuracy <br />
                                Free for Early Users for a Limited Time </Typography>
                          <Typography color='#149075'variant='h5' fontWeight={600} > Hurry up! Recruit smart & retain strong with Techovise.</Typography> 
                       
                    </Grid>

                    <Grid item md={3} xs={11} alignSelf={'end'}  
                    
                    sx={{textAlign:{md:'center',sm:'center' , xs:'center'}}}
                    > <Button sx={{bgcolor:'#149075' ,py:2, px:5, color:'white' , borderRadius:2 , boxShadow:2}} variant='outlined'> Explore More</Button> </Grid>


                </Grid>


            </Grid>












        </>
    )
}

export default Experience