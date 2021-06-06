import React from 'react';
import IconPNF from '../../assets/page-not-found.png';
import { Button } from 'antd';

import './PageNotFound.scss'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img src={IconPNF} alt="page-not-found" />
      <h3>OOPS !!</h3>
      <h2>PAGE NOT FOUND</h2>
      <Button type="primary" htmlType="submit"><Link to="/">Come back home page</Link></Button>
    </div>
  )
}

export default PageNotFound;