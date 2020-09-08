import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {updateMovie, findMovie} from '../redux/actions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        StreamingFlix
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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

export default function FormEditMovie() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
      title: '',
      link_triler: '',
      link_full: '',
      year: '',
      sipnosis: '',
      rating: '',
      actor: '',
      director: '',
      image_url: '',
  });

  useEffect(() => {
    dispatch(findMovie(id));

    // eslint-disable-next-line
}, []);
console.log(useEffect);

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(updateMovie(form, history, id));   
      };
     

console.log(form)
  const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Form Edit Movie
        </Typography>
        
        <form onSubmit={handleSubmit}  className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            defaultValue={form.title}
            onChange={handleChange}
            autoComplete="title"
            autoFocus
          />
         
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="image_url"
            label="image"
            type="text"
            id="image"
            defaultValue={form.image_url}
            onChange={handleChange}
            autoComplete="image"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="link_triler"
            label="link triler"
            type="text"
            id="link triler"
            defaultValue={form.link_triler}
            onChange={handleChange}
            autoComplete="link triler"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="link_full"
            label="link full"
            type="link full"
            id="link full"
            defaultValue={form.link_full}
            onChange={handleChange}
            autoComplete="link full"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="year"
            label="year"
            type="year"
            id="year"
            defaultValue={form.year}
            onChange={handleChange}
            autoComplete="year"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="sipnosis"
            label="sypnosis"
            type="sypnosis"
            id="sypnosis"
            defaultValue={form.sipnosis}
            onChange={handleChange}
            autoComplete="sypnosis"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rating"
            label="rating"
            type="rating"
            id="rating"
            defaultValue={form.rating}
            onChange={handleChange}
            autoComplete="rating"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="actor"
            label="actor"
            type="actor"
            id="actor"
            defaultValue={form.actor}
            onChange={handleChange}
            autoComplete="actor"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="director"
            label="Director"
            type="Director"
            id="Director"
            defaultValue={form.director}
            onChange={handleChange}
            autoComplete="Director"
          />
          
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
}