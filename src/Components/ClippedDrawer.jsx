import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../images/Logo.png'
import { Link, NavLink } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const drawerWidth = 240;

const ClippedDrawer = () => {
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <div className="dashboard-image ">
            <img src={Logo} alt="" className='img-fluid' />
          </div>
          <div className="m mt-5 mb-5">
            <p className='m-logo '>M</p>
            <p className='ps-3'>Meta Logix</p>
          </div>
          <Divider />

          <List>
            {[
              <NavLink activeClassName='is-active' to="/dashboard">Dashboard</NavLink>,
              <Link to="/customer">Customer</Link>,
              <Link to="/supportTickets">Support Tickets(17)</Link>,
              <Link to="transactions">Transactions</Link>
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={index === 0 ? "/dashboard" : (index === 1 ? "/customer" : (index === 2 ? "/supportTickets" : "/transactions"))}>
                <ListItemIcon>
                  {index === 0 ?
                    <SpaceDashboardIcon /> : (index === 1 ?
                      <Person2SharpIcon /> : (index === 2 ?
                        <SupportAgentSharpIcon /> :
                        <AccountBalanceIcon />
                      )
                    )
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>

  );
};

export default ClippedDrawer;