import { CommonDrawer } from '@/components';
import { Col, Divider, Form, Input, Row } from 'antd';
interface CreateProps {
  title: string;
  visible: boolean;
  onClose: () => void;
}

const Create = (props: CreateProps) => {
  return (
    <CommonDrawer title={props.title} visible={props.visible} onClose={props.onClose}>
      <Form layout="horizontal" wrapperCol={{ span: 16 }} labelCol={{ span: 6 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="product_name"
              label="商品名称"
              rules={[{ required: true, message: '请输入商品名称' }]}
            >
              <Input placeholder="请输入商品名称" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="product_unit"
              label="商品单位"
              rules={[{ required: true, message: '请选择商品单位' }]}
            >
              <Input placeholder="请选择商品单位" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="product_category"
              label="商品分类"
              rules={[{ required: true, message: '请选择商品分类' }]}
            >
              <Input placeholder="请选择商品分类" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="product_size" label="商品规格">
              <Input placeholder="请输入商品规格" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="ru_price" label="入库价格">
              <Input placeholder="请输入入库价格" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="chu_price" label="出库价格">
              <Input placeholder="请输入出库价格" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="product_category" label="库存预警">
              <Input placeholder="请输入最低库存数量" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="product_category" label="商品备注">
              <Input placeholder="请输入备注" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="product_category" label="有效期">
              <Input placeholder="请输入备注" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </CommonDrawer>
  );
};

export default Create;
