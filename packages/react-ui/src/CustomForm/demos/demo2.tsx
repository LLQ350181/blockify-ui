import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

const App: React.FC = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
    initialValues={{
      users: [
        {
          first: 'John',
          last: '1',
        },
        {
          first: 'John',
          last: '2',
        },
      ],
    }}
  >
    <Form.Item name="age">
      <Input />
    </Form.Item>
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{ display: 'flex', marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item noStyle dependencies={[['age']]}>
                {({ getFieldValue }) => {
                  return getFieldValue('age') ? (
                    <Form.Item
                      label="first name"
                      {...restField}
                      name={[name, 'first']}
                      rules={[
                        { required: true, message: 'Missing first name' },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
              <Form.Item noStyle dependencies={[['users', name, 'first']]}>
                {({ getFieldValue }) => {
                  return getFieldValue('users')?.[name]?.first ? (
                    <Form.Item
                      {...restField}
                      name={[name, 'last']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
