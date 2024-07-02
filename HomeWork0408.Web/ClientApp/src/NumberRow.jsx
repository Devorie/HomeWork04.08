import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { isSelected, onSelectClicked, canSelect } = this.props;
        const { id, number } = this.props.number;

        return (
            <tr >
                
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'primary'} w-25`} disabled={!canSelect} onClick={onSelectClicked}>
                        {isSelected ? 'Unselect' : 'Select'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default NumberRow;