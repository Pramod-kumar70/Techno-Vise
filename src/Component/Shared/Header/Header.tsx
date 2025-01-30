import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import LOGO3 from '../../../assets/Logo 3.jpeg';
import EastIcon from '@mui/icons-material/East';
import Drower from '../Drower/Drower'
export default function Header() {
  return (
    <>

      <AppBar sx={{ bgcolor: '#149075' }} >
        <Toolbar >

          {/* Main Container */}
          <Grid container justifyContent={'space-between'} alignItems={'center'} >

            {/* Techo-Vise Logo Box */}
            <Grid item md={1}>

              <Box component='img'
                src={LOGO3}
                sx={{
                  width: { md: '220px', xs: '150px' }
                }}
              />



            </Grid>

              {/* Tool Box */}
            <Grid item md={4} sx={{display:{xs:'none',md:'block'}}} textAlign={'end'}>

              <Button sx={{ color: 'white' }}>Event</Button>
              <Button sx={{ color: 'white' }}>Blogs</Button>
              <Button sx={{ color: 'white', border: '2px solid white', boxShadow: 2 }}>Sign UP <EastIcon sx={{ marginInline: 1 }} /></Button>

            </Grid>
            <Grid item xs={2}  sx={{display:{md:'none',xs:'block' , textAlign:'end'}}} >
              
              <Drower />
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>


    </>
  )
}
