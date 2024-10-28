import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
    {
      key: 'sub1',
      label: 'Films',
      icon: <MailOutlined />,
      children: [
        {
          key: '1',
          label: 'Now Playing',
          path: '/',
        },
        {
          key: '2',
          label: 'Popular',
          path: '/popular',
        },
        {
          key: '3',
          label: 'Top Rated',
          path: '/top-rated',
        },
        {
          key: '4',
          label: 'Upcoming',
          path: '/up-coming',
        },
      ],
    },
  ];
const CustomMenu = () => {
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate();
  const onClick = (e) => {
    const selectedItem = items[0].children.find(item => item.key === e.key);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
    setCurrent(e.key);
  };

  return (
      <Menu
      className='h-screen overflow-y-auto'
        theme={'dark'}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
  );
};
export default CustomMenu;