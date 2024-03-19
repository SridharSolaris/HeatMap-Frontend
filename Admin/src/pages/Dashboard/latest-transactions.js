// import React, { Component } from 'react';
// import { Table, Card, CardBody, Button } from "reactstrap";

// //Import Images
// import user2 from "../../assets/images/users/user-2.jpg";
// import user3 from "../../assets/images/users/user-3.jpg";
// import user4 from "../../assets/images/users/user-4.jpg";
// import user5 from "../../assets/images/users/user-5.jpg";
// import user6 from "../../assets/images/users/user-6.jpg";

// class LatestTransactions extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             transactions: [
//                 { imgUrl: user2, name: "Herbert C. Patton", status: "Confirm", amount: "14,584", date: "5/12/2016", color: "success" },
//                 { imgUrl: user3, name: "Mathias N. Klausen", status: "Waiting payment", amount: "8,541", date: "10/11/2016", color: "warning" },
//                 { imgUrl: user4, name: "Nikolaj S. Henriksen	", status: "Confirm", amount: "954", date: "8/11/2016", color: "success" },
//                 { imgUrl: user5, name: "Lasse C. Overgaard", status: "Payment expired", amount: "44,584", date: "7/11/2016", color: "danger" },
//                 { imgUrl: user6, name: "Kasper S. Jessen", status: "Confirm", amount: "8,844", date: "1/11/2016", color: "success" },
//             ],
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Card>
//                     <CardBody>
//                         <h4 className="card-title mb-4">Latest Transactions</h4>

//                         <div className="table-responsive">
//                             <Table className="align-middle table-centered table-vertical table-nowrap">

//                                 <tbody>
//                                     {
//                                         this.state.transactions.map((transaction, key) =>
//                                             <tr key={key}>
//                                                 <td>
//                                                     <img src={transaction.imgUrl} alt="user" className="avatar-xs rounded-circle me-2" /> {transaction.name}
//                                                 </td>
//                                                 <td><i className={"mdi mdi-checkbox-blank-circle  text-" + transaction.color}></i> {transaction.status}</td>
//                                                 <td>
//                                                     ${transaction.amount}
//                                                     <p className="m-0 text-muted font-size-14">Amount</p>
//                                                 </td>
//                                                 <td>
//                                                     {transaction.date}
//                                                     <p className="m-0 text-muted font-size-14">Date</p>
//                                                 </td>
//                                                 <td>
//                                                     <Button color="secondary" size="sm" className="waves-effect waves-light">Edit</Button>
//                                                 </td>
//                                             </tr>
//                                         )
//                                     }
//                                 </tbody>
//                             </Table>
//                         </div>
//                     </CardBody>
//                 </Card>
//             </React.Fragment>
//         );
//     }
// }

// export default LatestTransactions;
import React, { Component } from 'react';
import { Table, Card, CardBody, Button } from "reactstrap";

//Import Images
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

class LatestTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { imgUrl: user2, name: "21A91A0XXX",clg:"AEC", totsub: "150", Hard:"80",medium:"40",easy:"30",points: "2000",  },
                { imgUrl: user3, name: "21M91A0XXX",clg:"ACOE", totsub: "144", Hard:"80",medium:"40",easy:"30", points: "1700", },
                { imgUrl: user4, name: "21A91A0XXX",clg:"AEC", totsub: "144",Hard:"80",medium:"40",easy:"30", points: "1600", },
                { imgUrl: user5, name: "21A91A0XXX",clg:"AEC", totsub: "139",Hard:"80",medium:"40",easy:"30", points: "1600", },
                { imgUrl: user6, name: "21P91A0XXX",clg:"ACET", totsub: "136",Hard:"80",medium:"40",easy:"30", points: "1400", },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">LEADERBOARD</h4>

                        <div className="table-responsive">
                            <Table className="align-middle table-centered table-vertical table-nowrap">
                                <thead>
                                    <tr>
                                        <th>S.NO</th>
                                        <th>NAME</th>
                                        <th>PROBLEMS SOLVED</th>
                                        <th>HARD</th>
                                        <th>MEDIUM</th>
                                        <th>EASY</th>
                                        <th>POINTS</th>
                                        {/* <th>last program submitt</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.transactions.map((transaction, key) =>
                                        
                                            <tr key={key}>
                                                <td>{key+1}</td>
                                                <td>
                                                 {transaction.name}
                                                </td>
                                                <td>
                                                {/* <i className={"mdi mdi-checkbox-blank-circle  text-2" }></i> */}
                                                 {transaction.totsub}</td>
                                                 <td>
                                                    {transaction.Hard}
                                                    <p className="m-0 text-muted font-size-14"></p>
                                                </td>
                                                <td>
                                                    {transaction.medium}
                                                    <p className="m-0 text-muted font-size-14"></p>
                                                </td>
                                                <td>
                                                    {transaction.easy}
                                                    <p className="m-0 text-muted font-size-14"></p>
                                                </td>
                                                <td>
                                                    {transaction.points}
                                                    <p className="m-0 text-muted font-size-14"></p>
                                                </td>
                                                <td>
                                                    {transaction.date}
                                                    <p className="m-0 text-muted font-size-14"></p>
                                                </td>
                                                {/* <td>
                                                    <Button color="secondary" size="sm" className="waves-effect waves-light">Edit</Button>
                                                </td> */}
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default LatestTransactions;