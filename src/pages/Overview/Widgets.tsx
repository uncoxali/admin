import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
interface Props {
  data?: any;
}

const Widgets = ({ data }: Props) => {
  return (
    <React.Fragment>
      {data?.map((item: any, key: number) => (
        <div key={key} className="">
          <strong className="h4">{item?.Title}</strong>
          <Col className="d-flex flex-wrap float-center my-3 justify-content-center">
            {item?.data?.map((item: any, key: number) => (
              <Card className="col-sm-6 col-md-4 col-lg-2 col-12 me-2">
                <CardBody>
                  <Row className="align-items-center d-flex justify-content-center">
                    <Col>
                      <span className="text-muted h-6 mb-2 lh-1 d-flex justify-content-center">
                        {item["title"]}
                      </span>
                      <h5 className="mb-3 mt-3 d-flex justify-content-center">
                        {item["value"]}
                      </h5>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ))}
          </Col>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Widgets;

// <Card className="">
//                 <CardBody>
//                   <Row className="align-items-center d-flex justify-content-center">
//                     <Col>
//                       <span className="text-muted h-6 mb-2 lh-1 d-flex justify-content-center">
//                         {item["title"]}
//                       </span>
//                       <h5 className="mb-3 mt-3 d-flex justify-content-center">
//                         {item["value"]}
//                       </h5>
//                     </Col>
//                   </Row>
//                 </CardBody>
//               </Card>
