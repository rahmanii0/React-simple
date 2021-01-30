import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag2", "atg3"],
  };

  // constructor() {
  //   super();
  //   this.handeIncrement = this.handeIncrement.bind(this);
  // }


  handeIncrement = product => {
    console.log(product);
    this.setState({count : this.state.count + 1});
  };

  // styles={
  //     fontSize:20,
  //     fontWeight:"bold"
  // };
  renderTags = () => {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={()=>this.handeIncrement({id:1,name:'shoes'})}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
