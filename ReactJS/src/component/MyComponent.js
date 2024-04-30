import React from "react";
import AddUser from "./AddUser";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        employeeList: [
            {id: 1, name: "VNPAY", namThanhLap: 2007},
            {id: 2, name: "FPT", namThanhLap: 2001},
            {id: 3, name: "Duc Nguyen Anh", namThanhLap: 2001}
        ]
    }

    HandleAddNewuser = (newObject) => {
        this.setState ({
            employeeList: [newObject,...this.state.employeeList]
        })
    }
    HandleRemoveUser = (selectedObject) => {
        let listUserClone = this.state.employeeList
        listUserClone  = listUserClone.filter(item => item.id !== selectedObject.id)
        this.setState({
             employeeList: listUserClone
        })
    }
    render() {
        var bienTest = "iPhone"
        const bienTuoi = 15
        return (
         <div>
            <AddUser HandleAddNewUser = {this.HandleAddNewuser} ></AddUser>
            
            <DisplayInfor HandleRemoveUser = {this.HandleRemoveUser} name = {bienTest}  age = {bienTuoi} employeeList = {this.state.employeeList} ></DisplayInfor>
        </div>
        )
    }
}

export default MyComponent