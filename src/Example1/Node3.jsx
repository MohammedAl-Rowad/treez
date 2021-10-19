import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { CheckRounded as CheckRoundedIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 240,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    whiteSpace: 'pre-wrap',
    padding: 10,
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
  return (
    <Card
      className={classes.root}
      onClick={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
      }}
    >
      <CardHeader
        onClick={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
        }}
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {completed ? <CheckRoundedIcon /> : ''}
          </Avatar>
        }
        title={text}
      />
    </Card>
  )
}
