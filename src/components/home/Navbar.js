import React from 'react'
import { Toolbar, Typography, AppBar, makeStyles, IconButton } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
// import Grid from '@material-ui/core/Grid'
// import FindInPageIcon from '@material-ui/icons/FindInPage';
import SearchIcon from '@material-ui/icons/Search';
// import Nav from '@material-ui/core/Nav'

const useStyles = makeStyles ((theme) => ({
  
    //espacio entre el navbar y el slide
    // offset: theme.mixins.toolbar
                 
    }));


const Navbar = () =>{
    const classes = useStyles()
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5">
                        Home
                    </Typography>
                    {/* <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton> */}
                    <IconButton>
                    <AddShoppingCartIcon/>
                    </IconButton>
                    {/* <Grid item xs={20}>
                    <FindInPageIcon/>
                    </Grid> */}
                    <IconButton>
                    <SearchIcon/>
                    </IconButton>
                    
                    
                    
                </Toolbar>
            </AppBar>

            <div className={classes.offset}></div>

        </div>
    )
}
export default Navbar