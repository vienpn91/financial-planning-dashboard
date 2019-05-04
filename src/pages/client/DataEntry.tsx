import React, { PureComponent } from 'react';
import BasicInformationTable from './basicInformation/BasicInformationTable';
import IncomeTable from './income/IncomeTable';
import ExpenditureTable from './expenditure/ExpenditureTable';
import AssetsTable from './assets/AssetsTable';
import LiabilitiesTable from './liabilities/LiabilitiesTable';
import InsuranceTable from './insurance/InsuranceTable';
import {Form, Formik, FormikActions, FormikFormProps, FormikProps} from 'formik';
import { Button } from 'antd';

interface DataEntryProps {
  tabName: string;
}

class DataEntry extends PureComponent<DataEntryProps> {
  public render() {
    return (
      <>
        <Formik
          onSubmit={(values: any, actions: FormikActions<any>) => {
            console.log({ values });
          }}
          initialValues={{ income: [] }}
          enableReinitialize
          render={(formProps: FormikProps<any>) => (
            <Form>
              <BasicInformationTable />
              <IncomeTable formProps={formProps} />
              <ExpenditureTable />
              <AssetsTable />
              <LiabilitiesTable />
              <InsuranceTable />

              <div>
                <Button htmlType={'button'} type={'default'}>
                  Discard
                </Button>
                <Button htmlType={'submit'} type={'primary'}>
                  Submit
                </Button>
              </div>
            </Form>
          )}
        />
      </>
    );
  }
}

export default DataEntry;
