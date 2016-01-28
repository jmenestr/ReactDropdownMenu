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
		this.setState({ expanded: true })
	}
	_renderDropdownCaret(){
		var caret;
		if(this.state.expanded) {
				caret = <Fontawesome name='caret-up' size='2x' style={{ color: 'black' }}/>
		}else{
				caret = <Fontawesome name='caret-down' size='2x' style={{color: 'black' }}/>
		}
		return caret;
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
			<div className={'dropdown-container' + (this.state.expanded ? " open": "")}>
				<div className='dropdown-button' onClick={this._handleDropdownClick}>
					<span className='button-title'>Dropdown Button{this._renderDropdownCaret()}</span>
				</div>
				<div className='dropdown-list'>
					{this._renderListItems()}
				</div>
			</div>
		)
	}
}



class DropdownItem extends React.Component{
	render(){
		var item = this.props.item;
		return (
			<div key={item.ID} className='dropdown-item'>
				<span>{item.name}</span>
			</div>
		);
	}
}
