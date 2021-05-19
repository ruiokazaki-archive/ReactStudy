import React from "react";

// class ClassToggleBtn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bool: true,
//     };

//     this.toggle = this.toggle.bind(this);
//     // 後に this を使うためにバインドする
//   }

//   toggle() {
//     this.setState((state) => ({
//       bool: !state.bool,
//     }));
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <small>class state</small>
//         <p>ToggleBtn : {String(this.state.bool)}</p>
//         <button onClick={this.toggle}>Toggle</button>
//       </React.Fragment>
//     );
//   }
// }

// 自分で書いた
class ClassToggleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      bool: !state.bool,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <small>hooks state</small>
        <p>ToggleBtn : {String(this.state.bool)}</p>
        <button onClick={this.toggle}>Toggle</button>
      </React.Fragment>
    );
  }
}

export default ClassToggleBtn;
