import React from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <section className='dashTop'>
                <h3>Hello shahrukh 👋,</h3>
                <input type='text' placeholder='Search' name='search' />
            </section>
            <section className='refImagesSection'>
                <div className='refImages'>
                    <div className='refImage'><img src={require('../images/earn.png')} /><div className='imgContent'><p>Earning</p><h3>$198k</h3><p><span className='increaseArrow'>↑37.8% </span>this month</p></div></div>
                    <div className='refImage'><img src={require('../images/order.png')} /><div className='imgContent'><p>Order</p><h3>$2.4k</h3><p><span className='decreaseArrow'>↓2% </span>this month</p></div></div>
                    <div className='refImage'><img src={require('../images/balance.png')} /><div className='imgContent'><p>Balance</p><h3>$2.4k</h3><p><span className='decreaseArrow'>↓2% </span>this month</p></div></div>
                    <div className='refImage'><img src={require('../images/sale.png')} /><div className='imgContent'><p>Total Sales</p><h3>$89k</h3><p><span className='increaseArrow'>↑11% </span>this month</p></div></div>
                </div>
            </section>
            <section className='holeOverviewSection'>
                <div className='overviewSection'>
                    <div className='overview'>
                        <div>
                            <h3>Overview</h3>
                            <p>Monthly Earning</p>
                        </div>
                        <div>
                            <p>Quarterly</p>
                        </div>
                    </div>
                    <div className='overviewChart'>
                        <img src={require('../images/chart.jpg')} />
                    </div>
                </div>
                <div className='customers'>
                    <h3>Customers</h3>
                    <p>Customers that buy Produtcs</p>
                    <img src={require('../images/chart2.jpg')} height={225} />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;