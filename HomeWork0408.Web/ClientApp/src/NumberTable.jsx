import React from 'react';
import NumberRow from './NumberRow';
import LockRow from './LockRow';
import Add from './Add';
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';

class NumberTable extends React.Component {

    state = {
        newNumber: {
            id: uuidv4(),
            number: ''
        },
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClicked = () => {
        const number = {
            id: uuidv4(),
            number: Math.floor(Math.random() * 500)
        }

        this.setState({ numbers : [ ...this.state.numbers, number ] })

        this.setState({ newNumber: number })

    }

    onSelectClicked = (n) => {

        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num.id !== n.id) });
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }
    }

    onSelectLockClicked = (n) => {

        

        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(n)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(num => num.id !== n.id) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, n] });
        }
    }


    render() {
        const { newNumber, numbers, selectedNumbers, lockedNumbers } = this.state;
        return (
            <div className='container' style={{ marginTop: 60 }}>
                <h2>Selected Numbers Count: {selectedNumbers.length}</h2>
                <h2>Locked Numbers Count: {lockedNumbers.length}</h2>
                <Add
                    onAddClicked={this.onAddClicked}
                />
               
                {!numbers.length && <h1>No numbers added yet! Go ahead and add some....</h1>}

                {Boolean(numbers.length) && <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numbers.map(n => <NumberRow key={n.id}
                            number={n}
                            canSelect={!lockedNumbers.includes(n)}
                            isSelected={selectedNumbers.includes(n)}
                            onSelectClicked={() => this.onSelectClicked(n)} />)}
                    </tbody>
                </table>}

                {Boolean(selectedNumbers.length) && <table className='table table-hover table-bordered'>

                    <thead>Seleted Numbers</thead>
                    <tbody>
                        {selectedNumbers.map(n2 => <LockRow key={n2.id}
                            number={n2}
                            isSelected={lockedNumbers.includes(n2)}
                            onSelectLockClicked={() => this.onSelectLockClicked(n2)} />)}
                    </tbody>
                </table>}

            </div>
        )
    }
}

export default NumberTable;