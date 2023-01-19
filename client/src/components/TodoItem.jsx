import { AiFillDelete } from "react-icons/ai";
const style = {
    li: `h-14 border mt-[20px] text-white border-gray-300 rounded-md w-[95%] m-auto`,
    liComplete: `h-14 border mt-[20px] text-gray-300 border-gray-600 rounded-md w-[95%] m-auto`,
    row: `m-5 flex`,
    text: `float-left ml-2 cursor-pointer mt-[14px]`,
    textComplete: `float-left ml-2 cursor-pointer mt-[14px] line-through`,
    button: `cursor-pointer flex items-center`,
    input: `m-3 appearance-none form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-300 ease-in align-top bg-contain float-left cursor-pointer relative left-2 top-[0.24rem]`
}

// TODO: Finish template tag
export default function TodoItem({ todo, toggleCompleted, deleteTodo }) {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className="flex box-border">
                <input onChange={() => toggleCompleted(todo)} type="checkbox" checked=
                    {todo.completed ? "checked" : ''} className={style.input} />
                <p onClick={() => toggleCompleted(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.task}</p>
                <div onClick={() => deleteTodo(todo.id)} className="relative ml-auto mr-5 mt-[0.83rem]">
                    <AiFillDelete size='1.5rem' className="float-right"/>
                </div>
            </div>
        </li >
    )
}
