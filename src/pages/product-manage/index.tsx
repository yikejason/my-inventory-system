import { rule } from '@/services/ant-design-pro/api';
import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';

const ProductManage = () => {
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
          <Button type="primary" key="primary">
            <PlusOutlined /> 新增商品
          </Button>,
          <Button type="primary" key="primary">
            <CloudUploadOutlined /> 批量新增
          </Button>,
        ]}
        request={rule}
        columns={columns}
      />
    </PageContainer>
  );
};

export default ProductManage;
