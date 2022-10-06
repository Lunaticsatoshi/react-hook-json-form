import { forwardRef, HTMLInputTypeAttribute } from 'react';
import { Paperclip, Upload, Info } from 'phosphor-react';
export interface IFileInputProps {
  customClasses?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  labelPosition?: 'top' | 'side';
  error: string | undefined;
  onClick: () => unknown;
}

export const FileInput = forwardRef<HTMLInputElement, IFileInputProps>(
  ({ labelPosition, label, name, error, onClick }) => {
    return (
      <div className={labelPosition === 'side' ? 'flex items-center' : ''}>
        {label && (
          <label
            htmlFor={name}
            className={`block text-xs body-sm whitespace-nowrap text-grey-700 mb-1 ${
              labelPosition === 'side' ? 'mr-10' : ''
            }`}
          >
            {label}
          </label>
        )}
        <div className="flex flex-1">
          <div className="flex w-full px-6 py-4 justify-between items-center bg-blue-50 rounded cursor-pointer">
            <div className="flex">
              <span>
                <Upload size={36} color="#174291" />
              </span>
              <div className="ml-4">
                <p className="text-blue-700 text-base">Upload Documents</p>
                <p className="text-blue-500 text-xs">
                  Click to upload any image or document files
                </p>
              </div>
            </div>
            <div>
              <div
                className="relative hover:cursor-pointer inline-flex items-center justify-center transition ease-linear border-2 focus:outline-none focus:ring-2 focus:ring-blue-200 body-base-medium bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-600 text-white focus:border-white focus:bg-blue-500 px-4 py-3 rounded-lg"
                onClick={onClick}
              >
                <Paperclip width={16} height={16} color="white" />
                <span className="pl-2 leading-4 text-base whitespace-nowrap">
                  Select Files
                </span>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
            <Info size={16} className="mr-1" />
            {error}
          </div>
        )}
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';
