import React from 'react'

const cls = 'opt-layout-header'
function LayoutHeader (props) {
  return <div className={`${cls}`}>{props.children}</div>
}

export default LayoutHeader
