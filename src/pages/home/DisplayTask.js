import { React, useState, useEffect, useRef } from 'react'
import styles from './DisplayTask.module.css'
import updateCollection from '../../hooks/updateCollection'
import editBtnImg from '../../assets/edit.svg'
import deleteBtn from '../../assets/delete.svg'
export default function DisplayTask({ docs }) {
	const { deleteTask, editTask } = updateCollection('tasks')

	return (
		<div className={styles.tasks}>
			{docs.map(doc => {
				return (
					<div className={styles['task-wrap']} key={doc.id}>
						<div className={styles['input-wrap']}>
							<input className={styles['task-name']} type='text' value={doc.task} readOnly />
							<input className={styles['task-date']} type='date' value={doc.date} readOnly />
						</div>
						<div className={styles['button-wrap']}>
							<button className={styles['task-button']}>
								<img src={editBtnImg} alt='edit button' onClick={e => editTask(doc.id)} />
							</button>

							<button className={styles['task-button']}>
								<img onClick={() => deleteTask(doc.id)} src={deleteBtn} alt='delete button' />
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
