import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useRoleCheck from '../routes/useRoleCheck';

import { convertToBanglaYear } from '../utils/convertToBanglaYear';

const { Header, Sider, Content } = Layout;

const routeData = [
  {
    slug: '/dashboard',
    icon: 'fa-solid fa-home',
    text: 'Home',
    path: 'selected_articles.filter_by_date',
  },
  {
    slug: '/dashboard/add/news',
    icon: 'fa-solid fa-folder-plus',
    text: 'Add News',
    path: 'articles.store',
  },
  {
    slug: '/dashboard/news',
    icon: 'fa-solid fa-list',
    text: 'News',
    path: 'articles.index',
  },

  {
    slug: '/dashboard/selected',
    icon: 'fa-solid fa-list',
    text: 'Video Advertise',
    path: 'articles.index',
    submenu: [
      {
        slug: '/dashboard/selected/all',
        text: ' Advertise List',
        path: 'articles.index',
      },
      {
        slug: '/dashboard/selected/add',
        text: 'Add Advertise',
        path: 'articles.index',
      },
    ],
  },

  {
    slug: '/dashboard/category',
    icon: 'fa-solid fa-layer-group',
    text: 'Category',
    path: 'categories.index',
  },
  {
    slug: '/dashboard/videos',
    icon: 'fa-solid fa-video',
    text: 'Video',
    path: 'videos.index',
  },
  {
    slug: '/dashboard/users',
    icon: 'fa-solid fa-users',
    text: 'Users',
    path: 'users.index',
    submenu: [
      {
        slug: '/dashboard/users/all',
        text: 'All Users',
        path: 'users.index',
      },
      {
        slug: '/dashboard/users/create',
        text: 'Create User',
        path: 'users.store',
      },

      {
        slug: '/dashboard/users/role',
        text: 'Role',
        path: 'role.index',
      },
    ],
  },
  {
    slug: '/dashboard/setting',
    icon: 'fa-solid fa-gear',
    text: 'Setting',
    path: 'setting',
  },
  {
    slug: '/',
    icon: 'fa-solid fa-house-chimney-user',
    text: 'Home',
    path: 'setting',
  },
];

const DbLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role, loading } = useRoleCheck();

  if (loading) {
    return null;
  }

  const permissions = role.roles.permissions;

  const newArray = routeData.filter(item2 => {
    if (item2.submenu) {
      item2.submenu = item2.submenu.filter(subItem => {
        return permissions.some(item1 => item1.path === subItem.path);
      });
      return item2.submenu.length > 0;
    } else {
      return permissions.some(item1 => item1.path === item2.path);
    }
  });

  return (
    <Layout>
      <Sider
        trigger={null}
        style={{
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {newArray.map((route, index) =>
            route.submenu ? (
              <Menu.SubMenu
                key={index}
                icon={<i className={route.icon}></i>}
                title={route.text}
              >
                {route.submenu.map((subItem, subIndex) => (
                  <Menu.Item key={`${index}-${subIndex}`}>
                    <Link className="text-decoration-none" to={subItem.slug}>
                      {subItem.text}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={index} icon={<i className={route.icon}></i>}>
                <Link className="text-decoration-none" to={route.slug}>
                  {route.text}
                </Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>

      <Layout>
        <Header className="align-items-baseline p-0 bg-body-secondary d-flex sticky-top">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Navbar />
        </Header>
        <Content
          style={{
            margin: '0px 6px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <>
          <div
            className="align-items-center d-flex flex-wrap text-white justify-content-between px-2 py-1 "
            style={{ backgroundColor: '#EC1E24' }}
          >
            <div className="align-items-baseline d-flex flex-wrap justify-content-center ">
              <h6 className="text-white mb-0">
                কপিরাইট © {convertToBanglaYear(new Date().getFullYear())} সকল
                স্বত্ব www.channeltwenty.com সংরক্ষিত{' '}
              </h6>

              <Link
                to="/about"
                className="border border-2 border-bottom-0 border-top-0 border-white mx-2 px-2 text-decoration-none text-white"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                to="/privacy-policy"
                className="border border-2 border-start-0  border-bottom-0 border-top-0 border-white pe-2 text-decoration-none text-white"
              >
                গোপনীয়তা নীতি
              </Link>

              <Link
                to="/contact"
                className="ps-2 text-decoration-none text-white"
              >
                যোগাযোগ
              </Link>
            </div>
            <div className="mx-auto ">
              Developed by{' '}
              <Link
                target="_blank"
                to="http://www.codecursor.com"
                className=" text-decoration-none text-white "
              >
                Code Cursor{' '}
              </Link>
            </div>
          </div>
        </>
      </Layout>
    </Layout>
  );
};

export default DbLayout;
