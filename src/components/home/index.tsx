import React from 'react';
//import materialUI components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {makeStyles, Theme, createStyles} from '@material-ui/core';
//import local components
import PrimarySearchAppBar from './navBar';
//import the actions
import ActionObj from '../../store/actions';
//import react-redux functions
import {useSelector, useDispatch} from 'react-redux';

//create style hook
const useStyles = makeStyles((theme: Theme) => createStyles({}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //load the products
  React.useEffect(() => {
    dispatch(ActionObj.LoadProductsMain());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={12} xs={12}>
          <PrimarySearchAppBar />
        </Grid>
        <Grid item md={12} xs={12}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item md={8} xs={12}></Grid>
              <Grid item md={4} xs={12}></Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
