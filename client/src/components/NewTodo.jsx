import React, { useState } from "react"
import { db } from "../firebase"
import { useAuth } from "../contexts/AuthContext"
import { collection, addDoc } from "firebase/firestore"

export default function NewTodo() {
    const [greenButton, setGreenButton] = useState(false);
    const [input, setInput] = useState("");
    const { currentUser } = useAuth();

    const handleChange = e => {
        setInput(e.target.value);
        if (input.length > 1) {
            setGreenButton(true)
        } else {
            setGreenButton(false)
        }
    }


    const handleSubmit = async e => {
        e.preventDefault(e);
        if (greenButton) {
            await(addDoc(collection(db, 'todos'), {
                completed: false,
                task: `${input}`,
                userID: currentUser.uid,
            }))

        }
    }

    const style = {
        disabled: `float-left bg-gray-600 h-14 w-[78px] ml-[10px] mt-[20px] rounded-lg`,
        enabled: `float-left bg-green-600 h-14 w-[78px] ml-[10px] mt-[20px] rounded-lg`,
    }

    return (
        <form onSubmit={handleSubmit} className="text-white">
            <input onChange={handleChange} type="text" placeholder="Add a new task" className="pl-5 float-left text-[18px] text-white box-sizing bg-[#0D1117] h-14 ml-[44px] border mt-[20px] text-gray-600 border-gray-700 rounded-md w-[90%] text-[1.2em]" />
            <button type="submit" className={greenButton ? style.enabled : style.disabled}> Add </button>
        </form>

    )

}
