import React from "react"
import { Link } from "react-router-dom"

export default ({ match, location }) => {
  const { hash } = location
  return (
    <div>
      <h1>devices current</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={{ hash: "info" }}>info</Link>
        <Link to={{ hash: "node" }}>node</Link>
        <Link to={{ hash: "devices" }}>devices</Link>
      </div>
      <div>{hash === "#info" && <div>info devices</div>}</div>
      <div>{hash === "#node" && <div>node devices</div>}</div>
      <div>
        {hash === "#devices" && (
          <div>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>
                devices
                <Link to={`/objects/id/device/id#info`}>to id device</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
