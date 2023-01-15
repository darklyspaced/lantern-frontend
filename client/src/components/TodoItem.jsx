const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

// TODO: Finish template tag
export default function TodoItem({ todo, toggleCompleted }) {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div classname={style.row}>
                <input onChange={() => toggleCompleted(todo)} type="checkbox" checked=
                    {todo.completed ? "checked" : ''} />
                <p className={todo.completed ? style.textComplete : style.text}>{todo.task}</p>
            </div>
        </li>
    )
}

