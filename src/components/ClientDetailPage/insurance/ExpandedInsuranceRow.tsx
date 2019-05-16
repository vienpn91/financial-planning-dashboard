import React from 'react';
import PremiumFeeDetailsTable, { PremiumFeeDetail } from './PremiumFeeDetailsTable';
import CoverDetailsTable, { CoverDetail } from './CoverDetailsTable';

export interface LiabilityProps {
  coverDetails: CoverDetail[];
  premiumFeeDetails: PremiumFeeDetail[];
}

const ExpandedInsuranceRow: React.FC<LiabilityProps> = (props) => {
  const { coverDetails, premiumFeeDetails } = props;

  return (
    <>
      <CoverDetailsTable data={coverDetails} />
      <PremiumFeeDetailsTable data={premiumFeeDetails} />
    </>
  );
};

export default ExpandedInsuranceRow;
