import { useState } from 'react'
import styles from './style.module.css'

const TodoItem = ({ deleteData , addImportantData , data}) => {
    let deleteItem = (index) => {
      deleteData(index)
    }  

    let addToImpItem = (index) => {
      addImportantData(index)
    }

  return (
    <div className={styles.container}>
            <div className={styles.itemBody}>
                {
                    data.map((item,index) => 
                        <div className={styles.itemActive} key={index}>
                            {
                                item.todo
                            }

                            <div className={styles.itemRight}>
                              <button onClick={() => deleteItem(index)} className={styles.delButton}>
                                  Del
                              </button>
                              <button onClick={() => addToImpItem(index)} className={styles.delButton}>
                                  Add Imp
                              </button>
                            </div>
                        </div>
                    )
                }
            </div>
    </div>
  )
}

export default TodoItem