import './Subscription.css'
import { Card, CardContent, Grid, Typography } from '@mui/material';





function Subscription() {
    return (
        <>
            <Grid container justifyContent={'center'} mt={8} mb={2} textAlign={'center'}>

                <Grid item md={9.5} textAlign={'center'} pt={3} >  <Typography variant='h3'fontWeight={600} > Subscription Plans For IT Services </Typography> </Grid>

            </Grid>
            <Grid container justifyContent={'center'} py={4} >
                <Grid item md={10} xs={11}>



                    <Grid container >


                        <Grid container xs={12} justifyContent={'space-evenly'}  >

                            <Grid item lg={3.5} md={5} sm={8} xs={11} py={3} textAlign={'center'}>
                                <Card sx={{boxShadow:5, pb:1,borderRadius:3}} > 

                                    <h2 style={{ width:'100%', marginBottom: '30px', paddingBlock: '15px', backgroundColor: '#149075', color: 'white', fontWeight: 'normal' }}> Basic Plan <br />
                                        (3 Months)</h2>
                                    <ul className='AdjustLI' style={{ listStyleType: 'none' }} >
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"  width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li><img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                    </ul>
                                    <CardContent>
                                    <h3 style={{ backgroundColor: '#149075', marginTop: '15px', paddingBlock: '15px', marginInline: '10px', borderRadius: '10px', color: 'white', fontWeight: 'normal',  }}> <Typography textAlign={'start'} variant='h4' mx={4} className='TextDeco'>9000</Typography>
                                    <Typography textAlign={'end'} variant='h4' mx={4} >4500/-</Typography> </h3></CardContent>
                                </Card>

                            </Grid>


                           <Grid item lg={3.5} md={5} sm={8} xs={11} py={3} textAlign={'center'}>
                                <Card sx={{boxShadow:5, pb:1,borderRadius:3}} > 

                                    <h2 style={{ width:'100%', marginBottom: '30px', paddingBlock: '15px', backgroundColor: '#149075', color: 'white', fontWeight: 'normal' }}> Intermediate Plan  <br />
                                        (6 Months)</h2>
                                    <ul className='AdjustLI' style={{ listStyleType: 'none' }} >
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"  width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li><img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                    </ul>
                                    <CardContent>
                                    <h3 style={{ backgroundColor: '#149075', marginTop: '15px', paddingBlock: '15px', marginInline: '10px', borderRadius: '10px', color: 'white', fontWeight: 'normal',  }}> <Typography textAlign={'start'} variant='h4' mx={4} className='TextDeco'>9000</Typography>
                                    <Typography textAlign={'end'} variant='h4' mx={4} >4500/-</Typography> </h3></CardContent>
                                </Card>

                            </Grid>

                            <Grid item lg={3.5} md={5} sm={8} xs={11} py={3} textAlign={'center'}>
                                <Card sx={{boxShadow:5, pb:1,borderRadius:3}} > 

                                    <h2 style={{ width:'100%', marginBottom: '30px', paddingBlock: '15px', backgroundColor: '#149075', color: 'white', fontWeight: 'normal' }}> Advance Plan <br />
                                        (12 Months)</h2>
                                    <ul className='AdjustLI' style={{ listStyleType: 'none' }} >
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"  width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li><img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" />  6 Images in a Month </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 0 Video in a Month</li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                        <li> <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width={'15px'} alt="" /> 1000 INR for one pager website </li>
                                    </ul>
                                    <CardContent>
                                    <h3 style={{ backgroundColor: '#149075', marginTop: '15px', paddingBlock: '15px', marginInline: '10px', borderRadius: '10px', color: 'white', fontWeight: 'normal',  }}> <Typography textAlign={'start'} variant='h4' mx={4} className='TextDeco'>9000</Typography>
                                    <Typography textAlign={'end'} variant='h4' mx={4} >4500/-</Typography> </h3></CardContent>
                                </Card>

                            </Grid>
                        </Grid>









                    </Grid>
                </Grid>
            </Grid>















        </>
    )
}

export default Subscription