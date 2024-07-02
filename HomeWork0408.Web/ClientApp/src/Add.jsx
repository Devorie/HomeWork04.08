import React from 'react';

class Add extends React.Component {

    render() {
        const { onAddClicked } = this.props;
        return (
            <>
                <div className="row bg-light p-4 rounded">
                    <div className="col-md-1 w-100">
                        <button className="btn btn-success btn-lg w-100" onClick={onAddClicked}>Add</button>
                    </div>
                </div>
            </>
        );
    }
}


export default Add;