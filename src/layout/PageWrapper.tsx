import { SideBar, Navbar } from '../components'
import { useState } from 'react';

export function PageWrapper(props) {
  const { children } = props
  const [extendSidebar, setExtendSidebar] = useState();
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}
