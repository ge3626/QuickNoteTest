import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { DraggableItem, DroppableCell } from '../components';

const datas = [
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

const FinalNote = () => {
  const [itemContainer, setItemContainer] = useState([]);
  const [gridItemContainer, setGridItemContainer] = useState([]);

  const onDragEnd = (result) => {
    const {source, destination} = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    let add;
    let unactive = itemContainer;
    let active = gridItemContainer;

    if (source.droppableId === "ItemList") {
      add = unactive[source.index];
      unactive.splice(source.index, 1);
    } else {
      add = active[source.index];
      active.splice(source.index, 1);
    }

    if (destination.droppableId === "GridArea") {
      unactive.splice(destination.index, 0, add);
    } else {
      active.splice(destination.index, 0, add);
    }

    setGridItemContainer(active);
    setItemContainer(unactive);
  }

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
                  <DroppableCell id="cel11" height="h-16" colSpan="col-span-2" name="1" index={0}></DroppableCell>
                  <DroppableCell id="cell2" height="h-16" colSpan="col-span-1" name="2" index={1}></DroppableCell>
                  <DroppableCell id="cell3" height="h-24" colSpan="col-span-3" name="3" index={2}></DroppableCell>
                  <DroppableCell id="cell4" height="h-72" colSpan="col-span-3" name="4" index={3}></DroppableCell>
                  <DroppableCell id="cell5" height="h-40" colSpan="col-span-3" name="5" index={4}></DroppableCell>
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
                  {datas.map((data, index) => (
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