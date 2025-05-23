import heroImg from '../assets/hero-table-2.jpg'
import cake from '../assets/confectioneries/confectioneries-7.jpeg'
import soup from '../assets/Local/local-soup.jpg'
import chinese from '../assets/chinese/chinese-4.jpg'
import vegan from '../assets/vegetarian/vegetarian-2.jpg'


const Hero = () => {
  return (
    <section className='bg-accent-secondary p-8'>
      <div className="hero-div">
        <div className="hero-img">
            <img src={heroImg} alt="hero Img" />
        </div>

        <div className="hero-title">
          <div className='text-2xl flex flex-col text-center gap-5'>
              <span className='text-[2rem] uppercase text-accent'>Eatsy</span>
              <span className=''> 
                <span className='text-accent'>Restaurant</span>  
                {/* <span className='text-orange-400'> Kitchen</span>   */}
              </span>
              
              <p className='text-[1rem] font-light'>
              A fine dining restaurant offering a fusion of international flavors with fresh, locally sourced ingredients. From gourmet appetizers to signature main courses, every dish is crafted with excellence. With elegant ambiance, exceptional service, and a curated wine selection, it ensures an unforgettable culinary experience for every guest.
              </p>
          </div>
        </div>
      </div>
        

      <h2 className='flex flex-col gap-3 w-full text-xl font-normal tracking-wider mb-5'>
        <span>Our Food Categories</span>
        <div className="border-t-[3px] border-orange-400 w-[13rem]"></div>
      </h2>

      <div className="hero-grids">
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Vegan</div>
          <img src={vegan} alt="vegan" className='object-cover' /> 
        </div>

        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Local</div>
          <img src={soup} alt="soup" className='object-cover' /> 
        </div>

        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Chinese</div>
          <img src={chinese} alt="Chinese" className='object-cover' /> 
        </div>

        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Appetizer</div>
          <img src={cake} alt="Chinese" className='object-cover' /> 
        </div>
        
      </div>

        
    </section>
  )
}

export default Hero