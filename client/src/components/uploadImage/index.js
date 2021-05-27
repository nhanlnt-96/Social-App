import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import props from "../../configs/uploadImageProps.config";

const UploadImage = () => {
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload images</Button>
    </Upload>
  )
}

export default UploadImage;