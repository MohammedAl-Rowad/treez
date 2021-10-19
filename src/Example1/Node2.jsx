import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { name } from 'faker'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { CheckRounded as CheckRoundedIcon } from '@material-ui/icons'
import Node3 from './Node3'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 240,
    cursor: 'pointer',
  },
  header: {
    whiteSpace: 'pre-wrap',
    padding: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: '#097e80',
    backgroundColor: ({ completed }) => (completed ? '#097e80' : 'inherit'),
    width: 30,
    height: 30,
    border: ({ completed }) =>
      completed ? '#097e80 solid 2px' : '#097e80 dashed 2px',
  },
}))

export default function RecipeReviewCard({ text, open, completed }) {
  const classes = useStyles({ completed })
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = (e) => {
    if (open) {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
      setExpanded(!expanded)
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        onClick={handleExpandClick}
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {completed ? <CheckRoundedIcon /> : ''}
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={text}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <Node3
              key={index}
              open={open}
              text={name.jobTitle()}
              completed={index % 2 === 0}
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  )
}
