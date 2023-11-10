import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Walmart",
    color: "bg-red-600",
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    color: "bg-purple-600",
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    color: "bg-yellow-300",
    tint: 3,
  },
  {
    id: 4,
    name: "test4",
    color: "bg-green-500",
    tint: 4,
  },
  {
    id: 5,
    name: "test5",
    color: "bg-blue-600",
    tint: 5,
  }
];

const FinalNote = () => {

    const [stores, setStores] = useState(DATA);
  
    const handleDragAndDrop = (results) => {
      const { source, destination, type } = results;
  
      if (!destination) return;
  
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;
  
      if (type === "group") {
        const reorderedStores = [...stores];
  
        const storeSourceIndex = source.index;
        const storeDestinatonIndex = destination.index;
  
        const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
        reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
  
        return setStores(reorderedStores);
      }
      const itemSourceIndex = source.index;
      const itemDestinationIndex = destination.index;
  
      const storeSourceIndex = stores.findIndex(
        (store) => store.id === source.droppableId
      );
      const storeDestinationIndex = stores.findIndex(
        (store) => store.id === destination.droppableId
      );
  
      const newSourceItems = [...stores[storeSourceIndex].items];
      const newDestinationItems =
        source.droppableId !== destination.droppableId
          ? [...stores[storeDestinationIndex].items]
          : newSourceItems;
  
      const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
      newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);
  
      const newStores = [...stores];
  
      newStores[storeSourceIndex] = {
        ...stores[storeSourceIndex],
        items: newSourceItems,
      };
      newStores[storeDestinationIndex] = {
        ...stores[storeDestinationIndex],
        items: newDestinationItems,
      };
  
      setStores(newStores);
    };
  
    return (
      <div className="w-screen flex items-center select-none">
        <div className="flex justify-center items-center ml-[100px] mt-[100px]">
          <div className="w-[700px] h-[600px] rounded m-4 shadow-xl">
            <div className="w-full h-full bg-white p-10 rounded">
              <DragDropContext onDragEnd={handleDragAndDrop}>
                <div className="text-center text-[20px] font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
                  <h1>회의 구성 편집</h1>
                </div>
                <Droppable droppableId="ROOT" type="group">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-2 gap-1">
                      {stores.map((store, index) => (
                        <Draggable
                          draggableId={store.id}
                          index={index}
                          key={store.id}
                        >
                          {(provided) => (
                            <div
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              className={index < 2 ? "" : "col-span-2"}
                            >
                              <StoreList {...store} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
          <div className="w-[300px] h-[500px] m-2">
            <div className="w-full h-full bg-slate-400 rounded">
                <DragDropContext onDragEnd={handleDragAndDrop}>
                  <Droppable droppableId="ROOT" type="group">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef} className="flex-col gap-2">
                        {stores.map((store, index) => (
                          <Draggable
                            draggableId={store.id}
                            index={index}
                            key={store.id}
                          >
                            {(provided) => (
                              <div
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                              >
                                <StoreList {...store} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  function StoreList({ name, color, id }) {
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className={`text-center p-2 ${ color } rounded w-full`}>
              <h3>{name}</h3>
            </div>
              {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }

export default FinalNote;