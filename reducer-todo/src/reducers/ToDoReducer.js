export const initialState = [
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,

                {   item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        case 'SET_COMPLETED' :
            return state.map((todo, i) => {
        
                    if(i === action.payload) {
                        return {...todo, completed: !todo.completed}
                    } else {
                        return todo
                    }
                })
        case 'CLEAR_COMPLETED' :
            return action.payload.filter(todo => todo.completed === false)

    //     };
      default:
        return state;
    }
  };