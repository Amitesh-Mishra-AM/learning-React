import { createSlice, nanoid } from "@reduxjs/toolkit";

// how our initial state will look it will be an array or an object depends on you
const initialState={
    todos:[{id:1,
        text:"Hello Word"
        // more values can come here
    }]
}

export const todoSlice=createSlice({
    name:'Todo', // name can be anything , this wil be shown in chrome at extension
    initialState, // declared above
    reducers:{
        // will contain properties aand function
        // will always have two params State and action, 
        // state will give all the values in initial state
        // action will provide us the value
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload 
                // payload will contain everything even here we had tow rite 
                // payload.text to get the text but since we have alsready 
                // named the object as text: so payload will directly give 
                // payload.text value only    
            }
            state.todos.push(todo);
            // array banaya hai isliye push kar rhe hain
        },
        removeTodo:(state,action)=>{
            // state will have current state 
            // Action will have jo bhi data pass ho rh uska value
            state.todos=state.todos.filter(
                (todo)=> todo.id !== action.payload
                // idhr bhi automatically id compare kar lega
                // no need ti put .id after payload.
                )
        }
    }
})

// export all the functionality individually
export const {addTodo,removeTodo}=todoSlice.actions;
// ab store ko batana hai reducesrs ke baare mein
export default todoSlice.reducer