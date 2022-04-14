import BigNumber from 'bignumber.js';
import { utils } from 'ethers';
import React from 'react';
import { useAppSelector } from '../../hooks';
import { isMobileScreen } from '../../utils/isMobile';

const TruncatedAmount: React.FC<{
  amount: BigNumber;
  isEthereum?: boolean;
  useErc20?: boolean;
}> = props => {
  const { amount, isEthereum, useErc20 } = props;
  const { mona, eth } = useAppSelector(state => state.application);
  const isMobile = isMobileScreen();

  const amountValue = new BigNumber(utils.formatEther(amount.toString())).toFixed(2);

  const ethValue = useErc20
    ? ((parseFloat(amountValue) * mona) / eth).toFixed(2)
    : ((parseFloat(amountValue) * eth) / mona).toFixed(2);

  return (
    <>
      {isMobile ? (
        <>
          {`${amountValue}`} {isEthereum ? 'MONA' : 'F3M'}
        </>
      ) : (
        <>
          {isEthereum ? (
            <>
              {useErc20 ? (
                <>
                  {`${ethValue}`} ETH ({`${amountValue}`} MONA)
                </>
              ) : (
                <>
                  {`${amountValue}`} ETH ({`${ethValue}`} MONA)
                </>
              )}
            </>
          ) : (
            <>{amountValue} F3M</>
          )}
        </>
      )}
    </>
  );
};
export default TruncatedAmount;
