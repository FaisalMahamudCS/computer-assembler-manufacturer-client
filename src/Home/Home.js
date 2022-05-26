import React from 'react';
import Banner from '../Banner/Banner';
import Part from '../Part/Part';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
import BuissinessSummary from '../BuissinessSummary/BuissinessSummary';
import Service from '../Service/Service';
import Professional from '../Professional/Professional';
const Home = () => {
    return (
        <div className=''>

<Banner></Banner>
<BuissinessSummary></BuissinessSummary>
<Part></Part>
<Service></Service>
<Review></Review>
<Professional></Professional>
<Footer></Footer>

        </div>
    );
};

export default Home;