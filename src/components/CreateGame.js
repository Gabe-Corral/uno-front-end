import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter, useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CreateGame(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleCreateGame = (e) => {
    e.preventDefault();
    let room_name = e.target.room_name.value;
    props.createGame(room_name);
    history.push(`/${e.target.room_name.value}`);
  }

  return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create Game
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleCreateGame}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="room_name"
                label="Room Name"
                id="room_name"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Private Game"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create Game
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
  );
}

export default withRouter(CreateGame);
