import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';

const EDIT_MOVIE = 'EDIT_MOVIE';
const FIND_UPDATE = 'FIND_UPDATE';

const editMovie = (payload) => {
    return { type: EDIT_MOVIE, payload };
};
const findUpdate = (payload) => {
    return { type: FIND_UPDATE, payload };
};


const updateMovie = (formData, history, id) => async (dispatch) => {
   const token = localStorage.getItem("token");
   try {
    for (let key in formData) {
        if (formData[key] === "") {
            delete formData[key];
        }
    }

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
    };
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/update/${id}`;
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            icon: "success",
            title: "Your data is successfully updated",
        });

        history.goBack();
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
//    try {
//     for (let key in formData) {
//         if (formData[key] === "") {
//             delete formData[key];
//         }
//     }
//     const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/update/${id}`;
//     const options = {
//         method: 'PUT',
//         body: JSON.stringify(formData),
//         headers: {
//             'Content-type': 'application/json',
//             authorization: `Bearer ${token}`,
//         },
//     };
//     const response = await fetch(url, options);
//     const result = await response.json();

//     if (response.status === 200) {
//         Swal.fire({
//             title: 'update movie succes!',
//             text: '',
//             icon: 'success',
//             // confirmButtonText: 'Cool',
//         });
//         history.push('/');
//         dispatch(editMovie(result));
//     } 
    
// };

const findMovie = (id) => async (dispatch) => {
       const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/findbysearch/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();
    
        dispatch(findUpdate(result));
    };


export {
    EDIT_MOVIE,
    updateMovie,
    editMovie,
    findUpdate,
    findMovie,
    FIND_UPDATE,
};