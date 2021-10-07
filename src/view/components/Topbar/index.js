import React from "react"
import Appbar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Topbar = () => {
  return (
    <Appbar position="static">
      <Toolbar>
        <Typography>Showroom</Typography>
      </Toolbar>
    </Appbar>
  )
}

export default Topbar