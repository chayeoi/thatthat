import React, { Component } from 'react'
import { Grid, Button, Icon, Segment } from 'semantic-ui-react'


export default class LoginButton extends Component {
  render() {
    return (
      <Grid columns={1} centered>
        <Grid.Column>
          <Segment attached="top">
            <Button fluid color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
          </Segment>
          <Segment attached>
            <Button fluid color="twitter">
              <Icon name="twitter" /> Twitter
            </Button>
          </Segment>
          <Segment attached="bottom">
            <Button fluid color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
