import React from "react"
import { Card, CardBody, Progress, Row, Col } from "reactstrap"
import { FaFeather } from "react-icons/fa6"
import { FaEarlybirds } from "react-icons/fa"
import { GiEagleHead } from "react-icons/gi"

const MonthlyEarnings = ({ easy, medium, hard }) => {
  //const totalProblems = 45 //easy + medium + hard;
  const easyPercentage = 0.5 * 100 //(easy / totalProblems) 0.5 * 100;
  const mediumPercentage = 0.25 * 100 //(medium / totalProblems)/ 0.25 * 100;
  const hardPercentage = 0.75 * 100 //(hard / totalProblems)/ 0.75 * 100

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h4 className="card-title mb-4">Problem Levels</h4>
          <Row p-6 className="flex space-between">
            <Col md="3">
              <FaFeather color="teal" size={50} />
            </Col>
            <Col md="8">
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className="w-[53px] text-label-3 dark:text-dark-label-3 fs-5 ">
                    Easy
                  </div>
                  {/* <div className="flex flex-1 items-center">
                <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  {easy}
                </span>
                <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /{totalProblems}
                </span>
              </div>
              <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                <span className="space-x-1.5">
                  <span>Progress</span>
                  <span className="font-medium text-label-2 dark:text-dark-label-2">
                    {easyPercentage.toFixed(2)}%
                  </span>
                </span>
              </div> */}
                </div>
                <Progress
                  value={easyPercentage}
                  color="success"
                  className="mt-2"
                />
              </div>
            </Col>
          </Row>
          <hr />
          <Row p-6 className="flex space-between">
            <Col md="3">
              <FaEarlybirds color="brown" size={50} />
            </Col>
            <Col md="8">
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className="w-[53px] text-label-3 dark:text-dark-label-3 fs-5">
                    Medium
                  </div>
                  {/* <div className="flex flex-1 items-center">
                <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  {easy}
                </span>
                <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /{totalProblems}
                </span>
              </div>
              <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                <span className="space-x-1.5">
                  <span>Progress</span>
                  <span className="font-medium text-label-2 dark:text-dark-label-2">
                    {easyPercentage.toFixed(2)}%
                  </span>
                </span>
              </div> */}
                </div>
                <Progress
                  value={mediumPercentage}
                  color="info"
                  className="mt-2"
                />
              </div>
            </Col>
          </Row>
          <hr />
          <Row p-6 className="flex space-between">
            <Col md="3">
              <GiEagleHead color="chocolate" size={50} />
            </Col>
            <Col md="8">
              <div className="space-y-2">
                <div className="flex w-full items-end text-xs">
                  <div className=" text-label-3 dark:text-dark-label-3 fs-5">
                    Hard
                  </div>
                  {/* <div className="flex flex-1 items-center">
                <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                  {easy}
                </span>
                <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                  /{totalProblems}
                </span>
              </div>
              <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                <span className="space-x-1.5">
                  <span>Progress</span>
                  <span className="font-medium text-label-2 dark:text-dark-label-2">
                    {easyPercentage.toFixed(2)}%
                  </span>
                </span>
              </div> */}
                </div>
                <Progress
                  value={hardPercentage}
                  color="warning"
                  className="mt-2"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarnings