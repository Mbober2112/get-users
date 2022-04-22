import { AppStateType } from "./reduxStore";

export const usersSelector = (state: AppStateType) =>{
    return state.usersState.users;
}

export const currentUserSelector = (state: AppStateType) =>{
    for(let i=0; i<state.usersState.users.length; i++){
        if(state.usersState.users[i].id === state.usersState.currentUser) {
            return state.usersState.users[i]
        }
    }
}

export const changeModeSelector = (state: AppStateType) =>{
    return state.usersState.changeModeOn;
}