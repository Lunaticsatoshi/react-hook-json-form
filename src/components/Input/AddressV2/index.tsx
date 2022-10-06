import { usePlacesWidget } from 'react-google-autocomplete';
import { FieldErrors } from 'react-hook-form';

import { Address } from '../Address';

interface IAddressInput {
  legend: string;
  showLegend?: boolean;
  onChange: (arg: any) => void;
  defaultAddress: Address;
  selectedValue: Address;
  errors?: FieldErrors<Address>;
}

const GENERAL_CLASSES =
  'border-2 focus:border-blue-200 hover:border-grey-800 hover:z-20 duration-200 relative block w-full rounded-none bg-transparent focus:z-10 border-gray-200 body-base-regular';

export const AddressInput = ({
  legend,
  showLegend = false,
  onChange,
  defaultAddress,
  selectedValue,
}: IAddressInput) => {
  const { ref: placeAutocompleteRef } = usePlacesWidget({
    apiKey: `${import.meta.env.VITE_PUBLIC_GOOGLE_PLACES_API_KEY}`,
    onPlaceSelected: (place: {
      formatted_address: string;
      address_components: { long_name: string; types: string[] }[];
    }) => {
      const address: typeof place.address_components = [];
      let pincode: typeof place.address_components[0] | null = null as any;
      let city: typeof place.address_components[0] | null = null as any;
      let country: typeof place.address_components[0] | null = null as any;
      let state: typeof place.address_components[0] | null = null as any;

      place.address_components.forEach((component) => {
        switch (true) {
          case component.types.includes('postal_code'):
            pincode = component;
            break;
          case component.types.includes('locality') &&
            component.types.includes('political'):
            city = component;
            break;
          case component.types.includes('country') &&
            component.types.includes('political'):
            country = component;
            break;
          case component.types.includes('administrative_area_level_1') &&
            component.types.includes('political'):
            state = component;
            break;
          default:
            address.push(component);
        }
      });

      const newState: Record<string, any> = {};
      newState.address2 = address.map((ele) => ele.long_name).join(', ');
      newState.city = city?.long_name;
      newState.pincode = pincode?.long_name;
      newState.country = country?.long_name;
      newState.state = state?.long_name;

      onChange(newState);
    },
    options: {
      types: [],
      fields: [
        'address_components',
        'geometry.location',
        'place_id',
        'formatted_address',
      ],
    },
  });

  return (
    <fieldset>
      {showLegend && (
        <legend className="block text-xs body-sm whitespace-nowrap text-grey-700 mb-1.5">
          {legend}
        </legend>
      )}
      <div className="bg-white rounded-md shadow-sm -space-y-2px">
        <div>
          <label htmlFor={`${legend}-address2`} className="sr-only">
            Address Line 2
          </label>
          <input
            type="text"
            id={`${legend}-address2`}
            ref={placeAutocompleteRef as any}
            defaultValue={defaultAddress.address2 ?? ''}
            placeholder="Street Address, Locality "
            style={{ boxShadow: 'none' }}
            className={`${GENERAL_CLASSES} rounded-t-md`}
            // error={errors.address1?.message}
            // {...register('address.address1', {
            //   required: 'Please enter employee email.',
            // })}
          />
        </div>
        <div className="-mt-1">
          <label htmlFor={`${legend}-address1`} className="sr-only">
            Address Line 1
          </label>
          <input
            type="text"
            name="address1"
            id={`${legend}-address1`}
            value={selectedValue?.address1 || defaultAddress?.address1 || ''}
            placeholder="Apt / House Number, Building Name"
            style={{ boxShadow: 'none' }}
            className={`${GENERAL_CLASSES}`}
            onChange={(e) =>
              onChange({ ...selectedValue, address1: e.target.value })
            }
          />
        </div>
        <div className="flex -space-x-px">
          <div className="w-1/3 flex-1 min-w-0">
            <label htmlFor={`${legend}-city`} className="sr-only">
              City
            </label>
            <input
              type="text"
              name="city"
              id={`${legend}-city`}
              style={{ boxShadow: 'none' }}
              className={`${GENERAL_CLASSES} rounded-bl-md`}
              value={selectedValue?.city || defaultAddress?.city || ''}
              placeholder="City"
              onChange={(e) =>
                onChange({ ...selectedValue, city: e.target.value })
              }
            />
          </div>
          <div className="w-1/3 flex-1 min-w-0">
            <label htmlFor={`${legend}-state`} className="sr-only">
              State
            </label>
            <input
              name="state"
              id={`${legend}-state`}
              className={`${GENERAL_CLASSES}`}
              type="text"
              value={selectedValue?.state || defaultAddress?.state || ''}
              style={{ boxShadow: 'none' }}
              placeholder="State"
              onChange={(e) =>
                onChange({ ...selectedValue, state: e.target.value })
              }
            />
          </div>
          <div className="flex-1 min-w-0">
            <label htmlFor={`${legend}-pincode`} className="sr-only">
              Pincode
            </label>
            <input
              value={selectedValue?.pincode || defaultAddress?.pincode || ''}
              placeholder="PIN Code"
              type="text"
              name="pincode"
              id={`${legend}-pincode`}
              style={{ boxShadow: 'none' }}
              className={`${GENERAL_CLASSES} rounded-br-md`}
              onChange={(e) =>
                onChange({ ...selectedValue, pincode: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default AddressInput;
