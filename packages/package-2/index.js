'use strict';

console.log('A sample console log');


import React from "react";
import ReactDOM from "react-dom";
import a from 'package-1/lib/package-1';
a();
const App = () => {
    return <div>Hello World</div>;
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);