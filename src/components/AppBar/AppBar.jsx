import {
  SidebarContainer,
  UserMenu,
  Avatar,
  UserName,
  Popover,
  PointsLabel,
  Points,
} from './AppBar.styled';
import { FaUserCircle } from 'react-icons/fa';

export const AppBar = ({ user }) => {
  return (
    <SidebarContainer>
      <UserMenu>
        <Avatar isOnline={user.isOnline}>
          <FaUserCircle size="40" />
        </Avatar>
        <UserName>{user.username}</UserName>
        <Popover>
          <PointsLabel>Текущее кол-ство очков: </PointsLabel>
          <Points variant="total">{user.points.total}</Points>
          <PointsLabel>Нужно для слудущего уровня:</PointsLabel>
          <Points variant="required"> {user.points.required}</Points>
        </Popover>
      </UserMenu>
    </SidebarContainer>
  );
};
