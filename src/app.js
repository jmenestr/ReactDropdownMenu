import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

var app = document.getElementById('drop');
var list = [
	{name: "One", ID: 1},
	{name: "Two", ID: 2},
	{name: "Three", ID: 3}
]
ReactDOM.render(<Dropdown list={list} />, app);