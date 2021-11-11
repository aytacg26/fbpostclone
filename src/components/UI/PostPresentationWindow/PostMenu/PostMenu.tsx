import { forwardRef } from 'react';
import MenuCard from '../../MenuCard/MenuCard';
import MenuButton from '../../MenuButton/MenuButton';
import { BsSave2 } from 'react-icons/bs';
import { IoMdNotificationsOutline, IoMdTime } from 'react-icons/io';
// import { RiShieldStarLine } from 'react-icons/ri';
import { CgCloseR } from 'react-icons/cg';
import { VscCloseAll } from 'react-icons/vsc';
import { GoReport } from 'react-icons/go';

const MenuCardItems = [
  {
    id: 'menu-item-0001',
    title: 'Save Post',
    icon: <BsSave2 />,
    buttonInfoText: 'Add this to your saved items.',
    hasBottomBorder: true,
  },
  {
    id: 'menu-item-0002',
    title: 'Turn on notifications for this post',
    icon: <IoMdNotificationsOutline />,
    hasBottomBorder: true,
  },

  {
    id: 'menu-item-0003',
    title: 'Hide post',
    icon: <CgCloseR />,
    buttonInfoText: 'See fewer posts like this.',
  },
  {
    id: 'menu-item-0004',
    title: 'Snooze "Post User" for 30 days',
    icon: <IoMdTime />,
    buttonInfoText: 'Temporarily stop seeing posts.',
  },
  {
    id: 'menu-item-0005',
    title: 'Unfollow "Post User"',
    icon: <VscCloseAll />,
    buttonInfoText: 'Stop seeing posts but stay friends.',
  },
  {
    id: 'menu-item-0006',
    title: 'Find support or report post"',
    icon: <GoReport />,
    buttonInfoText: "I'm concerned about this post.",
  },
];

//TODO : Refactor, there is difference between user and group menus and it takes name dynamically
const PostMenu = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MenuCard top={50} right={8} ref={ref}>
      {MenuCardItems.map((item) => (
        <MenuButton {...item} padding={'10px 0'} key={item.id} />
      ))}
    </MenuCard>
  );
});

export default PostMenu;
