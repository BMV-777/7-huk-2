import { useState } from 'react';
import {
  UserMenu,
  Avatar,
  UserName,
  Popover,
  PointsLabel,
  Points,
} from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';

export const UserMen = ({ user }) => {
  const [isPopover, setPopover] = useState(false);
  return (
    <UserMenu
      onMouseEnter={() => setPopover(true)}
      onMouseLeave={() => setPopover(false)}
    >
      <Avatar isOnline={user.isOnline}>
        <FaUserCircle size="40" />
      </Avatar>
      <UserName>{user.username}</UserName>
      {isPopover && (
        <Popover>
          <PointsLabel>Текущее кол-ство очков: </PointsLabel>
          <Points variant="total">{user.points.total}</Points>
          <PointsLabel>Нужно для слудущего уровня:</PointsLabel>
          <Points variant="required"> {user.points.required}</Points>
        </Popover>
      )}
    </UserMenu>
  );
};
