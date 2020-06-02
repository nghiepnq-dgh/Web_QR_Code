import React from 'react'
import { Card, Typography, Alert, Row, Col } from 'antd';

export default function Home() {
    return (
        <Card>
        {/* Block 1 */}
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row">
            <div className="right1">
              <img style={{ width: '70%' }} src="/undraw_windows_q9m0.png" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row" span={12}>
            <div className="left1">Write your records of you and send to me</div>
          </Col>
        </Row>
        {/* Block 2 */}
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row" span={12}>
            <div className="left1">Gather records for evaluation and resolution</div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row">
            <div className="right1">
              <img style={{ width: '70%' }} src="/undraw_wall_post_83ul.png" />
            </div>
          </Col>
        </Row>
        {/* Block 3 */}
        <Row style={{paddingTop: '10%'}} gutter={24}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row" span={12}>
          <div className="right1">
              <img style={{ width: '100%' }} src="/undraw_progressive_app_m9ms.png" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="gutter-row">
            <div className="right1">
              <img style={{ width: '100%' }} src="/undraw_landscape_mode_53ej.png" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="gutter-row">
            <div className="end_text">
              Use mobile phone to check status of records with QR Code
            </div>
          </Col> 
        </Row>
      </Card>
    )
}
