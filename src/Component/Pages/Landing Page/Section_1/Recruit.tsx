
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import LoginImg from '../../../../assets/Login-Image.png';
import './Recruit.css'
export default function Recruit() {
    return (
        <>

            <Grid container bgcolor={'#E4FFF9'} justifyContent={'center'} sx={{ marginTop: '50px', py: { xl: 4, md: 2 } }}>

                <Grid container md={10} xs={11} my={5.3} rowGap={12} justifyContent={'space-between'} alignItems={'center'}>

                    {/* Content Area */}
                    <Grid item md={5.5}  >

                        <Typography
                            sx={{
                                fontSize: { lg: '3.9rem', md: '2.5rem', xs: '2rem' },
                                fontWeight: 700,
                               
                            }}>
                            Recruit Smart & Retain Strong
                        </Typography>

                        <Typography
                            my={2}
                            variant='h6'
                            fontWeight={'700'}
                            color={'#149075'}>Techovise - Your Partner in Smart Recruitment and Strong
                                Retention: 
                        </Typography>
                        <Typography
                            variant='h6' textAlign={'justify'}>
                            Recruit the best, retain the best. At Techovise, we understand the
                            importance of having  skilled resources who fit your technical
                            needs perfectly and stay with you for the long haul.  Let's transform
                            your recruitment process and build a robust team together</Typography>

                        <Button sx={{ bgcolor: '#149075', px: 5, my: 4, color: 'white', fontSize: '18px' }}>  Enquiry Now 
                        </Button>

                    </Grid>
                  
                        
                  {/* Log In form Section  */}


                    <Grid
                        item
                        md={5}
                        xs={12}
                        sx={{
                            backgroundColor: 'white',
                            boxShadow: 4,
                            borderRadius: 3,
                            position: 'relative',
                            padding: { xs: 3, sm: 4, md: 5 },
                            mx: { xs: 'auto', md: 0 },
                        }}
                    >
                        {/* Character Image */}
                        <Box
                            component="img"
                            src={LoginImg}
                            alt="Character"
                            sx={{
                                position: 'absolute',
                                top: '-70px',
                                left: '20px',
                                height: '80px',
                                width: 'auto',
                            }}
                        />

                        {/* Login Form */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                mb: 2,
                            }}
                        >
                            Login To Your Account
                        </Typography>

                        {/* Email Field */}
                        <Typography sx={{ fontWeight: 500, mb: 1 }}>Email id</Typography>
                        <TextField
                            fullWidth
                            placeholder="exmple123@gmail.com"
                            variant="outlined"
                            sx={{
                                mb: 2,
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 3,
                                },
                            }}
                        />

                        {/* Password Field */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography sx={{ fontWeight: 500 }}>Password</Typography>
                            <Typography
                                sx={{ color: '#149075',  fontWeight: 500 }}
                            >
                                Forgot Password?
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            placeholder="enter password here"
                            variant="outlined"
                            type="password"
                            sx={{
                                mb: 3,
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 3,
                                },
                            }}
                        />

                        {/* Login Button */}
                        <Button
                            fullWidth
                            sx={{
                                backgroundColor: '#149075',
                                color: 'white',
                                py: 1.5,
                                fontSize: '16px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#10785d',
                                },
                            }}
                        >
                            Login
                        </Button>

                        {/* Register Section */}
                        <Typography
                            sx={{
                                mt: 3,
                                textAlign: 'center',
                                fontWeight: 500,
                            }}
                        >
                            Don’t have an account?{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: '#149075',
                                    fontWeight: 500,
                                }}
                            >
                                Register
                            </Typography>
                        </Typography>
                    </Grid>





                </Grid>

            </Grid>





        </>
    )
}

