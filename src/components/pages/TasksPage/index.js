import React from "react"
import { Route, Redirect } from "react-router-dom"

import TasksAll from "./TasksAll"
import TasksCurrent from "./TasksCurrent"

export default () => {
  return (
    <>
      <Route path="/tasks" component={TasksAll} exact />
      <Route path="/tasks/:id" component={TasksCurrent} />
    </>
  )
}
