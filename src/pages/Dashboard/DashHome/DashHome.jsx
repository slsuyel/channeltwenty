
// import SalesChart from "./SalesChart";

import { CardSubtitle, Col, Row } from "reactstrap";

export default function DashHome() {


    return (
        <>
            <div className="content-header">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0"></h1>
                    </div>

                </div>
                <div className="container-fluid">
                    <CardSubtitle className="text-muted" tag="h6">
                        Report
                    </CardSubtitle>
                    <div className="bg-primary text-white my-3 p-3 rounded">
                        <Row>
                            <Col md="3">
                                <h6>Total Visitors</h6>
                                <h4 className="mb-0 fw-bold">100</h4>
                            </Col>

                            <Col md="3">
                                <h6>Live Visitors </h6>
                                <h4 className="mb-0 fw-bold">100</h4>
                            </Col>
                            <Col md="3">
                                <h6>All News</h6>
                                <h4 className="mb-0 fw-bold">100</h4>
                            </Col>
                            <Col md="3">
                                <h6>Categories</h6>
                                <h4 className="mb-0 fw-bold">100</h4>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


        </>
    );
}
