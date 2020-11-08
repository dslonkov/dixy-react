import React from 'react'
import classes from './Main.module.scss'
import Test from './Test/Test'
import Form from './Form/Form'

export default function Main() {
  return (
    <div className={classes.Main}>
      <Test />
      <Form />
    </div>
  )
}