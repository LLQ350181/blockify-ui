"use strict";(self.webpackChunkblockify_ui=self.webpackChunkblockify_ui||[]).push([[56],{77323:function(f,a,e){var l;e.r(a),e.d(a,{demos:function(){return t}});var n=e(90228),m=e.n(n),p=e(87999),c=e.n(p),u=e(75271),v=e(2762),i=e(82998),r=e(13841),t={"customform-demo-demo1":{component:u.memo(u.lazy(function(){return e.e(802).then(e.bind(e,98506))})),asset:{type:"BLOCK",id:"customform-demo-demo1",refAtomIds:["CustomForm"],dependencies:{"index.tsx":{type:"FILE",value:e(61166).Z},"@pl/react-ui":{type:"NPM",value:"1.0.0"},antd:{type:"NPM",value:"5.27.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pl/react-ui":v,antd:i,"antd/es/input/TextArea":r,react:l||(l=e.t(u,2))},renderOpts:{compile:function(){var I=c()(m()().mark(function B(){var s,M=arguments;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(760).then(e.bind(e,11760));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,M));case 3:case"end":return o.stop()}},B)}));function d(){return I.apply(this,arguments)}return d}()}}}},62074:function(f,a,e){e.r(a),e.d(a,{demos:function(){return v}});var l=e(90228),n=e.n(l),m=e(87999),p=e.n(m),c=e(75271),u=e(55119),v={"packages-utils-src-convert-file-size-demo-0":{component:c.memo(c.lazy(p()(n()().mark(function i(){var r,t;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,55119));case 2:return r=d.sent,t=r.convertFileSize,d.abrupt("return",{default:function(){return console.log(),console.log(t(1,"GB","MB",3)),console.log(t(500,"B","KB")),c.createElement("div",null,"\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA")}});case 5:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-utils-src-convert-file-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { convertFileSize } from '@pl/utils';
export default () => {
  console.log();
  // => '1.00 MB'

  console.log(convertFileSize(1, 'GB', 'MB', 3));
  // => '1024.000 MB'

  console.log(convertFileSize(500, 'B', 'KB'));
  // => '0.49 KB'

  return <div>\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA</div>;
};`},utils:{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@pl/utils":u},renderOpts:{compile:function(){var i=p()(n()().mark(function t(){var I,d=arguments;return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(760).then(e.bind(e,11760));case 2:return s.abrupt("return",(I=s.sent).default.apply(I,d));case 3:case"end":return s.stop()}},t)}));function r(){return i.apply(this,arguments)}return r}()}}}},2762:function(f,a,e){e.r(a),e.d(a,{CustomForm:function(){return M}});var l=e(26068),n=e.n(l),m=e(48305),p=e.n(m),c=e(62484),u=e(48811),v=e(24443),i=e(89542),r=e(75271),t=e(52676),I={labelAlign:"left",labelWrap:!0,layout:"horizontal"},d={align:"middle",gutter:8},B={span:24},s=function(o){var F=o.schema,_=F===void 0?[]:F,C=o.model,W=o.cRef,Z=o.customMapper,$=o.rowProps,N=o.colProps,V=o.formProps,Y=(0,i.cI)(),H=p()(Y,1),x=H[0],b=x.getFieldsValue,J=x.validateFields,T=x.setFieldsValue,Q=x.resetFields;(0,r.useImperativeHandle)(W,function(){return{getFieldsValue:b,setFieldsValue:T,validateFields:J,resetFields:Q}});var X=(0,r.useState)({}),R=p()(X,2),k=R[0],w=R[1];(0,r.useEffect)(function(){T(C)},[C]),(0,r.useEffect)(function(){(_==null?void 0:_.length)<=0},[_]),(0,r.useEffect)(function(){w(Z)},[]);var A=function(P){try{var y=new Function("data","try{return !!(".concat(P,");}catch(error){console.log(error);return false;}")),E=b(!0);return y.call(E,E)}catch(O){return console.log(O,"\u89E3\u6790\u9519\u8BEF",P),!1}},q=_.map(function(h,P){var y=h.fieldProps,E=h.formItemProps,O=h.customProps,g=O||{},ee=g.type,U=g.visibleOn,K=g.disabledOn,S=E||{},z=S.dependencies,L=S.name,j=k[ee],D=function(){return(0,t.jsx)(c.Z,n()(n()(n()({},B),N),{},{children:(0,t.jsx)(u.Z.Item,n()(n()({},E),{},{children:j?(0,t.jsx)(j,n()({form:x,disabled:K&&A(K)},y)):null}),"".concat(L).concat(P.toString()))}))};if(z){var ne=(0,t.jsx)(u.Z.Item,{noStyle:!0,dependencies:z,children:function(){return U?A(U)?D():null:D()}},"".concat(L).concat(P.toString()));return ne}return D()});return(0,t.jsx)(u.Z,n()(n()(n()({},I),V),{},{form:x,children:(0,t.jsx)(v.Z,n()(n()(n()({},d),$),{},{children:q}))}))},M=s},55119:function(f,a,e){e.r(a),e.d(a,{convertFileSize:function(){return l}});var l=function(m,p,c){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:2;if(m<0)throw new Error("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u4E3A\u8D1F\u6570");var v=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],i=v.indexOf(p.toUpperCase()),r=v.indexOf(c.toUpperCase());if(i===-1||r===-1)throw new Error("\u65E0\u6548\u5355\u4F4D\uFF0C\u5FC5\u987B\u4E3A B, KB, MB, GB, TB, PB, EB, ZB, YB");var t=m*Math.pow(1024,i-r);return"".concat(t.toFixed(u)," ").concat(c.toUpperCase())}},20533:function(f,a,e){e.r(a),e.d(a,{texts:function(){return l}});const l=[]},41682:function(f,a,e){e.r(a),e.d(a,{texts:function(){return l}});const l=[{value:"\u5C06\u6587\u4EF6\u5927\u5C0F\u4ECE\u4E00\u4E2A\u5355\u4F4D\u8F6C\u6362\u4E3A\u53E6\u4E00\u4E2A\u5355\u4F4D\uFF0C\u8FD4\u56DE\u503C\u4E3A\u5E26\u5355\u4F4D\u7684\u5B57\u7B26\u4E32\u3002111111",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u5FC5\u586B",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u6587\u4EF6\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"fromUnit",paraId:1,tocIndex:1},{value:"\u521D\u59CB\u5355\u4F4D\uFF08",paraId:1,tocIndex:1},{value:"B",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"KB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"MB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"GB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"TB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"PB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"EB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"ZB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"YB",paraId:1,tocIndex:1},{value:"\uFF09",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"toUnit",paraId:1,tocIndex:1},{value:"\u76EE\u6807\u5355\u4F4D\uFF08",paraId:1,tocIndex:1},{value:"B",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"KB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"MB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"GB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"TB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"EB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"ZB",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"YB",paraId:1,tocIndex:1},{value:"\uFF09",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"decimalPoint",paraId:1,tocIndex:1},{value:"\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"\u8FD4\u56DE",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:"\uFF1A\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u5E26\u76EE\u6807\u5355\u4F4D\u3002",paraId:3,tocIndex:1},{value:"\u6CE8\u610F\u4E8B\u9879",paraId:4,tocIndex:1},{value:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u4E3A\u8D1F\u6570\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u9519\u8BEF\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u4F20\u5165\u7684\u5355\u4F4D\u65E0\u6548\uFF0C\u4F1A\u629B\u51FA\u9519\u8BEF\u3002",paraId:5,tocIndex:1},{value:`import { convertFileSize } from '@pl/utils';

export default () => {
  try {
    convertFileSize(100, 'INVALID', 'MB');
  } catch (e) {
    console.error(e);
    // => Error: \u65E0\u6548\u5355\u4F4D\uFF0C\u5FC5\u987B\u4E3A B, KB, MB, GB, TB, PB, EB, ZB, YB
  }

  try {
    convertFileSize(-1, 'MB', 'GB');
  } catch (e) {
    console.error(e);
    // => Error: \u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u4E3A\u8D1F\u6570
  }

  return <div>\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u9519\u8BEF\u8F93\u51FA</div>;
};
`,paraId:6,tocIndex:4}]},61166:function(f,a){a.Z=`import { CustomForm } from '@pl/react-ui';
import { Button, Checkbox, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
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
`}}]);
