import React from "react"
import { Link } from "react-router-dom"

export default ({ match, location }) => {
  const { hash } = location
  return (
    <div>
      <h1>object current</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={{ hash: "info" }}>info</Link>
        <Link to={{ hash: "devices" }}>devices</Link>
      </div>
      <div>{hash === "#info" && <div>info object</div>}</div>
      <div>
        {hash === "#devices" && (
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>
                devices
                <Link to={`/objects/id/device/id#info`}>to id devise</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
