const initialState = {
    title: "Welcome to My Friends List!"
};

export const reducer = (state = initialState, action) => {
    console.log("Our reducer function is firing! Yay!", action);
};