import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = { message: "" };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
        <label>
          Characters Left: {this.props.maxChars - this.state.message.length}
        </label>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
}

export default TwitterMessage;
