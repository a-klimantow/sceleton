import React, { useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

export default ({ location }) => {
  const { pathname, hash } = location
  if (!location.hash) return <Redirect to={`${pathname}#executor`} />

  useEffect(() => {
    if (hash) {
      console.log(hash)
    }
  }, [hash])
  try {
    return (
      <div>
        <h1>Title</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={{ hash: "executor" }}>executor</Link>
          <Link to={{ hash: "observer" }}>observer</Link>
          <Link to={{ hash: "archive" }}>archive</Link>
        </div>
        <div>
          {hash === "#executor" && (
            <div>
              executor <Link to={`tasks/id`}>to id</Link>
            </div>
          )}
        </div>
        <div>{hash === "#observer" && <div>observer</div>}</div>
        <div>{hash === "#archive" && <div>archive</div>}</div>
      </div>
    )
  } catch (error) {
    console.log(error)
    return <div>error</div>
  }
}
