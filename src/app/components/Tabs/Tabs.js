import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let tabs = [
	{'index': 1, 'title': 'прибытие / выезд'},
	{'index': 2, 'title': 'Расходы'},
	{'index': 3, 'title': 'План'}
]
export default class Tabs extends Component {
	static displayName = 'Tabs';
	renderConent = () => {
		return(
			<div className="tabs-content">
				{this.props.children}
			</div>
		);
	}
	handleClick = (index) => {
		this.props.handleClick(index);
	}
	render(){
		let tabsNavTemp =  tabs.map((item, index) => {
			let activeClass = (this.props.selected === item.index) ? 'active' : '';
			return(
				<li className={activeClass} onClick={this.handleClick.bind(this, item.index)} key={index} >{item.title}</li>
			);
		})
		return(
			<div className='tabs'>
				<div className="tabs__caption">
					{tabsNavTemp}
				</div>
				{this.renderConent()}
			</div>
		)
	}
}