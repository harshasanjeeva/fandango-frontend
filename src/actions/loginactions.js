import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const BOOK ="BOOK";
export const MOVIES ="MOVIES";
export const GETMOVIES ="GETMOVIES";


export function actionlogin(userdata) {
    console.log("in login");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.doLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}


export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
    return {
        type: SIGNUP,
        message: "inside Signup Actions",
        data:data
    }
}




export function actionbook(userdata) {
    console.log("in booking");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.booking(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(book(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function book(data) {
    console.log(data);
    return {
        type: BOOK,
        message: "inside Signup Actions",
        data:data
    }
}
export function actionmovies(userdata) {
    console.log("in movies");
    return function (dispatch) {
            dispatch(movies(userdata))
        }
};

export function movies(data) {
    console.log(data);
    return {
        type: MOVIES,
        message: "inside Movies Actions",
        data:data
    }
}
export function actiongetmovies(userdata) {
    console.log("in get movies");
    console.log(userdata);
    return function (dispatch) {
        try {

            API.getmovies(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(getmovies(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function getmovies(data) {
    console.log(data);
    return {
        type: GETMOVIES,
        message: "inside GETMOVIES Actions",
        data:data
    }
}