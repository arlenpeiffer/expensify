import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      calendarFocused: false,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      error: '',
      note: props.expense ? props.expense.note : ''
    };
  }
  onAmountChange = (event) => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        description: this.state.description,
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="Description"
            type="text"
            value={this.state.description}
          />
          <input
            onChange={this.onAmountChange}
            placeholder="Amount"
            type="text"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => { false }}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
