import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Sort, Filter, Search, Edit } from '@syncfusion/ej2-react-grids';
import { garbageData, notesGrid } from '../data/dummy/dummy';
import { Header } from '../components';

const Garbage = () => {
    const selectionsettings = { persistSelection: false };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: false };
  
    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Disposed Notes" />
        <GridComponent 
          dataSource={garbageData}
          enableHover={false}
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          selectionSettings={selectionsettings}
          editSettings={editing}
          toolbar={toolbarOptions}
          width="auto"
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            
            {notesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    );
}

export default Garbage