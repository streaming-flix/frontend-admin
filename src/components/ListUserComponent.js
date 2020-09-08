import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {fetchGetAllMovies} from '../redux/actions';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteMovie } from '../redux/actions/DeleteMovie';


    const ListUserComponent = () => {
        const dispatch = useDispatch();
        const movie = useSelector((state) => state.GetAllMovies);
        console.log(movie);
        useEffect(() => {
            dispatch(fetchGetAllMovies());
        }, [dispatch]);
  
        return (
            <div>
               <Typography variant="h4" style={style}>All Movie</Typography>
                               <Button variant="contained" color="primary" href='/AddMovie'>
                    Add Movie
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Link triler</TableCell>
                            <TableCell align="right">Link Full</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">Genre</TableCell>
                            <TableCell align="right">Actor</TableCell>
                            <TableCell align="right">Director</TableCell>
                            <TableCell align="right">Sypnosis</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Image</TableCell>
                        </TableRow>
                    </TableHead>
                    {movie.result !== undefined &&
                movie.result.map((item, index) => {
                return(
                    <TableBody>
                            <TableRow key={item._id}>
                                <TableCell component="th" scope="row" >
                                    {index+1}
                                </TableCell>
                        <TableCell>{item.title}</TableCell>
                            <TableCell align="right">{item.link_triler}</TableCell>
                            <TableCell align="right">{item.link_full}</TableCell>
                            <TableCell align="right">{item.year}</TableCell>
                            <TableCell align="right">{item.genre}</TableCell>
                            <TableCell align="right">{item.actor}</TableCell>
                            <TableCell align="right">{item.director}</TableCell>
                            <TableCell align="right">{item.sipnosis}</TableCell>
                            <TableCell align="right">{item.rating}</TableCell>
                            <TableCell align="right">{item.image_url}</TableCell>
                                <TableCell align="right"  ><Link to={`/EditMovie/${item._id}`}><CreateIcon /></Link></TableCell>
                                <TableCell align="right" onClick={() => dispatch(deleteMovie(item._id))} ><DeleteIcon /></TableCell>
                            </TableRow>
                        {/* ))} */}
                    </TableBody>
                );
                            })}
                    
                </Table>

            </div>
        );
    // }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListUserComponent;