import React from 'react'
import PropTypes from 'prop-types'
import { name } from 'faker'
import { Drawer, makeStyles, List, Box, Fab } from '@material-ui/core'
import { CloseRounded as CloseRoundedIcon } from '@material-ui/icons'
import Node from './Node'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const ResponsiveDrawer = ({ open, setOpen }) => {
  const classes = useStyles()

  return (
    <Drawer type="temporary" open={open} style={{ width: '100%' }}>
      <Box display="flex" justifyContent="end" onClick={() => setOpen(false)}>
        <Fab size="small" color="secondary">
          <CloseRoundedIcon />
        </Fab>
      </Box>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <Box p={1} key={index}>
            <Node
              text={name.jobTitle()}
              completed={index % 2 === 0}
              open={open}
            />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}

export default ResponsiveDrawer
