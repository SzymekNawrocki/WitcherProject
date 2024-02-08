'use client'
import { useState } from 'react';

const Task = ({ task, onDelete, onComplete }: { task: { id: number; name: string; type: string; priority: string; deadline: string; notes: string; completed: boolean }; onDelete: () => void; onComplete: () => void }) => {
  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className={`flex justify-between items-center p-4 border-b ${task.completed ? 'bg-gray-200' : ''}`}>
      <div className="flex flex-col">
        <span className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
        <span className="text-sm text-gray-500">{task.type} - {task.priority}</span>
        {task.notes && showNotes && (
          <div className="text-sm mt-2">
            <p>{task.notes}</p>
          </div>
        )}
        {task.notes && (
          <button onClick={toggleNotes} className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none">
            {showNotes ? "Ukryj notatki" : "Pokaż notatki"}
          </button>
        )}
      </div>
      <div className="flex space-x-2">
        <button onClick={onComplete} className={`text-green-500 hover:text-green-700 ${task.completed ? 'cursor-default' : ''}`}>
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <button onClick={onDelete} className='text-red-500 hover:text-red-700'>
          Delete
        </button>
      </div>
    </div>
  );
};

const TaskList = ({ tasks, onDelete, onComplete }: { tasks: { id: number; name: string; type: string; priority: string; deadline: string; notes: string; completed: boolean }[]; onDelete: (id: number) => void; onComplete: (id: number) => void }) => {
  return (
    <div className='my-4'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDelete(task.id)} onComplete={() => onComplete(task.id)} />
      ))}
    </div>
  );
};

export default function Home() {
  const [mainTasks, setMainTasks] = useState<{ id: number; name: string; type: string; priority: string; deadline: string; notes: string; completed: boolean }[]>([]);
  const [sideTasks, setSideTasks] = useState<{ id: number; name: string; type: string; priority: string; deadline: string; notes: string; completed: boolean }[]>([]);
  const [contractTasks, setContractTasks] = useState<{ id: number; name: string; type: string; priority: string; deadline: string; notes: string; completed: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('main');
  const [selectedPriority, setSelectedPriority] = useState<string>('normal');
  const [selectedDeadline, setSelectedDeadline] = useState<string>('');
  const [inputNotes, setInputNotes] = useState<string>('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: mainTasks.length + 1,
        name: inputValue,
        type: selectedType,
        priority: selectedPriority,
        deadline: selectedDeadline,
        notes: inputNotes,
        completed: false,
      };
      if (selectedType === 'main') {
        setMainTasks([...mainTasks, newTask]);
      } else if (selectedType === 'side') {
        setSideTasks([...sideTasks, newTask]);
      } else if (selectedType === 'contract') {
        setContractTasks([...contractTasks, newTask]);
      }
      setInputValue('');
      setSelectedPriority('normal');
      setSelectedDeadline('');
      setInputNotes('');
    }
  };

  const handleDeleteTask = (id: number) => {
    setMainTasks(mainTasks.filter((task) => task.id !== id));
    setSideTasks(sideTasks.filter((task) => task.id !== id));
    setContractTasks(contractTasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id: number) => {
    setMainTasks(mainTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
    setSideTasks(sideTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
    setContractTasks(contractTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white font-serif'>
      <div className='bg-gray-800 p-8 rounded shadow-md'>
        <h1 className='text-3xl font-bold mb-4'>Dziennik Zadań</h1>
        <div className='flex flex-col space-y-4'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400'
            placeholder='Dodaj zadanie...'
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='p-2 border border-gray-600 rounded bg-gray-700 text-white'
          >
            <option value="main">Główne</option>
            <option value="side">Poboczne</option>
            <option value="contract">Kontrakty</option>
          </select>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className='p-2 border border-gray-600 rounded bg-gray-700 text-white'
          >
            <option value="normal">Normalny</option>
            <option value="high">Wysoki</option>
            <option value="low">Niski</option>
          </select>
          <input
            type='date'
            value={selectedDeadline}
            onChange={(e) => setSelectedDeadline(e.target.value)}
            className='p-2 border border-gray-600 rounded bg-gray-700 text-white'
          />
          <textarea
            value={inputNotes}
            onChange={(e) => setInputNotes(e.target.value)}
            className='p-2 border border-gray-600 rounded bg-gray-700 text-white'
            placeholder='Notatki...'
          />
          <button onClick={handleAddTask} className='p-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700'>
            Dodaj Zadanie
          </button>
        </div>
      </div>
      <div className="flex justify-center items-start mt-8 space-x-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Zadania Główne</h2>
          <TaskList tasks={mainTasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Zadania Poboczne</h2>
          <TaskList tasks={sideTasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Kontrakty</h2>
          <TaskList tasks={contractTasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
        </div>
      </div>
    </div>
  );
}