import React from 'react';

class LockRow extends React.Component {
    render() {
        const { isSelected, onSelectLockClicked } = this.props;
        const { id, number } = this.props.number;

        return (
             <tr >
                
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'warning' : 'primary'} w-25`} onClick={onSelectLockClicked}>
                        {isSelected ? 'Unlock' : 'Lock'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default LockRow;