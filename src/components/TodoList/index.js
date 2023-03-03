import React from 'react'
import Todo from '../Todo'

export default function TodoList() {
  return (
    <div className='mb-5  max-h-32' style={{overflow:'auto'}}>
        <Todo color={'red'}/>
        <Todo color={'green'}/>
        <Todo color={'gray'}/>
      
      
    </div>
  )
}
