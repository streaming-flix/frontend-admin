import Swal from 'sweetalert2';
import { getAllMovies } from './GetAllMovies';
// import jwt_decode from 'jwt-decode';

const DELETE_MOVIE = 'DELETE_MOVIE';

const delMovie = (payload) => {
    return { type: DELETE_MOVIE, payload };
};


const deleteMovie = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/delete/${id}`;
    const options = {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'delete succes!',
            text: '',
            icon: 'success',
            // confirmButtonText: 'Cool',
        });
        dispatch(getAllMovies());
        // history.push('/');
    } else {
        Swal.fire({
            icon: "error",
            title: result.message,
        });
    }
} catch (error) {
    console.log(error);
}
    
};


export {
    DELETE_MOVIE,
    deleteMovie,
    delMovie,
};