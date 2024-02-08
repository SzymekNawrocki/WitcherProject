'use client'
import { useState } from 'react'

const Task = ({ task, onDelete }: { task: string; onDelete: () => void }) => {
	return (
		<div className='flex justify-between items-center p-4 border-b'>
			<span className='text-lg'>{task}</span>
			<button onClick={onDelete} className='text-red-500 hover:text-red-700'>
				Delete
			</button>
		</div>
	)
}

const TodoList = ({ tasks, onDelete }: { tasks: string[]; onDelete: (index: number) => void }) => {
	return (
		<div className='my-4'>
			{tasks.map((task, index) => (
				<Task key={index} task={task} onDelete={() => onDelete(index)} />
			))}
		</div>
	)
}

export default function Home() {
	const [tasks, setTasks] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')

	const handleAddTask = () => {
		if (inputValue.trim() !== '') {
			setTasks([...tasks, inputValue])
			setInputValue('')
		}
	}

	const handleDeleteTask = (index: number) => {
		setTasks(tasks.filter((_, i) => i !== index))
	}

	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md'>
				<h1 className='text-3xl font-bold mb-4'>ToDo List</h1>
				<div className='flex space-x-2 mb-4'>
					<input
						type='text'
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						className='p-2 border border-gray-300 rounded w-full'
						placeholder='Enter task...'
					/>
					<button onClick={handleAddTask} className='p-2 bg-blue-500 text-white font-semibold rounded'>
						Add Task
					</button>
				</div>
				<TodoList tasks={tasks} onDelete={handleDeleteTask} />
			</div>
		</div>
	)
}
