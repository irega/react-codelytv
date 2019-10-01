import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fadeIn } from "./fadeIn";

class Item extends PureComponent {

	componentDidMount() {
		fadeIn(this.$item);
	}
	render() {
		return (<Link className="grid-item-link" to={`/videos/${this.props.data.id}`}  >
			<div className="grid-item" >
				<img className="preview-image" src={this.props.data.thumbnail} alt={this.props.data.title} ref={el => this.$item = el} />
				<div className="preview-title">{this.props.data.title}</div>
			</div>
		</Link>);
	}
}

Item.propTypes = {
	data: PropTypes.object.isRequired
};

export default Item;