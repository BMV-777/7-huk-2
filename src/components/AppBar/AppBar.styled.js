import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 100vh;
  ${'' /* background-color: tomato; */}
  height: 320px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

// export const UserMenu = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   padding: 8px 12px;
//   outline: 2px solid black;
//   :hover {
//     background-color: lightblue;
//   }

// `;

// export const Avatar = styled.div`
//   ${
//     '' /* width: 50px;
//   height: 50px; */
//   }
//   ${'' /* background-color: black; */}
//   border-radius: 50%;
//   border: 4px solid ${p => (p.isOnline ? 'green' : ' red')};
//   display: inline-flex;

//   ${
//     '' /* > svg {
//     display: block;
//   } */
//   };
// `;

// export const Popover = styled.div`

//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translateX(100%);
//   height: 100%;
//   background-color: blue;
//   color: white;
//   padding: 8px;

//   outline: 2px solid black;
// `;

// export const UserName = styled.p`
//   color: #212121;
// `;

// export const PointsLabel = styled.p`
//   color: white;
//   font-size: 8px;
//   line-height: 1;
// `;

// export const Points = styled.p`
//   line-height: 1.5;
//   font-size: 12px;
//   font-weight: 700;

//   color: ${p => (p.variant === 'total' ? 'orange' : 'red')};
// `;
