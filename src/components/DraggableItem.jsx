import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItem = (props) => {
  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
        {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <div className={`w-[230px] h-16 ${props.color} rounded-xl flex items-center justify-center`}>
                    <span>
                        {props.name}
                    </span>
                </div>
            </div>
        )}
    </Draggable>
  )
}

export default DraggableItem;