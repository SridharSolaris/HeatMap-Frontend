import React, { Component } from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
//import "react-calendar-heatmap/dist/styles.css"
import "../Dashboard/dash.css"

class MonthlyEarnings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // heatmapData: [
      // { date: '2023-01-8', count: 5 },
      // { date: '2023-02-31', count: 10 },
      // { date: '2023-03-21', count: 20 },
      // Add data for the entire year...
      // ],
      options: {
        colors: ["#ccc", "#7a6fbe", "rgb(40, 187, 227)"],
        chart: {
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 0.1,
        },
        grid: {
          borderColor: "#f8f8fa",
          row: {
            colors: ["transparent", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
      },
      series: [
        {
          name: "Series A",
          data: [0, 150, 60, 180, 90, 75, 30, 0, 0, 0, 0, 0], // Add zeros for the entire year
        },
        {
          name: "Series B",
          data: [0, 45, 150, 36, 60, 240, 30, 0, 0, 0, 0, 0], // Add zeros for the entire year
        },
        {
          name: "Series C",
          data: [0, 15, 195, 21, 360, 120, 30, 0, 0, 0, 0, 0], // Add zeros for the entire year
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Streak</h4>
            <Row className="text-center mt-1">
              {/* <Col xs="4"> */}
              <row>
                <h5 className="font-size-10">NO OF ACTIVE DAYS(TOTAL)</h5>
                {/* <p className="text-muted">10/XX</p> */}
              </row>
              <row p-3>
                <Col md="3"></Col>
                <Col md="">
                  <button class="my-button">10/13</button>
                </Col>
                <Col md="3"></Col>
              </row>
              {/* </Col> */}
              {/* <Col xs="4"> */}
              <h5 className="font-size-10">CURRENT STREAK/BEST STREAK</h5>
              {/* <p className="text-muted">XX/YY</p> */}
              <row p-3>
                <Col md="3"></Col>
                <Col md="">
                  <button class="my-button">5/13</button>
                </Col>
                <Col md="3"></Col>
              </row>
              {/* </Col> */}
              {/* <Col xs="4"> */}
              <h5 className="font-size-10">HIGHEST STREAK(OVERALL)</h5>

              {/* <p className="text-muted">XX</p> */}
              <row p-3>
                <Col md="3"></Col>
                <Col md="12" mb="1">
                  <button class="my-button">13</button>
                </Col>
                <Col md="3"></Col>
              </row>
              {/* </Col> */}
            </Row>

            {/* <div id="heatmap" className="mt-4 h-md-75"> */}
            {/* <CalendarHeatmap */}
            {/* startDate={new Date('2023-01-01')} */}
            {/* endDate={new Date('2023-12-31')} */}
            {/* values={this.state.heatmapData} */}
            {/* classForValue={(value) => { */}
            {/* // if (!value) */}
            {/* // return 'color-empty';  */}
            {/* // return color-github-${value.count};  */}

            {/* <div id="morris-area-example" className="morris-charts morris-charts-height" dir="ltr"> */}
            {/* <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="300" /> */}
            {/* </div> */}
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default MonthlyEarnings