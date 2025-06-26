import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import deltaQuadEvoBannerImage from '../assets/images/deltaquad-evo-banner.jpg'
import DeltaQuadEvoInfo from '../components/DeltaQuadEvoInfo'
import DeltaQuadEvoPayloads from '../components/DeltaQuadEvoPayloads'
import DeltaQuadEvoTechnical from '../components/DeltaQuadXxxTechnical'
import { NavLink } from 'react-router-dom'

function DeltaQuadEvo() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div className="min-h-[100vh] w-full bg-white flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="DeltaQuad Evo"
          imageSrc={deltaQuadEvoBannerImage}
          subheading="The EVO platform is breaking the limitations of eVTOL UAV flight time and range."
          className=""
        />
      </div>
      <DeltaQuadEvoInfo />
      <DeltaQuadEvoPayloads />
      {/*<DeltaQuadEvoResults />*/}
      <DeltaQuadEvoTechnical />
      <div className="flex flex-col items-center text-center uppercase text-5xl tracking-widest my-40 mx-8">
        We offer onsite demos
        <div className="normal-case text-lg leading-loose tracking-wide max-w-lg my-8 font-light font-['Inter']">
          We let the technology speak for itself, and the best way to do that is for you to see it in action. Contact us today for an on site demonstration with your organisation.
        </div>
        <NavLink to="/request-demo">
          <button className="bg-ft-red uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest hover:opacity-90 hover:hover:bg-[#5b172c] transition duration-300">
            Book a demo
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default DeltaQuadEvo
