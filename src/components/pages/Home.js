import Banner from '../Banner';
import Navbar from '../Navbar'
import ForBusiness from '../ForBusiness'
import Bikeman from '../Bikeman';
import ForCustomer from '../ForCustomer';
import Howitworks from '../Howitworks';
import Footer from '../Footer';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Navbar />
    <Banner />
    <ForBusiness />
    <Bikeman />
    <ForCustomer />
    <Howitworks />
    <Footer />
    </>
  );
}

export default Home;