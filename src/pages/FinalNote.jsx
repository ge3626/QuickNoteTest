import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { DraggableItem, DroppableCell } from '../components';

const itemDatas = [
  {
    id: 1,
    name: "주제",
    color: "bg-red-500",
  },
  {
    id: 2,
    name: "날짜",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    name: "세 줄 요약",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "회의 내용",
    color: "bg-blue-500",
  },
  {
    id: 5,
    name: "To Do List",
    color: "bg-purple-500",
  }
];

const gridCellDatas = [
  {
    id: "cell1",
    height: "h-16",
    colSpan: "col-span-2",
  },
  {
    id: "cell2",
    height: "h-16",
    colSpan: "col-span-1",
  },
  {
    id: "cell3",
    height: "h-24",
    colSpan: "col-span-3",
  },
  {
    id: "cell4",
    height: "h-72",
    colSpan: "col-span-3",
  },
  {
    id: "cell5",
    height: "h-40",
    colSpan: "col-span-3",
  },
];

const FinalNote = () => {
  const [itemContainer, setItemContainer] = useState(itemDatas);
  const [gridItemContainer, setGridItemContainer] = useState(Array(5).fill([]).map(() => [...itemDatas]));

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    if (!destination) return;
  
    const newGridItemContainer = [...gridItemContainer]; // Shallow copy of the gridItemContainer
  
    const sourceData = source.droppableId === 'ItemList' ? itemContainer : newGridItemContainer[source.droppableId];
    const destinationData = destination.droppableId === 'ItemList' ? itemContainer : newGridItemContainer[destination.droppableId];
  
    const [removed] = sourceData.splice(source.index, 1);
    destinationData.splice(destination.index, 0, removed);
  
    setGridItemContainer(newGridItemContainer); // Update grid container state
    setItemContainer(itemContainer); // Update item container state
  };
  
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-[1540px] bg-white flex items-center gap-x-4">
        <Droppable droppableId="GridArea">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="w-[800px] h-[800px] bg-gray-100 m-8 pt-8 rounded-3xl shadow-xl text-center">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
                  회의 구성
                </span>
                <div className="grid gap-4 grid-cols-3 m-8">
                  {gridItemContainer.map((cellData, cellIndex) => (
                    <DroppableCell key={`cell-${cellIndex}`} id={cellIndex} height={gridCellDatas[cellIndex].height} colSpan={gridCellDatas[cellIndex].colSpan} name={cellIndex + 1}>
                      {cellData.map((data, index) => (
                        <DraggableItem key={data.id} id={data.id.toString()} index={index} color={data.color} name={data.name}/>
                      ))}
                    </DroppableCell>
                  ))}
                </div>  
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="ItemList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="w-[300px] h-[420px] bg-gray-100 m-4 rounded-xl shadow-xl flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-y-2">
                  {itemContainer.map((data, index) => (
                    <DraggableItem key={data.id} id={data.id} index={index} color={data.color} name={data.name} />
                  ))}
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default FinalNote;
