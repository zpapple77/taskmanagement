import React, { useState } from 'react'
import './index.css'
import List from './list'
import Item from './item'
import { initData } from './mockData/initData'
export default function Home() {
  const [tasks, setTasks] = useState(initData)

  var tasksState = {
    pts: [],
    learning: [],
    complete: [],
  }

  tasks.forEach((tar) => {
    tasksState[tar.category].push(
      <Item
        key={tar.name}
        onDragStart={(e) => dragStart(e, tar.name)}
        className="draggable"
      >
        {tar.name}
      </Item>
    )
  })
  const dragStart = (e, id) => {
    console.log('dragstart:', id)
    e.dataTransfer.setData('id', id)
  }

  const drop = (e, category) => {
    let id = e.dataTransfer.getData('id')
    let tasksFiltered = tasks.filter((task) => {
      if (task.name === id) {
        task.category = category
      }
      return task
    })
    setTasks(tasksFiltered)
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container-drag">
      <List
        category="pts"
        drop={(e) => drop(e, 'pts')}
        dragOver={(e) => dragOver(e)}
      >
        <span className="task-header">Prepare to study</span>
        {tasksState.pts}
      </List>
      <List
        category="learning"
        drop={(e) => drop(e, 'learning')}
        dragOver={(e) => dragOver(e)}
      >
        <span className="task-header">Learning...</span>
        {tasksState.learning}
      </List>
      <List
        category="complete"
        drop={(e) => drop(e, 'complete')}
        dragOver={(e) => dragOver(e)}
      >
        <span className="task-header">Complete</span>
        {tasksState.complete}
      </List>
    </div>
  )
}
