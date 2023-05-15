import React from "react";

export class TextInput extends React.Component {
    inputValue = ''
    addButtonHandler () {
        console.log(this)
        this.props.setListItems(this.props.listItems.concat([this.inputValue]));
        console.log('items and value: ', this.props.listItems, this.inputValue);
    }
    render () {
        return <div>
            <input type="text" placeholder="Enter a note" onChange={e => this.inputValue = e.target.value} />
            <button onClick={this.addButtonHandler.bind(this)}>Add Item</button>
        </div>;
    }
}
