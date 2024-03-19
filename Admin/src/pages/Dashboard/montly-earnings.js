import React from "react"
import { Card, CardBody,Row,CardTitle } from "reactstrap"
import DonutChart from '../AllCharts/DonutChart';

const MonthlyEarnings = props => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4"> Problems Solved </CardTitle>
                    <Row className="text-center mt-4">
                        <div className="col-6">
                            <h4 className="font-size-20">1000</h4>
                            <p className="text-muted">Total</p>
                        </div>
                        <div className="col-6">
                            <h4 className="font-size-20">700</h4>
                            <p className="text-muted">Solved</p>
                        </div>
                    </Row>

                    
                    <div dir="ltr">
                        <DonutChart />
                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    )

}

export default MonthlyEarnings
