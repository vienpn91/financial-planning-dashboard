import React from 'react';
import { get } from 'lodash';

export interface BasicInformation {
  description: string;
  expandable: {
    riskProfile: string;
    lookingForCoupleAdvice?: boolean;
  };
}

const profileText = {
  defensive: 'defensive',
  highGrowth: 'high growth',
};

const ExpandedAssetsRow: React.FC<BasicInformation> = (props) => {
  const { expandable } = props;
  const { riskProfile, lookingForCoupleAdvice } = expandable;
  return (
    <div>
      <p>
        This super has a taxable component of <b>{get(profileText, riskProfile)}</b> and a tax-free component {' '}
        of <b>{get(profileText, riskProfile)}</b>
      </p>
      <p>This income generated is <b>15%</b> and comes with an insurance cost of <b>$4,500</b></p>
      <p>This rate terms are <b>15%</b> growth <b>10%</b> franked and <b>25%</b> contribution to income</p>
      <p>
        Client is seeking advice for <b>{lookingForCoupleAdvice ? 'couple' : 'couple'}</b>
      </p>
    </div>
  );
};

export default ExpandedAssetsRow;
