import BigNumber from 'bignumber.js';
import { utils } from 'ethers';
import React from 'react';
import { useAppSelector } from '../../hooks';
import { isMobileScreen } from '../../utils/isMobile';

const TruncatedAmount: React.FC<{ amount: BigNumber; isEthereum?: boolean }> = props => {
  const { amount, isEthereum } = props;
  const { mona, eth } = useAppSelector(state => state.application);
  const isMobile = isMobileScreen();

  const monaValue = new BigNumber(utils.formatEther(amount.toString())).toFixed(2);

  const ethValue = ((parseFloat(monaValue) * mona) / eth).toFixed(2);

  return (
    <>
      {isMobile ? (
        <>
          {`${monaValue}`} {isEthereum ? 'MONA' : 'F3M'}
        </>
      ) : (
        <>
          {isEthereum ? (
            <>
              {`${ethValue}`} ETH ({`${monaValue}`} MONA)
            </>
          ) : (
            <>{monaValue} F3M</>
          )}
        </>
      )}
    </>
  );
};
export default TruncatedAmount;
