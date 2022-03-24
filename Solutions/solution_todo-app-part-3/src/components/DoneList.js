import React from "react";
import DoneItem from "./DoneItem";

const DoneList = props => {
    return (
        <div>
            {
                props.data.map(obj => {
                    return <DoneItem key={obj.id} content={obj.text} id={obj.id} delete={props.delete} />
                })
            }
        </div>
    );
}

export default DoneList;