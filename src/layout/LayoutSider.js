import React from 'react'

const cls = 'opt-layout-sider'
function LayoutSider (props) {
  return <div className={`${cls}`}>{props.children}</div>
}

export default LayoutSider
