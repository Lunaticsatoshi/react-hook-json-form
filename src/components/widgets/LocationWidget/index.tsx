import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';

import { AddressInputV2 } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const LocationWidget: FC<IBaseWidgetProps> = ({
  errors,
  control,
  setValue,
  hideError,
  name,
  label,
}) => {
  const [address, setAddress] = useState({});
  return (
    <div className="">
      <Controller
        control={control}
        name={name}
        render={() => (
          <div>
            <AddressInputV2
              defaultAddress={{}}
              legend={label || ''}
              showLegend={true}
              errors={hideError ? undefined : errors[name]?.message}
              selectedValue={address ?? {}}
              onChange={(selectedAddress) => {
                const selectedAddressString = Object.keys(selectedAddress)
                  .map((key) => selectedAddress[key])
                  .join(',');
                setAddress(selectedAddress);
                setValue(name, selectedAddressString);
              }}
            />
          </div>
        )}
      />
      {/* <span className="block body-sm font-medium text-gray-700 mt-1.5">
        The item will be shipped to this address
      </span> */}
    </div>
  );
};
