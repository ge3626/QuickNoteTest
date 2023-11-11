import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItemList = (props) => {
  return (
    <div className="w-[300px] h-[500px] m-2">
        <div className="w-full h-full bg-slate-400 rounded">
            {props.items.map((item, index)=>(
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided)=>(
                        <div ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                        className="bg-slate-500"
                        >
                            {item.name}
                        </div>
                    )}
                </Draggable>
            ))}
        </div>
    </div>
  )
}

export default DraggableItemList;