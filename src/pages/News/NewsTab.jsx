import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
} from 'reactstrap';
import useLatest from '../../hooks/useLatest';
const NewsTab = () => {
    const { latestNews, isLoading, } = useLatest()


    const [activeTab, setActiveTab] = useState('1');



    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    if (isLoading) {
        return null
    }


    return (
        <div className=''>
            <Nav tabs className=' justify-content-between' >
                <NavItem className='w-50'>
                    <NavLink
                        className={`pointer rounded-0 ${activeTab === '1' ? 'active bg-danger' : ''}`}
                        onClick={() => toggleTab('1')}
                    >
                        সর্বশেষ
                    </NavLink>
                </NavItem >
                <NavItem className='w-50'>
                    <NavLink
                        className={`pointer rounded-0 ${activeTab === '2' ? 'active bg-danger' : ''}`}
                        onClick={() => toggleTab('2')}
                    >
                        জনপ্রিয়
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12" className='bg-white'>
                            <div>
                                <ul className='p-0'>

                                    {
                                        latestNews.slice(0, 6).map((item) => <li key={item.id} className=' align-items-center border-bottom border-danger d-flex list-unstyled my-3 pb-2 px-2 onhover justify-content-between '>
                                            <Link to={`/news/${item.slug}`} className=' text-dark text-decoration-none'>   {item.title} </Link>
                                            <span><i className="border border-2 border-danger fa-chevron-right fa-solid p-1 px-2 rounded-circle text-danger"></i></span>
                                        </li>)
                                    }

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12" className='bg-white'>
                            <div>
                                <ul className='p-0'>

                                    {
                                        latestNews.slice(0, 6).map((item) => <li key={item.id} className=' align-items-center border-bottom border-danger d-flex list-unstyled my-3 pb-2 px-2 onhover justify-content-between '>
                                            <Link to={`/news/${item.slug}`} className=' text-dark text-decoration-none'> জনপ্রিয়  {item.title} </Link>
                                            <span><i className="border border-2 border-danger fa-chevron-right fa-solid p-1 px-2 rounded-circle text-danger"></i></span>
                                        </li>)
                                    }





                                </ul>
                            </div>
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    );
};

export default NewsTab;
