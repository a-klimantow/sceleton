import React from "react"
import { Route, Switch } from "react-router-dom"

import ObjectAll from "./ObjectAll"
import ObjectCurrent from "./ObjectCurrent"
import ObjectCurrentDevice from "./ObjectCurrentDevice"

export default () => (
  <>
    <Route path="/objects" component={ObjectAll} exact />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "8fr 4fr"
      }}
    >
      <Switch>
        <Route
          path="/objects/:id/device/:idDevice"
          component={ObjectCurrentDevice}
        />
        <Route path="/objects/:id" component={ObjectCurrent} exact />
      </Switch>
      <Route path="/objects/:id" render={() => <div>events</div>} />
    </div>
  </>
)
