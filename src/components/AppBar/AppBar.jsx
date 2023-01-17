import { SidebarContainer } from './AppBar.styled';
import { UserMen } from 'components/UserMenu/UserMenu';
// import { FaUserCircle } from 'react-icons/fa';

export const AppBar = ({ user }) => {
  return (
    <SidebarContainer>
      <UserMen user={user} />
    </SidebarContainer>
  );
};
