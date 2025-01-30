import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 170,bgcolor:'#149075',height:'100%' }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        <ListItem>
        <Button sx={{ color: '#149075', border: '2px solid white', boxShadow: 2  , bgcolor:'white'}} variant='outlined' >Event</Button>
        </ListItem>
        <ListItem>
        <Button sx={{ color: '#149075', border: '2px solid white', boxShadow: 2 , bgcolor:'white'}}  variant='outlined'  > Blog </Button>
        </ListItem>
        
        <ListItem>
        <Button sx={{ color:'white', border: '2px solid white', boxShadow: 2 }}>Sign UP <EastIcon sx={{ marginInline: 1 }} /></Button>
      </ListItem>

      </List>


    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>  <MenuIcon sx={{ color: 'white' }} /> </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{bgcolor:'#149075'}} >
        {DrawerList}
      </Drawer>
    </div>
  );
}
