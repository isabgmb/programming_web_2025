// Copying multiple levels of detail can be a pain:
let todos = [
    {text : "Buy milk", completed : true},
    {text : "Learn Mobx", completed : false},
]
function toggleTodo(todos, index) {
    return todos.map( (todo, i) => {
        // Keep the items that aren't changing
        if(i !== index) return todo;  
        // Return a new copied object for the item that is changing
        return { ...todo, completed : !todo.completed };
    });
}
// With Immer, you can "mutate" data inside a callback function,
// and it correctly applies updates immutably:
import produce from "immer";
function toggleTodo(todos, index) {
    return produce(todos, (draftTodos) => {
        const todo = draftTodos[index];
        todo.completed = !todo.completed // Safe "mutation"!
    })
}


// Updating this complex nested state is ugly and easy to break:
case "UPDATE_VALUE":
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.payload.someId]: {
          ...state.first.second[action.payload.someId],
          fourth: action.payload.someValue
        }
      }
    }
  }
// With Immer, it's just:
return produce(state, (draftState) => {
    const {someId, someValue} = action.payload;
    state.first.second[someId] = someValue;
})
