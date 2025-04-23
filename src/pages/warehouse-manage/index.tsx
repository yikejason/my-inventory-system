import { rule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import Create from './components/create';

const WareHouseManageManage = () => {
  const [visible, setVisible] = useState(false);
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '商品名称',
      dataIndex: 'product_name',
      search: false,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      search: false,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      search: false,
    },
    {
      title: '商品图片',
      dataIndex: 'product_image',
      search: false,
    },
    {
      title: '操作时间',
      dataIndex: 'operation_time',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
    },
  ];

  const handleCreateWarehouse = () => {
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
          <Button type="primary" key="primary" onClick={handleCreateWarehouse}>
            <PlusOutlined /> 新增入库
          </Button>,
          <Button key="primary">
            <PlusOutlined /> 导出出库流水
          </Button>,
        ]}
        request={rule}
        columns={columns}
      />
      {/* create a add product drawer */}
      <Create title="新增入库" visible={visible} onClose={handleClose} />
    </PageContainer>
  );
};

export default WareHouseManageManage;
