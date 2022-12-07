import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              maxLength="10"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your phone number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="address">
              Current Address
            </label>
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="gender">
              Gender
            </label>
            <input
              type="gender"
              id="gender"
              className="formFieldInput"
              placeholder="gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="percentage">
              10th Percentage
            </label>
            <input
              type="number"
              id="percentage"
              className="formFieldInput"
              placeholder="Enter 10th percentage"
              name="percentage"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="percentage">
              12th Percentage
            </label>
            <input
              type="number"
              id="percentage"
              className="formFieldInput"
              placeholder="Enter 12th percentage"
              name="percentage"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="lastSemPercentage">
              Last Sem percentage
            </label>
            <input
              type="text"
              id="lastSemPercentage"
              className="formFieldInput"
              placeholder="Enter last semster percentage"
              name="lastSemPercentage"
              value={this.state.lastSemPercentage}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="college">
              College
            </label>
            <input
              type="text"
              id="college"
              className="formFieldInput"
              placeholder="Enter college name"
              name="college"
              value={this.state.college}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              maxLength="16"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
