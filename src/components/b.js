import React, { Component } from 'react';

class b extends Component {
  render() {
    const elements = ['one', 'two', 'three'];

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<button>{value}</button>);
    }

    return <div>{items}</div>;
  }
}

export default b;
