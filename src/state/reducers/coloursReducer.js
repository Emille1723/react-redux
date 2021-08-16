const initialState = {
	colours : [
        {
            id:0,
            colour : '#ff8a80'
        },
        {
            id:1,
            colour : '#26a69a'
        },
        {
            id:2,
            colour : '#ab47bc'
        },
        {
            id:3,
            colour : '#9575cd'
        },
        {
            id:4,
            colour : '#03a9f4'
        },
        {
            id:5,
            colour : '#607d8b'
        },
    ]
};



const reducer = ( state = initialState, action) => {
	const {type, payload} = action;
	switch(type){
		// case "FETCH_COLOURS":
		// 	return {...state, colours : payload};
		default:
			return state;
	}
}


export default reducer;