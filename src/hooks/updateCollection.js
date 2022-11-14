import { React, useState } from 'react'
import { projectFirestore } from '../config/firebase'
import useCollection from '../hooks/useCollection'
export default function UpdateCollection(collection) {
	const { docs, error } = useCollection(collection)
	const [value, setValue] = useState('')
	const firestore = projectFirestore.collection(collection)
	const addTask = async doc => {
		await firestore.add(doc)
	}
	const deleteTask = async id => {
		await firestore.doc(id).delete()
	}

	const editTask = async id => {}
	return { addTask, deleteTask, editTask }
}
