import React from 'react'
import { Layout } from 'template-react-lib'

const { LayoutMain, LayoutHeader, LayoutBody, LayoutSider, LayoutContent } = Layout
const App = () => {
  return (
    <LayoutMain>
      <LayoutHeader></LayoutHeader>
      <LayoutBody>
        <LayoutSider></LayoutSider>
        <LayoutContent></LayoutContent>
      </LayoutBody>
    </LayoutMain>
  )
}

export default App
