import React, { PureComponent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import BasicInformationTable from './basicInformation/BasicInformationTable';
import IncomeTable from './income/IncomeTable';
import ExpenditureTable from './expenditure/ExpenditureTable';
import AssetsTable from './assets/AssetsTable';
import LiabilitiesTable from './liabilities/LiabilitiesTable';
import InsuranceTable from './insurance/InsuranceTable';
import { Form, Formik, FormikActions, FormikProps } from 'formik';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { RootState, StandardAction } from '../../reducers/reducerTypes';
import { find } from 'lodash';
import {
  Client,
  Tag,
  FetchDataEntryPayload,
  FetchDataEntryAction,
  ClientActions,
  Table,
  DataEntry,
} from '../../reducers/client';

interface DataEntryProps {
  clientId: string;
  tagName: string;
  tabName: string;

  tables?: Table;
  fetchDataEntry?: (payload: FetchDataEntryPayload) => FetchDataEntryAction;
}

class DataEntryComponent extends PureComponent<DataEntryProps> {
  public componentDidMount() {
    const { clientId, tagName, tabName, fetchDataEntry } = this.props;

    if (clientId && tagName && tabName && fetchDataEntry) {
      this.fetchDataEntry({ clientId, tagName, tabName });
    }
  }

  public componentDidUpdate(prevProps: Readonly<DataEntryProps>, prevState: Readonly<{}>, snapshot?: any): void {
    const { clientId, tagName, tabName } = this.props;

    if (prevProps.clientId !== clientId || prevProps.tagName !== tagName || prevProps.tabName !== tabName) {
      this.fetchDataEntry({ clientId, tagName, tabName });
    }
  }

  public fetchDataEntry = (params: { clientId: string; tagName: string; tabName: string }) => {
    const { fetchDataEntry } = this.props;

    if (fetchDataEntry) {
      fetchDataEntry(params);
    }
  }

  public render() {
    const { tables } = this.props;

    return (
      <>
        <Formik
          onSubmit={(values: any, actions: FormikActions<any>) => {
            console.log({ values });
          }}
          initialValues={tables}
          enableReinitialize
          render={(formProps: FormikProps<any>) => (
            <Form>
              <BasicInformationTable data={[]} formProps={formProps} />
              {/*<IncomeTable formProps={formProps} />*/}
              {/*<ExpenditureTable />*/}
              {/*<AssetsTable />*/}
              {/*<LiabilitiesTable />*/}
              {/*<InsuranceTable />*/}

              {/*<div>*/}
              {/*  <Button htmlType={'button'} type={'default'}>*/}
              {/*    Discard*/}
              {/*  </Button>*/}
              {/*  <Button htmlType={'submit'} type={'primary'}>*/}
              {/*    Submit*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </Form>
          )}
        />
        <Formik
          onSubmit={(values: any, actions: FormikActions<any>) => {
            console.log({ values });
          }}
          initialValues={tables}
          enableReinitialize
          render={(formProps: FormikProps<any>) => (
            <Form>
              {/*<BasicInformationTable data={[]} formProps={formProps} />*/}
              <IncomeTable formProps={formProps} />
              {/*<ExpenditureTable />*/}
              {/*<AssetsTable />*/}
              {/*<LiabilitiesTable />*/}
              {/*<InsuranceTable />*/}

              {/*<div>*/}
              {/*  <Button htmlType={'button'} type={'default'}>*/}
              {/*    Discard*/}
              {/*  </Button>*/}
              {/*  <Button htmlType={'submit'} type={'primary'}>*/}
              {/*    Submit*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </Form>
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: DataEntryProps) => {
  let tables;
  const clients = state.client.get('clients');
  const clientId = ownProps.clientId;
  const tagName = ownProps.tagName;
  const tabName = ownProps.tabName;
  const client: Client | undefined = find(clients, (c: Client) => c.clientId === clientId);

  if (tabName && client && client.tagList && client.tagList.length > 0) {
    const tag: Tag | undefined = find(client.tagList, (t: Tag) => t.name === tagName);
    if (tag && tag.dataEntries && tag.dataEntries.length > 0) {
      const dataEntry: DataEntry | undefined = find(tag.dataEntries, (d: DataEntry) => d.tabName === tabName);
      if (dataEntry) {
        tables = dataEntry.tables;
      }
    }
  }

  return {
    tables,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<StandardAction<any>>) =>
  bindActionCreators(
    {
      fetchDataEntry: ClientActions.fetchDataEntry,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataEntryComponent);
