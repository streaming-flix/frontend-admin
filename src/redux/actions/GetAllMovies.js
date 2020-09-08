const GET_ALL_MOVIES = 'GET_ALL_MOVIES';

const getAllMovies = (data) => {
    return {
        type: GET_ALL_MOVIES,
        data,
    };
};

const fetchGetAllMovies = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/getall`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getAllMovies(result));
    } catch (error) {
        console.log(error);
    }
};

export { getAllMovies, GET_ALL_MOVIES, fetchGetAllMovies };