import React from "react"
import { Navigate } from "react-router-dom"
import {jwtDecode} from "jwt-decode"

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  if (token) {
    try {
      const decoded = jwtDecode(token)
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token") // Remove expired token
        return <Navigate to="/login" />
      }
      return children
    } catch (error) {
      localStorage.removeItem("token") // Remove invalid token
      return <Navigate to="/login" />
    }
  }
  return <Navigate to="/login" />
}

export default ProtectedRoute
