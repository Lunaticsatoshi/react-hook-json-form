export declare type Address = {
    address1?: string;
    address2?: string;
    addressType?: string;
    city?: string;
    country?: string;
    district?: string;
    firstName?: string;
    lastName?: string;
    locationName?: string;
    mobile?: string;
    pincode?: string;
    state?: string;
};
interface IAddressInput {
    legend: string;
    showLegend?: boolean;
    onChange: (arg: any) => void;
    defaultAddress: Address;
    selectedValue: Address;
}
export declare const AddressInput: ({ legend, showLegend, onChange, defaultAddress, selectedValue, }: IAddressInput) => JSX.Element;
export default AddressInput;
