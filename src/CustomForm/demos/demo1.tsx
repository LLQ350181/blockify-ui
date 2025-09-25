import { Button, Checkbox, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { CustomForm } from 'blockify-ui';
import React, { useRef } from 'react';

const Demo1 = () => {
  const cRef = useRef();

  const customMapper = {
    input: Input,
    select: Select,
    textArea: TextArea,
    checkbox: Checkbox,
    submit: Button,
  };
  const schema = [
    {
      customProps: {
        type: 'input',
      },
      formItemProps: {
        validateFirst: true,
        label: 'Note',
        name: 'note',
      },
      fieldProps: {
        required: true,
        disabled: false,
      },
    },
    {
      customProps: {
        type: 'select',
        disabledOn: '!data.note',
      },
      formItemProps: {
        label: 'Gender',
        name: 'gender',
        dependencies: ['note'],
      },
      fieldProps: {
        required: true,
        allowClear: true,
        placeholder: 'Select a option and change input text above',
        options: [
          {
            label: 'male',
            value: 'male',
          },
          {
            label: 'female',
            value: 'female',
          },
          {
            label: 'other',
            value: 'other',
          },
        ],
      },
    },
    {
      customProps: {
        type: 'input',
        visibleOn: 'data.gender === "other"',
      },
      formItemProps: {
        label: 'Customize Gender',
        name: 'Customize Gender',
        dependencies: ['gender'],
      },
      fieldProps: {
        required: true,
      },
    },
  ];
  const model = {
    note: '',
    gender: undefined,
    customizeGender: '',
  };

  return (
    <CustomForm
      formProps={{
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      }}
      rowProps={{}}
      colProps={{}}
      customMapper={customMapper}
      schema={schema}
      model={model}
      cRef={cRef}
    />
  );
};

export default Demo1;
