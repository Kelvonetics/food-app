import heroImg from '../assets/foods/hero-table-2.jpg'

const Hero = () => {
  return (
    <section className='hero-div'>
      <div className="hero-img">
        <img src={heroImg} alt="heroImg" />
      </div>

      <div className="hero-title">
        <div className='text-4xl flex flex-col uppercase text-center gap-8'>
            <span className='text-[4rem]'>Welcome</span>
            <span className=''>to Sizzling Place</span>
             
            <p className='text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt sed quibusdam eveniet possimus quidem.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
