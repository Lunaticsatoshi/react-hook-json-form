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
export declare const AddressInput: ({ legend, showLegend, onChange, defaultAddress, selectedValue, }: IAddressInput) => JSX.Element;
export default AddressInput;
