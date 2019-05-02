import React, { PureComponent } from 'react';
import BasicInformationTable from './basicInformation/BasicInformationTable';
import IncomeTable from './income/IncomeTable';
import ExpenditureTable from './expenditure/ExpenditureTable';
import AssetsTable from './assets/AssetsTable';
import LiabilitiesTable from './liabilities/LiabilitiesTable';
import InsuranceTable from './insurance/InsuranceTable';

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
        <LiabilitiesTable />
        <InsuranceTable />
      </div>
    );
  }
}

export default DataEntry;
