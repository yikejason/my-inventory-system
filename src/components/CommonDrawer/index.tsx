import { Button, Drawer, DrawerProps, Space, Spin } from 'antd';
import { FC, memo } from 'react';

interface DrawerChild extends DrawerProps {
  loading?: boolean;
  modalLoading?: boolean;
  visible?: boolean;
}

interface DefaultDrawerFooterProps {
  onSave?: () => void;
  onClose?: () => void;
  loading?: boolean;
}

const DefaultDrawerFooter: FC<DefaultDrawerFooterProps> = (props) => {
  return (
    <div className="content-flex-end">
      <Space>
        <Button type="primary" onClick={props.onSave} loading={props.loading}>
          保存
        </Button>
        <Button onClick={props.onClose} loading={props.loading}>
          关闭
        </Button>
      </Space>
    </div>
  );
};
const CommonDrawer: FC<DrawerChild> = (props) => {
  return (
    <Drawer
      {...props}
      open={props.visible}
      title={props.title}
      onClose={props.onClose}
      footer={props.footer || <DefaultDrawerFooter />}
      width={props.width || '50%'}
      destroyOnClose={true}
      maskClosable={false}
      loading={props.loading || false}
      closable={props.closable}
    >
      <Spin spinning={props.loading || false}>{props.children}</Spin>
    </Drawer>
  );
};

export default memo<FC<DrawerChild>>(CommonDrawer);
