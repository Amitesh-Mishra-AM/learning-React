
import './App.css'
import AddTodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  //  we have wrap in provider and also store ko import karna hai we can do this here also or in Main.jsx
  return (
    <>
    <div className='bg-red-600 text-white'> working fine</div>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
