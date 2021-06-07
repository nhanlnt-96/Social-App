import React from 'react';
import Navigation from "./components/navigation";
import LayoutModule from "./components/layoutModule";

//import styles
import './scss/App.scss';
import './scss/rwd.scss';
import 'antd/dist/antd.css';

//import layout antd
import { Layout } from 'antd';

const {Footer} = Layout;

function  App() {
  return (
    <Layout className="layout">
      <Navigation />
      <LayoutModule />
      <Footer style={{textAlign: 'center'}}>Social ©2021 Created by Nhan LNT</Footer>
    </Layout>
  );
}

export default App;
