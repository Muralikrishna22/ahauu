import React, { Suspense, useState, lazy } from 'react'
import Base from '../layout/base'
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesMenu from '../../components/home/CategoriesMenu';
import BannerBlock from '../../components/home/BannerBlock';
import OffersBlock from '../../components/home/OffersBlock';
import CoupenCards from '../../components/home/CoupenCards';
import BikeAccessories from '../../components/home/BikeAccessories';
import SeasonalTrips from '../../components/home/SeasonalTrips';
import FindUrCab from '../../components/home/FindUrCab';
import CabCoupen from '../../components/home/CabCoupen';
import CoverageArea from '../../components/home/CoverageArea';
import BreakUp from '../../components/home/BreakUp';
import TripPlan from '../../components/home/TripPlan';
import Blogs from '../../components/home/Blogs';
import Guidance from '../../components/home/Guidance';
import Story from '../../components/home/Story';
const Categories = lazy(() => import('../../components/home/categories' /* webpackPrefetch: true */));
const Products = lazy(() => import('../../components/home/products' /* webpackPrefetch: true */));

function Home() {
    return (
        <Base>
            <Container>
                <CategoriesMenu />
                {/* <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${'FrA98gZGbDI'}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                /> */}
                <BannerBlock />
                {/* <OffersBlock /> */}
                <Categories />
                <Products />
                <CoupenCards/>
                <BikeAccessories/>
                <SeasonalTrips/>
                <FindUrCab />
                <CabCoupen />
                <CoverageArea />
                <BreakUp />
                <TripPlan />
                <Blogs />
                <Guidance />
                <Story />
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontWeight: 'bold' }}>
                    <span>
                        "There is a kind of magicnessabout going far away and then coming back all changed." 
                    </span>
                    <br />
                    <span>- H. P. Lovecraft</span>
                </div>
            </Container>
        </Base>
    )
}

export default Home