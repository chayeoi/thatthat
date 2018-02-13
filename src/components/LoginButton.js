import React, { Component } from 'react'
import { Grid, Button, Icon, Segment } from 'semantic-ui-react'


export default class LoginButton extends Component {
  static defaultProps = {
    onFacebookLogin: () => {},
    onTwitterLogin: () => {},
    onGoogleLogin: () => {},
  }

  render() {
    const { onFacebookLogin, onTwitterLogin, onGoogleLogin } = this.props
    return (
      <Grid columns={1} centered>
        <Grid.Column>
          <Segment attached="top">
            <Button fluid color="facebook" onClick={onFacebookLogin}>
              <Icon name="facebook" /> Facebook
            </Button>
          </Segment>
          <Segment attached>
            <Button fluid color="twitter" onClick={onTwitterLogin}>
              <Icon name="twitter" /> Twitter
            </Button>
          </Segment>
          <Segment attached="bottom">
            <Button fluid color="google plus" onClick={onGoogleLogin}>
              <Icon name="google plus" /> Google Plus
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
