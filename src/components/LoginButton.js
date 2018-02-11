import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'


export default class LoginButton extends Component {
  render() {
    return (
      <Grid centered columns={4} divided>
        <Grid.Column>
          <Button fluid color="facebook">
            <Icon name="facebook" /> Facebook
          </Button>
          <Button fluid color="twitter">
            <Icon name="twitter" /> Twitter
          </Button>
          <Button fluid color="google plus">
            <Icon name="google plus" /> Google Plus
          </Button>
        </Grid.Column>
      </Grid>
    )
  }
}
