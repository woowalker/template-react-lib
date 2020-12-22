import React from 'react'

const cls = 'opt-layout-body'
function LayoutBody (props) {
  return <div className={`${cls}`}>{props.children}</div>
}

export default LayoutBody
