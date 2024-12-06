import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  CCloseButton,
  CNavItem,
  CNavLink,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"

import { AppSidebarNav } from "./AppSidebarNav"

import { logo } from "src/assets/brand/logo"
import { sygnet } from "src/assets/brand/sygnet"

// sidebar nav config
import navigation from "../_nav"
import { cilAccountLogout } from "@coreui/icons"
import { useNavigate } from "react-router-dom"

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate=useNavigate()

  return (
    <CSidebar
      className="border-end"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top">
        <CSidebarNav>
          <CNavItem href="">
            <CNavLink onClick={() => {
              localStorage.removeItem("token");
            navigate("/login")}}>
              <CIcon customClassName="nav-icon" icon={cilAccountLogout} />
              Logout
            </CNavLink>
          </CNavItem>
        </CSidebarNav>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
