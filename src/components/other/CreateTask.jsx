import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    
    const [newTask, setNewTask] = useState({});
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        setNewTask({taskTitle, description, date, category, accepted:false, newTask:true,completed:false,failed:false,});

        const data = JSON.parse(localStorage.getItem("employees"));

        data.forEach((elem) => {
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask);
                elem.taskCounts.newTask++
                console.log(elem.tasks, " ", elem.taskCounts.newTask)
                // setUserData(data);
            }          
        })

        setTaskTitle("");
        setDescription("");
        setDate("");
        setAssignTo("");
        setCategory("");
    }
    return (
        <div className="p-6 bg-gray-800/80 rounded-lg shadow-lg border border-emerald-500/30 mt-6">
            <h2 className="text-xl font-semibold text-emerald-400 mb-4">New Task</h2>

            <form onSubmit={(e) => {
                submitHandler(e);
            }} className="flex flex-wrap">
                <div className="w-1/2 pr-6">
                    <div className="mb-4">
                        <label className="text-sm block mb-1">Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(elem) => {
                                setTaskTitle(elem.target.value);
                            }}
                            className="w-full text-sm py-2 px-3 rounded bg-transparent border border-emerald-500/50 focus:border-emerald-400 focus:outline-none transition-colors"
                            type="text"
                            placeholder="Enter task title"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-emerald-300 block mb-1">Date</label>
                        <input
                            value={date}
                            onChange={(elem) => {
                                setDate(elem.target.value)
                            }}
                            className="w-full text-sm py-2 px-3 rounded bg-transparent border border-emerald-500/50 focus:border-emerald-400 focus:outline-none transition-colors"
                            type="date"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-emerald-300 block mb-1">Assign To</label>
                        <input
                            value={assignTo}
                            onChange={(elem) => {
                                setAssignTo(elem.target.value)
                            }}
                            className="w-full text-sm py-2 px-3 rounded bg-transparent border border-emerald-500/50 focus:border-emerald-400 focus:outline-none transition-colors"
                            type="text"
                            placeholder="Enter assignee name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-emerald-300 block mb-1">Category</label>
                        <input
                            value={category}
                            onChange={(elem) => {
                                setCategory(elem.target.value)
                            }}
                            className="w-full text-sm py-2 px-3 rounded bg-transparent border border-emerald-500/50 focus:border-emerald-400 focus:outline-none transition-colors"
                            type="text"
                            placeholder="Enter category"
                        />
                    </div>
                </div>

                <div className="w-1/2 pl-2">
                    <div className="mb-4">
                        <label className="text-sm text-emerald-300 block mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(elem) => {
                                setDescription(elem.target.value);
                            }}
                            className="w-full h-56 text-sm py-2 px-3 rounded bg-transparent border border-emerald-500/50 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-6 rounded-md transition-colors duration-200 shadow-lg flex items-center"
                            type="submit"
                        >
                            <span className="mr-2">Create Task</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14M5 12h14"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask