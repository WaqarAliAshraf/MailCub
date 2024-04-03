import React from 'react'

const simple = () => {
    return (
        <div>
            <Box sx={{ overflow: 'auto' }}>

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
                    <Person2Icon /> : (index === 2 ?
                      <SupportAgentIcon /> :
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
        </div>
    )
}

export default simple