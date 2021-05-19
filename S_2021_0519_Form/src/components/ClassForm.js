import React from "react";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    alert("name : " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </label>
        {/* <label>
          Essay:
          <textarea
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label> */}
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default ClassForm;
