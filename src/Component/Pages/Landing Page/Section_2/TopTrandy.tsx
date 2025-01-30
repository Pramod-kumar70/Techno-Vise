import './TopTrandy.css'
import { Button, Grid } from '@mui/material';
import { Typography } from '@mui/material';
export default function TopTrandy() {
    return (
        <>

            

            <Grid container justifyContent="center" my={5} marginTop={'150px'} rowGap={3}>
                <Grid item xs={12}>
                <Typography variant="h4" textAlign="center" fontWeight={600}>
                    Top Trendy Technologies
                </Typography> 
                </Grid>
                {/* First Row of Buttons */}
                <Grid container justifyContent="space-evenly" rowGap={3} gap={1} item md={10} xs={11}>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        textAlign="center"
                        boxShadow={2}
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>REACT</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>MONGODB</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>NODEJS</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>EXPRESS</Button>
                    </Grid>
                </Grid>

                {/* Second Row of Buttons */}
                <Grid container justifyContent="space-evenly" rowGap={3} gap={1} sx={{mt:{md:-1,xs:-1.2}}} item md={10} xs={11}>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>ANGULAR</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>AWS</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>JAVASCRIPT</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>GITHUB</Button>
                    </Grid>
                </Grid>

                {/* Third Row */}
                <Grid container justifyContent="space-evenly" rowGap={2} gap={1} mt={-1} item md={10} xs={11}>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        textAlign="center"
                        boxShadow={2}
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>PYTHON</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>C , C++</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>CHATGPT</Button>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        sm={4}
                        xs={5}
                        boxShadow={2}
                        textAlign="center"
                        bgcolor="#E4FFF9"
                        borderRadius={5}
                        py={0.5}
                        my={1.5}
                    >
                        <Button sx={{ fontSize: '20px', color: 'black', fontWeight: 500 }}>CORE JAVA</Button>
                    </Grid>
                </Grid>
            </Grid>





        </>
    )
}
