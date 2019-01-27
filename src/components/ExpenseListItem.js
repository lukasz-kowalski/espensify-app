import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link to={`/edit/${id}`} className="list__item">
      <div>
        <h3 className="list__item-title">{description}</h3>
        <span className="list__item-sub-title"><p>Created At: {moment(createdAt).format('Do MMMM YYYY')}</p></span>
      </div>
      <h3 className="list__item-data">Amount: {numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default ExpenseListItem;
