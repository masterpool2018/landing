import React, { Component } from "react";
import styled from "styled-components";
import CheckMark from "./CheckMark";

const Title = styled.h2`
  font-family: "HelveticaBold";
  margin: 7px 0 40px 0;
  font-size: 23px;
  white-space: nowrap;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  width: 100%;

  @media (min-width: 1200px) {
    display: inline-flex;
    margin-top: 0;
  }
  @media (min-width: 768px) {
    display: inline-flex;
    margin-top: 0;
  }
`;

const Input = styled.input`
  font-family: "HelveticaRegular";
  flex-grow: 1;
  font-size: 15px;
  color: #18daf7;
  padding: 7px 0 7px 12px;
  background: none;
  border: 1px solid #18daf7;
  border-right: none;
  border-radius: 20px 0 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;

  ::placeholder {
    color: #5d636a;
  }

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  font-family: "HelveticaBold";
  background-color: #18daf7;
  border-radius: 20px;
  border: 1px solid #18daf7;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 8px 60px 5px;
  margin-left: -18px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 25px rgb(24, 218, 247);
  }

  &:disabled {
    background-color: #5fa9b4;
    border: 1px solid #5fa9b4;
  }
`;

function validate(email) {
  return {
    email: email.length === 0
  };
}

class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      hiddenForm: false,
      hiddenMark: true,

      touched: {
        email: false
      }
    };

    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.checkingmarkInstance = <CheckMark />;
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  // onChange(e) {
  //   var val = e.target.value;
  //   this.setState({ email: val });
  // }

  // handleChange(evt) {}

  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      this.setState({ hiddenForm: true });
      this.setState({ hiddenMark: false });
    }
    const { email } = this.state;
    console.log(`Signed up with email: ${email}`);

    const processRequest = new Request("/process.php", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email
      })
    });

    fetch(processRequest)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      // .then(response => {
      //   console.debug(response);
      //   // ...
      // })
      .catch(error => {
        console.error(error);
      });
  };

  canBeSubmitted(evt) {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const styleForm = this.state.hiddenForm
      ? { display: "none" }
      : { display: "flex" };
    const styleMark = this.state.hiddenMark
      ? { display: "none" }
      : { display: "flex" };
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
            <Title>Join our Mailing List</Title>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8">
            <Wrapper style={styleMark}>{this.checkingmarkInstance}</Wrapper>
            <Form onSubmit={this.handleSubmit} style={styleForm}>
              <Input
                className={shouldMarkError("email") ? "error" : ""}
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                onBlur={this.handleBlur("email")}
                placeholder="Please enter your email here"
              />
              <Button
                type="submit"
                value="Submit"
                disabled={isDisabled}
                // onClick={this.handleChange}
              >
                JOIN
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;
