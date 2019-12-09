import React from "react"
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom"
import { ObjectPage, TaskPage, NotFound } from "./pages"

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => "logon"} />
      <Layout>
        <Switch>
          <Route path="/" render={() => <Redirect to="/tasks" />} exact />
          <Route path="/tasks" component={TaskPage} />
          <Route path="/objects" component={ObjectPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
)

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        alignItems: "start"
      }}
    >
      <nav style={{ display: "grid" }}>
        <NavLink to="/tasks">tasks</NavLink>
        <NavLink to="/objects">objects</NavLink>
        <NavLink to="/settings">settings</NavLink>
        <NavLink to="/login">exit</NavLink>
      </nav>
      {children}
    </div>
  )
}
