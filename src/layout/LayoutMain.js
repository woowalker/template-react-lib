import React from 'react'

const cls = 'opt-layout-main'
function LayoutMain (props) {
  return <div className={`${cls}`}>{props.children}</div>
}

export default LayoutMain
