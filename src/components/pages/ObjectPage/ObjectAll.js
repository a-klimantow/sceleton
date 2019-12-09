import React from "react"
import { Link } from "react-router-dom"

export default ({ match }) => {
  return (
    <div>
      <h1>object all</h1>
      <ul>
        <li>
          <Link to={`${match.url}/di`}>object id</Link>
        </li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  )
}
