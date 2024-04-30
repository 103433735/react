import React from "react";

class AddUser extends React.Component {
    state = {
        name: "ABC",
        address: "Hanoi",
        age: 20
    }
    
    getName() {
        return this.state.name
    }

    getAge() {
        return this.state.age
    }

    HandleClick(clickType) {
        console.log("The button is clicked")
        if (clickType === "getName") {
            this.setState({
                name: "Duc Nguyen Anh"
            })
        } else if (clickType === "getAge") {
            this.setState({
                age: this.state.age + 1
            })
        } else {
            //ignore
        }
    }

    HandleOnMouseOver(event) {
        console.log(event)
    }



    HandleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        var newItem = {
             id: Math.random(),
             name: this.state.name,
             namThanhLap: this.state.age
        }
        this.props.HandleAddNewUser(newItem)
    }
    HandleOnChangeInput = (event, inputField) => {
        if (inputField == "name") {
            this.setState({
                name: event.target.value
            })
        } else if (inputField == "age") {
            this.setState({
                age: event.target.value
            }) 
        }

    }
    render() {
        return(
            <div>
             My name is {this.state.name} and I'm {this.state.age}
            {/* <button onMouseOver={this.HandleClick}>Click me</button> */}
            {/* Chuyển đổi từ function bình thường thành EC6 arrow function */}
             {/* <button onClick={() => {this.HandleClick("getName")}}>Get to update new name</button>  */}
            
            <form onSubmit={(event) => {this.HandleOnSubmit(event)}}>
                <label>Your name</label>
                <input placeholder="Enter your name" type="Text" onChange={(event) => {this.HandleOnChangeInput(event,"name")}}></input>
                <label>Your age</label>
                <input placeholder="Enter your age" type="Text" onChange={(event) => {this.HandleOnChangeInput(event,"age")}}></input>
                
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default AddUser