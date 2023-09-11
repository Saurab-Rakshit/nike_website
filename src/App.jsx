import {Hero,PopularProduct,SuperQuality,Service,SpecialOffers,CustomerReview,Subscribe,Footer} from './sections/index';
import Navbar from './components/Navbar';

const App = () => (
  <main className="relative">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Service/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App