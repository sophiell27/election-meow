import React from 'react';
import Home from '../Home/Home';

// interface ICountDown {
//     Days: number;
//     Hours: number;
//     Mins: number;
//     Sec: number;
// }

const Layout = () => {
    const navConfig = [
        {
            title: '最新消息',
            route: ''
        },
        {
            title: '喵咪政見',
            route: ''
        },
        {
            title: '抖內罐罐',
            route: ''
        },
        {
            title: '喵咪信箱',
            route: ''
        }
    ];

    // const countDown: ICountDown = {
    //     Days: 100,
    //     Hours: 16,
    //     Mins: 13,
    //     Sec: 25
    // };

    // const marquee =
    //     '快來喵喵 喵喵喵 喵電感應 感覺到我跟你同時觸電反應 不管相隔多遠都能互相連繫';

    return (
        <div className='min-h-screen'>
            <header className='flex justify-center'>
                {/* <img className='mr-auto'>img</img> */}
                <div className='mr-auto'>logo</div>
                <ul className='flex  justify-center mr-auto'>
                    {navConfig.map((item, index) => (
                        <li key={index} className='px-3'>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </header>
            <Home />
        </div>
    );
};

export default Layout;
