import React from 'react';
// import RouterOutlet from './routes/RouterOutlet';

//import component
import { Navigation } from './components';
import { FeedCard } from './components/feedCard';

//import styles
import './scss/App.scss';
import './scss/rwd.scss';
import 'antd/dist/antd.css';

//import layout antd
import { Layout } from 'antd';

const {Header, Footer, Content} = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
        <Navigation/>
      </Header>
      <Content className="site-layout content" style={{padding: '0 50px', marginTop: 64}}>
        <div className='feed-container' style={{padding: 24, minHeight: 380}}>
          <FeedCard/>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Social ©2021 Created by Nhan LNT</Footer>
    </Layout>
  );
}

export default App;
