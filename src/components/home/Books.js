// import React from "react";
// import '../../styles/slider.scss'
// import { CardContent, Typography, IconButton, RadioGroup } from "@material-ui/core";
// import Card from '@material-ui/core/Card';
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import { red, blue } from '@material-ui/core/colors';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import miLucha from '../img/miLucha.jpg';
// import leviatan from '../img/leviatan.jpg';
// import loboEstepario from '../img/loboEstepario.jpg';



// const card = [
//   {
//     url: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/d5/54d5358ef698d18895a606d95e5e4055.jpg",
//     width: "400px",
//     height: "550px"
//   },
//   {
//     url: "/static/images/grid-list/burgers.jpg",
//     width: "400px",
//     height: "550px"
//   },

// ];

// const [spacing, setSpacing] 
// function Books() {
//   // const handleChange = event => {
//   //   setSpacing(Number(event.target.value));
//   // };
//   // {images.map(image => (
//   return (
//     <Grid container className="root" >
//       <Grid item xs={12}>
//         <Grid container justify="center" >
//         {[0, 1, 2].map(value =>(
//           <Grid key={value} item>
//             <Paper className="paper"/>
//           </Grid>
//         ))}
//         </Grid>
//       </Grid>
//           <Grid item xs={12}>
//             <Paper className="control">
//               <Grid container>
//                 <Grid item>
//                   <RadioGroup name="spacing"
//                   aria-label="spacing"> 
//                   </RadioGroup>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>
//     </Grid>
// <Card className="root">
//   {/* {card.map(imgBooks =>( */}
//   {/* <CardContent>
//     <img src={leviatan} className="imgBooks" />
//     <Typography style={{ color: blue[700] }}>Hola mundo</Typography>
//     <IconButton>
//       <ShoppingCartIcon />
//     </IconButton>
//   </CardContent> */}
//   {/* ))} */}
//   <CardContent>
//     {/* <img src={miLucha} className="imgBooks" /> */}
//     <img src={leviatan} className="imgBooks"/>
//     {/* <img src={loboEstepario} className="imgBooks"/> */}

//     <Typography style={{ color: blue[700] }}>Hola mundo</Typography>
//     <IconButton>
//       <ShoppingCartIcon />
//     </IconButton>
//   </CardContent>
// </Card>



//   )

// }
// export default Books;

// import { makeStyles } from "@material-ui/core/styles";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from "@material-ui/core/Typography";

// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { IconButton } from "@material-ui/core";

// const images = [
//   {
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%&usqp=CAU",
//     height: "500px",
//     width: "300px"
//   },
//   {
//     url: "/static/images/grid-list/burgers.jpg",

//     width: "30%"
//   },
//   {
//     url: "/static/images/grid-list/camera.jpg",
//     // title: "shopping cart",
//     width: "30%"
//   }
// ];

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     minWidth: 300,
//     width: "100%"
//   },
//   image: {
//     position: "relative",
//     height: 200,
//     [theme.breakpoints.down("xs")]: {
//       width: "100% ", // Overrides inline-style !important
//       height: 100
//     },
//     "&:hover, &$focusVisible": {
//       zIndex: 1,
//       "& $imageBackdrop": {
//         opacity: 0.15
//       },
//       "& $imageMarked": {
//         opacity: 0
//       },
//       "& $imageTitle": {
//         border: "4px solid currentColor"
//       }
//     }
//   },
//   focusVisible: {},
//   imageButton: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: theme.palette.common.white
//   },
//   imageSrc: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: "cover",
//     backgroundPosition: "center 40%"
//   },
//   imageBackdrop: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create("opacity")
//   },
//   // imageTitle: {
//   //   position: "relative",
//   //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
//   //     6}px`
//   // },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: "absolute",
//     bottom: -2,
//     left: "calc(50% - 9px)",
//     transition: theme.transitions.create("opacity")
//   }
// }));

// export default function ButtonBases() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {images.map(image => (
//         <ButtonBase
//           focusRipple
//           key={image.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: image.width
//           }}
//         >
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image.url})`
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             {/* <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             > */}
//              <IconButton>
//              <ShoppingCartIcon />
//              </IconButton>
//               <span className={classes.imageMarked} />
//             {/* </Typography> */}
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1

  },
  paper: {
    height: 440,
    width: 300
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2,].map(value => (
            <Grid key={value} item>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>

      </Grid>
      <Grid item xs={12}>

        {/* <Paper className={classes.control}> */}
        <Grid container>
          <Grid item>
            {/* <FormLabel>spacing</FormLabel> */}
           
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={handleChange}
              row
            >
              {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))} */}
            </RadioGroup>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}
