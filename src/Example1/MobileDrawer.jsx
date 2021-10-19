import React from 'react'
import PropTypes from 'prop-types'
import { name } from 'faker'
import { Drawer, makeStyles, List, Box } from '@material-ui/core'
import Node from './Node'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const ResponsiveDrawer = ({ open }) => {
  const classes = useStyles()
  return (
    <Drawer type="temporary" open={open} className={classes.root}>
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
