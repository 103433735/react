import React from "react";
import App from "../App";
import "./DisplayInfor.scss"
// class DisplayInfor extends React.Component {
//     render() {
//         <h2>List of user</h2>
//         console.log(this.props.name)
//         var listToShow = this.props.employeeList
//         return(
//             <div className="container">
//                 <br></br>
//                 {listToShow.map((item) => {
//                     return(
//                         <div key={item.id}>
//                             <div className="red">My name is {item.name}</div>
//                             <div className="green">My age is {item.namThanhLap}</div>
//                             <button onClick={() => this.props.HandleRemoveUser(item)}>DeleteUser</button>
//                             <hr></hr>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    var listToShow = props.employeeList
        return(
            <div className="container">
                <br></br>
                {listToShow.map((item) => {
                    return(
                        <div key={item.id}>
                            <div className="red">My name is {item.name}</div>
                            <div className="green">My age is {item.namThanhLap}</div>
                            <button onClick={() => props.HandleRemoveUser(item)}>DeleteUser</button>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
}

export default DisplayInfor