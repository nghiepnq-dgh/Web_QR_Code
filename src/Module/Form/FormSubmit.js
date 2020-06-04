import React, { Component } from "react";
import { Form, Input, Button, Row, Col, Icon, notification } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createDocHandler } from "./FormHandler";
class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataContend: null,
      isDataContend: false,
    };
  }
  setValueContent = (value) => {
    this.setState({
      dataContend: value,
      isDataContend: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!this.state.dataContend) {
        this.setState({
          isDataContend: true,
        });
        return;
      }
      if (!err) {
        const dataSubmit = {
          ...values,
          contend: this.state.dataContend,
        };
        console.log(dataSubmit);
        const result = await createDocHandler(dataSubmit);
        if (result && result.success) {
          notification.success({
            message: "Tạo thành công!",
            description: "Vui lòng kiểm tra email",
          });
          this.setState({
            dataContend: null
          })
          this.props.form.resetFields()
        } else {
          const { errors, msg } = result;
          if (errors && Array.isArray(errors)) {
            errors.map((item) => {
              notification.error({
                message: "Tạo lỗi!",
                description: item.message || msg,
              });
            });
          } else {
            notification.error({
              message: "Tạo lỗi!",
              description: errors.message || msg,
            });
          }
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={24}>
        <Form onSubmit={this.handleSubmit} layout="vertical">
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <Form.Item label="CMND">
              {getFieldDecorator("identity", {
                rules: [
                  { required: true, message: "Vui lòng nhập CMND!" },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              )}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "Nhập đúng định dạng E-mail!",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập E-mail!",
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              )}
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
            <ReactQuill
              style={{ marginTop: 30 }}
              placeholder="Hồ Sơ"
              theme="snow"
              value={this.state.dataContend}
              onChange={this.setValueContent}
            />
            {this.state.isDataContend ? (
              <p style={{ color: "red" }}>Vui lòng nhập hồ sơ</p>
            ) : null}
            <Button style={{ marginTop: 30 }} type="primary" htmlType="submit">
              Gửi
            </Button>
          </Col>
        </Form>
      </Row>
    );
  }
}

const SubmitFormView = Form.create({ name: "login" })(FormSubmit);
export default SubmitFormView;
