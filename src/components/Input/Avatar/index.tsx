import { FC } from 'react';

interface IUserAvatarProps {
  url: string;
  pname: string;
  avatarHeight?: number;
  avatarWidth?: number;
}

export const UserAvatar: FC<IUserAvatarProps> = ({
  url,
  pname,
  avatarHeight = 20,
  avatarWidth = 20,
}) => {
  return (
    <a href="#" className="flex-shrink-0 group block">
      <div className="flex items-center">
        <img
          width={avatarWidth}
          height={avatarHeight}
          className="inline-block rounded-full"
          src={
            url ? url : 'https://assets.web.numanshq.com/default-avatars/1.svg'
          }
          alt="Profile Pic"
        />
        <div className="ml-1.5">
          <p className="body-base-medium text-gray-700 group-hover:text-gray-900">
            {pname}
          </p>
        </div>
      </div>
    </a>
  );
};
