import { rule } from '@/services/ant-design-pro/api';
import { CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import Create from './components/create';

const ProductManage = () => {
  const [visible, setVisible] = useState(false);
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '商品名称',
      dataIndex: 'product_name',
    },
    {
      title: '所属分类',
      dataIndex: 'category',
      search: false,
    },
    {
      title: '商品单位',
      dataIndex: 'product_image',
      search: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
    },
  ];

  const handleCreateProduct = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle="出库商品列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={handleCreateProduct}>
            <PlusOutlined /> 新增商品
          </Button>,
          <Button type="primary" key="primary" danger>
            <CloudUploadOutlined /> 批量新增
          </Button>,
          <Button key="primary">
            <CloudDownloadOutlined /> 导出商品
          </Button>,
        ]}
        request={rule}
        columns={columns}
      />
      {/* create a add product drawer */}
      <Create title="新增商品" visible={visible} onClose={handleClose} />
    </PageContainer>
  );
};

export default ProductManage;
