export const reducer = (state, action) => {
    switch (action.type) {
      case 'delete':
        console.log(state,action);
        let newData = state[action.payload.catigoria].filter((value)=>{
          return value.id!==action.payload.id
        })
       return {...state,[action.payload.categoria]:newData}
      default:
        return state;
    }
  };
  