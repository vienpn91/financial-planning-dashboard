import React, { PureComponent } from 'react';
import BasicInformationTable from './tables/BasicInformationTable';
import IncomeTable from './tables/IncomeTable';
import ExpenditureTable from './tables/ExpenditureTable';
import AssetsTable from './tables/AssetsTable';

interface DataEntryProps {
  tabName: string;
}

class DataEntry extends PureComponent<DataEntryProps> {
  public render() {
    return (
      <div>
        <BasicInformationTable />
        <IncomeTable />
        <ExpenditureTable />
        <AssetsTable />
      </div>
    );
  }
}

export default DataEntry;