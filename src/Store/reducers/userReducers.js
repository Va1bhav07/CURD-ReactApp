import {Actions} from '../types'
const initState={
    userData:[],
    isLoading:false,
    error:null,
    totalUser:0
}

const findUser=(state,payload)=>{
const newUserData= JSON.parse(JSON.stringify(state.userData))
const foundIndex = newUserData.findIndex(user=>user.id === payload.id);
if(foundIndex === -1){
    newUserData.push(payload);
     return {userData:newUserData,totalUser:newUserData.length}
}
    newUserData[foundIndex] = payload;
    return {userData:newUserData}
}

export const userReducer=(state=initState,action)=>{
// console.log(action)
    switch(action.type){
        case Actions.GET_USER:
            return{
                ...state,
                isLoading:true,
            }
        case Actions.GET_USER_SUCCESS:
        return{
            ...state,
            isLoading:false,
            userData:action.payload,
            totalUser:action.payload.length
        }
        case Actions.DELETE_USER_SUCCESS:
            return{
                ...state,
                userData:state.userData.filter(user=>user.id !== action.payload),
                totalUser:state.totalUser-1
            }
        case Actions.SUBMIT_USER:
            return{
                ...state,
                ...findUser(state,action.payload)
            }
         
        default:
            return{
                ...state
            }
    }
}