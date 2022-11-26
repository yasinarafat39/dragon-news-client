import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h2>Dragon News: {allNews.length}</h2>

            <div>
                {
                    allNews.map(news => <NewsSummaryCard
                        key={news._id}
                        news={news}
                    ></NewsSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;