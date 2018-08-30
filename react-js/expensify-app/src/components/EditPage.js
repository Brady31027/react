import React from 'react';

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
            <p>edit page {props.match.params.id}</p>
        </div>
    );
}

export default EditPage;