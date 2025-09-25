import { Col, Form, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect, useImperativeHandle, useState } from 'react';
const defaultFromProps = {
  labelAlign: 'left',
  labelWrap: true,
  layout: 'horizontal',
};
const defaultRowProps = {
  align: 'middle',
  gutter: 8,
};
const defaultColProps = {
  span: 24,
};
const CustomForm: React.FC<any> = (props) => {
  const {
    schema = [],
    model,
    cRef,
    customMapper,
    rowProps,
    colProps,
    formProps,
  } = props;
  const [form] = useForm();
  const { getFieldsValue, validateFields, setFieldsValue, resetFields } = form;
  useImperativeHandle(cRef, () => ({
    getFieldsValue,
    setFieldsValue,
    validateFields,
    resetFields,
  }));
  const [mapper, setMapper] = useState<any>({});
  useEffect(() => {
    setFieldsValue(model);
  }, [model]);
  useEffect(() => {
    if (schema?.length <= 0) {
      return;
    }
  }, [schema]);
  useEffect(() => {
    setMapper(customMapper);
  }, []);
  const evalExpression = (expression: string | undefined) => {
    try {
      const fn = new Function(
        'data',
        `try{return !!(${expression});}catch(error){console.log(error);return false;}`,
      );
      const formValue = getFieldsValue(true);
      return fn.call(formValue, formValue);
    } catch (error) {
      console.log(error, '解析错误', expression);
      return false;
    }
  };
  const CustomFormItem = schema.map((item: any, index: any) => {
    let { fieldProps, formItemProps, customProps } = item;
    let { type, visibleOn, disabledOn } = customProps || {};
    let { dependencies, name } = formItemProps || {};
    const Field = mapper[type];
    const formItem = () => {
      return (
        <Col {...defaultColProps} {...colProps}>
          <Form.Item key={`${name}${index.toString()}`} {...formItemProps}>
            {Field ? (
              <Field
                form={form}
                disabled={disabledOn && evalExpression(disabledOn)}
                {...fieldProps}
              />
            ) : null}
          </Form.Item>
        </Col>
      );
    };
    if (dependencies) {
      const resFormItem = (
        <Form.Item
          noStyle
          dependencies={dependencies}
          key={`${name}${index.toString()}`}
        >
          {() => {
            if (visibleOn) {
              return evalExpression(visibleOn) ? formItem() : null;
            }
            return formItem();
          }}
        </Form.Item>
      );
      return resFormItem;
    }
    return formItem();
  });
  return (
    <Form {...defaultFromProps} {...formProps} form={form}>
      <Row {...defaultRowProps} {...rowProps}>
        {CustomFormItem}
      </Row>
    </Form>
  );
};
export default CustomForm;
