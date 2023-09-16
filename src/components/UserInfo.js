import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Phiet",
    age: 22,
  };

  handelClick(event) {
    console.log("Click me", this.state.name);
    // merge State=>react class
    this.setState({
      name: "Jonathan",
      age: Math.floor(Math.random() * 100 + 1),
    });
    // console.log(event.target);
  }
  handelOnmouseover(e) {
    console.log(e.pageX);
  }

  handelOnchangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handelOnchangeAge(e) {
    //  bad code
    // this.state.age = e.target.value;
    this.setState({
      age: e.target.value,
    });
  }

  handelSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm {this.state.age} years old
        <br />
        <button
          onClick={(e) => {
            this.handelClick(e);
          }}
        >
          Click me
        </button>
        <br />
        <button onMouseOver={this.handelOnmouseover}>Hover me</button>
        <br />
        <form
          onSubmit={(e) => {
            this.handelSubmit(e);
          }}
        >
          <label>Your name:</label>
          <input
            value={this.state.name}
            onChange={(e) => {
              this.handelOnchangeName(e);
            }}
            type="text"
          />
          <br />
          <label>Age:</label>
          <input
            value={this.state.age}
            onChange={(e) => {
              this.handelOnchangeAge(e);
            }}
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;