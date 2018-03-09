import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import { MAIN_COLOR, LIGHT_GRAY, DEEPER_GRAY } from 'constants/color'

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff !important;
  border-bottom: 2px solid ${LIGHT_GRAY};
`

const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto !important;
`

const TabBox = styled(Menu)`
  height: 40px;
  border: none !important;
`

const TabItem = styled(Menu.Item)`
  color: ${DEEPER_GRAY} !important;
  border: 0;
  &.active {
    color: ${MAIN_COLOR} !important;
    border-color: ${MAIN_COLOR} !important;
  }
`

export default class CategoryTab extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  handleClick = (e, { to }) => {
    this.setState({ activeItem: to })
  }

  render() {
    const { activeItem } = this.state
    const { categories } = this.props
    return (
      <Wrapper>
        <CenterBox>
          <TabBox pointing secondary widths={5}>
            {categories.map(category => (
              <TabItem
                key={category.name}
                name={category.name}
                active={activeItem === category.link.to}
                onClick={this.handleClick}
                {...category.link}
              />
            ))}
          </TabBox>
        </CenterBox>
      </Wrapper>
    )
  }
}
