import React from 'react'

const cls = 'opt-layout-content'
function LayoutContent (props) {
  return <div className={`${cls}`}>{props.children}</div>
}

export default LayoutContent
