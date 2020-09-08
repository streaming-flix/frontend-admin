import Swal from "sweetalert2";

const GET_USER_LOGIN = "GET_USER_LOGIN";

const getUserLogin = (data) => {
    return {
        type: GET_USER_LOGIN,
        data,
    };
};

const loginAdmin = (formData, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/login`;
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Login Success",
                text: "",
                icon: "success",
                confirmButtonText: "Success",
            });

            localStorage.setItem("token", result.result);
            dispatch(getUserLogin(result));
            history.push("/pageAdmin");
        } else if (response.status === 403) {
            Swal.fire({
                title: "Email or Password Incorrect!",
                text: "",
                icon: "error",
                confirmButtonText: "Back",
            });
        }
    } catch (error) {
        console.log(error)
    }
};

const logout = (history) => async () => {
    Swal.fire({
        icon: "success",
        title: "Logout succes",
    });
    localStorage.removeItem("token");
    history.push("/");
};

export {
    getUserLogin,
    GET_USER_LOGIN,
    loginAdmin,
    logout,
};