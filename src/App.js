import React, { Component } from 'react';
import styled from '@emotion/styled';

const constants = {
  animationDuration: '0.2s',
  sidebarWidth: '200px',
  sidebarMenuWidth: '30px',
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-right: ${({ menuOpen }) => menuOpen ? constants.sidebarWidth : constants.sidebarMenuWidth};
  background: #ccc;

  transition: padding-right ${constants.animationDuration} ease-in-out;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid red;
`;

const Sidebar = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: ${({ open }) => open ? constants.sidebarWidth : constants.sidebarMenuWidth};
  height: 100%;
  overflow-y: auto;
  background-color: #999;
  padding-left: ${constants.sidebarMenuWidth};
  transition: width ${constants.animationDuration} ease-in-out;
`;

const SidebarMenu = styled(Sidebar)`
  width: ${constants.sidebarMenuWidth};
  background-color: #555;
  padding-left: 0px;
  left: 0px;
  right: inherit;
`;

const SidebarContent = styled(ContentContainer)`
  background-color: transparent;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: window.innerWidth < 768 ? false : true,
    };
  }

  toggleSidebar = () => {
    console.log('toggling sidebar');
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  }

  render() {
    const { sidebarOpen } = this.state;
    return (
      <Container menuOpen={sidebarOpen}>
        <ContentContainer />
        <Sidebar open={sidebarOpen}>
          <SidebarMenu>
            <span
              onClick={this.toggleSidebar}
            >
              to
            </span>
          </SidebarMenu>
          <SidebarContent>
            Hello from the sidebar!
          </SidebarContent>
        </Sidebar>
      </Container>
    );
  }
}

export default App;
