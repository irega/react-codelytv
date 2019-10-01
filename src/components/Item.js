import React from "react";
import PropTypes from 'prop-types';

const Item = ({ data }) => (
	<div className="grid-item" >
		<img className="preview-image" src={data.image} alt={data.name} />
		<div className="preview-title">{data.name}</div>
	</div>
)

Item.propTypes = {
	data: PropTypes.object.isRequired
};

export default Item;