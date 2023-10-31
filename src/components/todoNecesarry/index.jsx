import React from 'react'
import styles from './style.module.css'

const NecesarryItem = ({importantTask}) => {
    console.log(importantTask);
  return (
    <div>
        {
            importantTask.map((item,i) => 
                <div className={styles.itemActive} key={i}>
                    {
                        item[0].todo
                    }
                </div>
            )
        }
    </div>
  )
}

export default NecesarryItem