import React, { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-right: 200px;
  background: #ccc;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid red;
`;

const SideBar = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 200px;
  height: 100%;
  overflow-y: auto;
  background-color: #999;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <ContentContainer />
        <SideBar />
      </Container>
    );
  }
}

export default App;
