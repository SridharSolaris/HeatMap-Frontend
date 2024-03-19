import React, { useEffect, Component } from "react"
import { Row, Col, Card, UncontrolledTooltip } from "reactstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

// Import Components

// Import Images
import user6 from "../../assets/images/users/user-6.jpg"
import user11 from "../../assets/images/users/user-11.jpg"
const Profile = props => {
  document.title = "Directory | Lexa - Responsive Bootstrap 5 Admin Dashboard"

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Pages", link: "#" },
    { title: "Directory", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Directory", breadcrumbItems)
  }, [])

  const user = {
    id: 5,
    imgUrl: user6,
    roll:"21A91A05I2",
    designation: "Reddi Venkata Sridhar",
    // name: "",
    year: "3rd year",
  }

  return (
    <React.Fragment>
      <Card className="directory-card">
        <div>
          <div className="directory-bg text-center">
          {/* <img
                // className="covered"
                src={user.imgUrl}
                alt="Generic placeholder"
              /> */}
            <div className="directory-overlay">
              <img
                className="rounded-circle avatar-lg img-thumbnail"
                src={user.imgUrl}
                alt="Generic placeholder"
              />
            </div>
          </div>

          <div className="directory-content text-center p-4">
            <p className=" mt-4">{user.designation}</p>
            <h4 className="font-size-16">{user.roll}</h4>

            <p className="text-muted">{user.year}</p>
            <hr />
            {/* <h6>Social Media Accounts</h6>
            <ul className="social-links list mb-0 mt-4">
              {user.socials.map((social, key) => (
                <React.Fragment key={key}>
                  <li className="list-inline-item">
                    <Link
                      title=""
                      className={"tooltips btn-" + social.colorclass}
                      id={social.title + user.id}
                      to={social.link}
                    >
                      <i className={social.icon}></i>
                    </Link>
                    <UncontrolledTooltip
                      placement="top"
                      target={social.title + user.id}
                    >
                      {social.title}
                    </UncontrolledTooltip>
                  </li>{" "}
                </React.Fragment>
              ))}
            </ul> */}
          </div>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Profile)