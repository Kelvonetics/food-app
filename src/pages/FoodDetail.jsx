import menu from '../assets/logo1.jpeg'
import { RiAddLine, RiBankLine, RiCloseLine, RiEditLine, RiHeart3Line, RiMapPin2Line, RiStarFill, RiTimeLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { resolveRatings } from '../lib'

const FoodDetail = () => {

  const params = useParams();
  const id = params.id;
  const cate = params.cate;
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true );

  const navigate = useNavigate();

  //FETCH SINGLE FOOD
  useEffect(() => {
      const fetchFood = async () => {
          try {
              const res = await fetch(`http://localhost:4000/${cate}/${id}`);
              const data = await res.json();
              setFood(data);
          } catch (error) {
              console.log('Error fetching food! ', error);
          } 
          finally{
              setLoading(false);
          }
      }; 

      fetchFood();
  }, []); 


  // FAVORITE
  const handleFavorites= (e) => {
    e.preventDefault();
    
    const favoriteData = {
      id,
      name: food.name,
      price: food.price,
      duration: food.duration,
      recipe: food.recipe,
      address: food.address,
      ratings: food.ratings,
      restaurant: food.restaurant,
      description: food.description,
      imgUrl: food.imgUrl,
    };
    
    let answer;
    answer = confirm('Are you sure you want to save as favorite ?');
    if (answer) {
      addFavorite(favoriteData);
    }
  }

  const addFavorite = async (favoriteData) => {
    try {
        const res = await fetch(`http://localhost:4000/favorites/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(favoriteData),
        });
        if (res) { alert("Meal added to favorite successfully"); }
    } catch (error) {
      console.log("Error while adding favorite meal ", error); 
    }
    return navigate(`/category-page/favorites`);
  }




  // DELETE
  const handleRemoveMeal = (e) => {
    e.preventDefault();
    
    let answer;
    answer = confirm('Are you sure you want to remove meal ?');
    if (answer) {
      removeMeal(id);
    }
  }


  const removeMeal = async (id) => {
    try {
        const res = await fetch(`http://localhost:4000/${cate}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res) { alert("Meal removed from favorite successfully"); }
    } catch (error) {
      console.log("Error while removing favorite meal ", error); 
    }
    return navigate(`/category-page/${cate}`);
  }





  return (
    <section>

      <div className="flex justify-between items-center mb-10">
          <div className="">
            <h2 className='flex flex-col gap-1 w-full text-2xl font-normal tracking-wider'>
                <span className='capitalize'> {cate} Cuisine Detail </span>
                <div className='border-t-[3px] border-orange-400 w-[18rem]' /> 
            </h2>
          </div>

          <div className="flex justify-end items-center gap-2">
              <NavLink to={`/meal/edit/${cate}/${food.id}`} className="">
                <div className="btn-round bg-emerald-600">
                  <RiEditLine size={16} /> 
                </div>
              </NavLink>

              <form action="" onSubmit={handleFavorites}>
                <button type='submit' className="btn-round bg-black text-white">
                    <RiHeart3Line size={16} /> 
                </button>
              </form>
              
              <form action="" onSubmit={handleRemoveMeal}>
                <button type='submit' className="btn-round bg-red-600 text-white">
                    <RiCloseLine size={16} /> 
                </button>
              </form>
          </div>
      </div>


    

      <div className="lg:flex sm:flex-col md:flex-col lg:flex-row justify-between gap-14 ">
        <div className="item-img sm:w-full lg:w-6/12">
            <img src={food.imgUrl} alt={food.name} className='detail-img' />

            <div className="flex justify-start gap-4 mt-5">
              <img src={food.imgUrl} alt='' className='img-thumbnail' />
              <img src={food.imgUrl} alt='' className='img-thumbnail' />
              <img src={food.imgUrl} alt='' className='img-thumbnail' />
              <img src={food.imgUrl} alt='' className='img-thumbnail' />
              <img src={food.imgUrl} alt='' className='img-thumbnail' />
            </div>
        </div>

        <div className="item-desc-details sm:w-full lg:w-6/12 mt-24 lg:-mt-1">
            <div className="flex justify-between items-center item-title w-full">
                <div className='text-2xl font-normal'>
                  {food.name}
                </div>
               
                <div className='flex items-center gap-2 text-right'  style={{ float: 'right' }} >
                  

                    {/* <img src={menu} alt="menu" className='h-7 w-7' /> */}
                </div>
            </div>

            <div className='flex items-center gap-5 text-[1rem] text-gray-600'>
                <span className='px-4 py-1 bg-accent rounded-md text-white'>Recipe : </span>
                {
                  <div className="flex items-center gap-2">
                      <span className='px-4 py-1 bg-accent-secondary rounded-md'> {food.recipe} </span>
                  </div>
                  
                }
            </div>

            <div className='text-[1rem] text-gray-600'>
                {food.description}
            </div>

            <div className="flex justify-between w-full text-[0.9rem]">
              <div className="font-medium  px-3 p-1 bg-emerald-200 rounded-md" >&#8358; {food.price}</div>
              <div className="flex justify-end gap-1"> 
                <RiTimeLine size={18} className='text-accent' /> <span>{food.duration}</span>
              </div>
            </div>



            <div className="flex justify-between items-center w-full text-[0.9rem]">
              <div className="flex gap-2 items-center font-medium">
                <RiBankLine className='text-accent' />
                <span>{food.restaurant}</span>
              </div>

              <div className="flex justify-end items-center gap-0.5 text-[0.9rem]"> 
                <span className='mr-2'>Ratings </span>
                {
                  food.ratings && resolveRatings(food.ratings).map((rate) => (
                    <RiStarFill key={rate} size={18} className='text-accent' /> 
                  ) )
                }
              </div>
            </div>

            <div className="flex items-center gap-2text-[0.9rem]">
              <RiMapPin2Line className='text-accent' />
              <p> {food.address} </p> 
            </div>

            <button className='cart-btn'>
                <RiAddLine />
                <span>Add to Cart</span>
            </button>
        
        </div>
      </div>
    </section>
  )
}

export default FoodDetail
