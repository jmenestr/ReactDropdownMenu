import React from 'react';
import Fontawesome from 'react-fontawesome';

export default class Dropdown extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
	}
	_handleDropdownClick(){
		var newExpandedState = (this.state.expanded) ? false : true;
		this.setState({ expanded: newExpandedState });
	}
 
	_renderDropdownCaret(){
				return <div className={'caret' + (this.state.expanded? " up" : "")}>&#xffec;</div>
	}
	_renderListItems(){
		return (
				this.props.list.map((i)=>{
					return <DropdownItem item={i} key={i.ID} />;
				})
			)
	}
	render(){
		return(
			<div className={'dropdown-container' + (this.state.expanded ? " open" : "")}>
				<div className='dropdown-button' onClick={this._handleDropdownClick.bind(this)}>
					<span className='button-title'>Dropdown Button</span>{this._renderDropdownCaret()}
				</div>
				<ul className='dropdown-list'>
					{this._renderListItems()}
				</ul>
			</div>
		)
	}
}



class DropdownItem extends React.Component{
	render(){
		var item = this.props.item;
		return (
			<li key={item.ID} className='dropdown-item'>
				<span>{item.name}</span>
			</li>
		);
	}
}
