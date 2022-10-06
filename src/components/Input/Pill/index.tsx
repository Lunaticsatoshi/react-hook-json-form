import { FC, ReactNode } from 'react';
import { X } from 'phosphor-react';

import { UserAvatar } from '../Avatar';
import { SingleCheckbox } from '../Checkbox';

export interface IPillProps {
  text: string;
  leftIcon?: ReactNode;
  onClick?: () => any;
  checked?: boolean;
}

interface IUserPillProps {
  id: string;
  url: string;
  name: string;
  onClick: (id: string) => unknown;
}

interface IUserOptionPillProps {
  profilePicUrl: string;
  name: string;
  showCheckbox?: boolean;
  email: string;
  selected?: boolean | undefined;
  shouldShowBorder?: boolean;
}

export const CheckboxPill: FC<IPillProps> = ({
  text,
  onClick = () => null,
  checked,
}: IPillProps) => {
  return (
    <div
      onClick={onClick}
      className={`shadow-xs checkbox-pill-container border-2 cursor-pointer text-sm p-2 rounded-full ${
        checked
          ? 'bg-blue-50 border-blue-400'
          : 'hover:border-grey-900 border-grey-200'
      }`}
    >
      <div className="flex items-center">
        <input
          checked={checked}
          onChange={onClick}
          className={`w-5 h-5 body-base-regular border hover:border-grey-900 border-grey-200 focus:ring-2 focus:border-grey-900 focus:ring-blue-200 focus:outline-none rounded-full disabled:border-grey-100 placeholder-grey-500 disabled:placeholder-grey-400 disabled:cursor-not-allowed transition checkbox-pill`}
          type="checkbox"
        />
        <span className="ml-2 mr-1">{text}</span>
      </div>
    </div>
  );
};

export const UserPill: FC<IUserPillProps> = ({
  id,
  url,
  name,
  onClick,
}: IUserPillProps) => {
  return (
    <div className="rounded-full m-1 flex items-center space-x-2 bg-grey-50 border-2 border-grey-100 px-1.5 py-1">
      <UserAvatar url={url} pname={name} />
      <div className="ml-1.5">
        <X
          className="cursor-pointer text-grey-400 hover:text-grey-900"
          onClick={() => onClick(id)}
          height={14}
          width={14}
        />
      </div>
    </div>
  );
};

export const UserOptionPill: FC<IUserOptionPillProps> = ({
  profilePicUrl,
  name,
  email,
  showCheckbox = false,
  selected = false,
}: IUserOptionPillProps) => {
  return (
    <div className={`flex rounded-md hover:bg-grey-50 `}>
      <div className={`flex w-full py-2 px-2`}>
        <div>
          <img
            src={
              profilePicUrl ||
              `https://assets.web.numanshq.com/default-avatars/1.svg`
            }
            className="w-9 min-w-9 h-9 rounded-full"
            alt="numans"
          />
        </div>
        <div className="inline-flex flex-col ml-2">
          <span className="body-base-medium text-base  text-grey-900">
            {name}
          </span>
          {email ? (
            <span className="body-sm  text-grey-500">{email}</span>
          ) : (
            <span className="body-sm  text-grey-400">No email available</span>
          )}
        </div>
        {showCheckbox ? (
          <div className="flex items-center ml-auto">
            <SingleCheckbox checked={selected} onChange={() => null} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
