import React from 'react'
import Sidebar from './Sidebar'

export default function Layout(props) {
  return (
    <>
    <Sidebar/>
    <main>{props.children}</main>
    </>
  )
}
