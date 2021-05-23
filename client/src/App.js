import React from 'react';
import RouterOutlet from './routes/RouterOutlet';

//import component
import { Navigation } from './components';

//import styles
import './scss/App.scss';
import 'antd/dist/antd.css';

//import layout antd
import { Layout } from 'antd';

const {Header, Footer, Sider, Content} = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Navigation/>
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            content
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
