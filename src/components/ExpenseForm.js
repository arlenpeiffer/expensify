import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    amount: '',
    description: '',
    note: ''
  };
  onAmountChange = (event) => {
    const amount = event.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  render() {
    return (
      <div>
        <form>
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
