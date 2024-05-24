import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useRoleCheck from '../routes/useRoleCheck';
import SkeletonLoader from '../components/Utilites/SkeletonLoader';

const { Header, Sider, Content } = Layout;

const routeData = [
    {
        "slug": "/dashboard",
        "icon": "fa-solid fa-home",
        "text": "Home"
    },
    {
        "slug": "/dashboard/add/news",
        "icon": "fa-solid fa-folder-plus",
        "text": "Add News"
    },
    {
        "slug": "/dashboard/news",
        "icon": "fa-solid fa-list",
        "text": "News"
    },
    {
        "slug": "/dashboard/category",
        "icon": "fa-solid fa-layer-group",
        "text": "Category"
    },
    {
        "slug": "/dashboard/videos",
        "icon": "fa-solid fa-video",
        "text": "Video"
    },
    {
        "slug": "/dashboard/users",
        "icon": "fa-solid fa-users",
        "text": "Users",
        "submenu": [
            {
                "slug": "/dashboard/users/all",
                "text": "All Users"

            },
            {
                "slug": "/dashboard/users/create",
                "text": "Create User"
            },

            {
                "slug": "/dashboard/users/role",
                "text": "Role"
            }
        ]
    },
    {
        "slug": "/dashboard/setting",
        "icon": "fa-solid fa-gear",
        "text": "Setting"
    },
    {
        "slug": "/",
        "icon": "fa-solid fa-house-chimney-user",
        "text": "Home"
    }
];

const DbLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { role, loading } = useRoleCheck();

    console.log(role.roles
        .permissions);


    if (loading) {
        return <SkeletonLoader />;
    }



    return (
        <Layout>
            <Sider
                trigger={null}
                style={{ height: "100vh", position: 'sticky', top: 0, left: 0, zIndex: 1 }}
                collapsible
                collapsed={collapsed}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {routeData.map((route, index) => (
                        route.submenu ? (
                            <Menu.SubMenu
                                key={index}
                                icon={<i className={route.icon}></i>}
                                title={route.text}
                            >
                                {route.submenu.map((subItem, subIndex) => (
                                    <Menu.Item key={`${index}-${subIndex}`}>
                                        <Link className='text-decoration-none' to={subItem.slug}>{subItem.text}</Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={index} icon={<i className={route.icon}></i>}>
                                <Link className='text-decoration-none' to={route.slug}>{route.text}</Link>
                            </Menu.Item>
                        )
                    ))}
                </Menu>
            </Sider>

            <Layout>
                <Header
                    className='align-items-baseline p-0 bg-body-secondary d-flex sticky-top'
                >
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
            </Layout>
        </Layout>
    );
};

export default DbLayout;
