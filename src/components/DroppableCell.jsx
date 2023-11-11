import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const DroppableCell = (props) => {
  return (
    <div className={`${props.height} border-dashed border-2 border-black rounded ${props.colSpan}`}>
        <Droppable droppableId={props.id}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <div className={`w-full ${props.height}`}>
                        {props.name}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>   
    </div>
    )
}

export default DroppableCell