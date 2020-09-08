import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';

const ADD_MOVIE = 'ADD_MOVIE';

const addMovie = (payload) => {
    return { type: ADD_MOVIE, payload };
};


const uploadMovie = (formData, history) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Add movie succes!',
            text: '',
            icon: 'success',
            // confirmButtonText: 'Cool',
        });
        history.push('/pageAdmin');
    } else {
        Swal.fire({
            title: 'Movie already add',
            text: '',
            icon: 'error',
            // confirmButtonText: 'Cool',
        });
    }
    dispatch(addMovie(result));

};


export {
    ADD_MOVIE,
    uploadMovie,
    addMovie,
};