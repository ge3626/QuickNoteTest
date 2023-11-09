import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';

import { notesData, notesGrid } from '../data/dummy/dummy';
import { Header } from '../components';

const NoteTable = () => {
  const selectionsettings = { persistSelection: false };
  const toolbarOptions = ['Delete', 'Search'];
  const editing = { allowDeleting: true, allowEditing: false };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-slate-800">
      <Header category="Page" title="Notes" />
      <GridComponent
        dataSource={notesData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {notesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Sort, Filter, Search]} />
      </GridComponent>
    </div>
  );
};

export default NoteTable;