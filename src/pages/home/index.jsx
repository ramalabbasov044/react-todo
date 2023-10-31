import React, { useRef, useState } from 'react'
import styles from './style.module.css'
import TodoItem from '../../components/todoItem/index'
import TodoNecesarry from '../../components/todoNecesarry/index'

let initialData = {
    todo: ""
}

const Home = () => {
    const [todoValue,setTodoValue] = useState(initialData)
    const [data,setData] = useState([])
    const [importantTask,setImportantTask] = useState([])
    const todoInput = useRef()

    let handleChange = (param) => {
        let paramValue = param.target.value
        setTodoValue((lastValue) => ({...lastValue,todo:paramValue}))
    }

    let handleSubmit = () => {
        let inputLength = todoInput.current.value.length;
        if (inputLength > 0) {
            if (!data.some(item => item.todo === todoValue.todo)) {
                setData((lastData) => [...lastData, todoValue]);
                setTodoValue(initialData);
            } else {
                alert("Datalar eynidir Yeni bir sey elave et");
            }
        } else {
            alert("Input Bosdu nese yaz");
        }
    }
    

    let deleteData = (index) => {
        setData(data.filter((item, i) => i !== index))
    }

    let addImportantData = (index) => {
        let newData = data.filter((item, i) => i === index);
        
        if (!importantTask.some(item => JSON.stringify(item) === JSON.stringify(newData))) {
            setImportantTask((lastData) => [...lastData, newData]);
        }else {
            alert("Eyni datani 2 ci sefer elave ede bilmersen");
        }
    }
    
    

    return (
        <div className={styles.todoFormBody}>
            <div className={styles.todoFormHead}>
                <h2 className={styles.todoHeadTitle}>
                    Todo App
                </h2>

            </div>

            <div className={styles.todoForm}>
                <input ref={todoInput} className={styles.todoInput} placeholder='Enter Todo ...' type="text" value={todoValue.todo} onChange={handleChange} />
                <button className={styles.todoButton} onClick={handleSubmit}>Add Todo</button>
            </div>

            {/* data */}

                {data.length > 0 ? <h1 className={styles.todoTitle}>Todos</h1> : null}
                <TodoItem data={data}  deleteData={deleteData} addImportantData={addImportantData} />

            {/* TodoNecesarry */}

                {importantTask.length > 0 ? <h1 className={styles.todoTitle}>Important Tasks</h1> : null}

                <TodoNecesarry importantTask={importantTask} />
        </div>
    )
}

export default Home