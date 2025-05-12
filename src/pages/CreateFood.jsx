import { RiAddLine, RiBankLine, RiBowlLine, RiCheckboxMultipleBlankLine, RiImage2Line, RiApps2Line, RiMapPin2Line, RiStarLine, RiTimeLine, RiDatabaseLine } from '@remixicon/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateFood = () => {


  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [recipe, setRecipe] = useState('');
  const [address, setAddress] = useState('');
  const [ratings, setRatings] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [description, setDescription] = useState('');
  let [imgUrl, setImgUrl] = useState(`/../src/assets/${category}/${category}-5.jpeg`);

  const navigate = useNavigate();

  const handleCreateFood = (e) => {
    e.preventDefault();
    let img1 = '/../src/assets/';
    let cate = category;
    let imgNo = '-5.jpeg';
    imgUrl = img1 + cate + '/' + cate + imgNo;

    let rate = parseInt(ratings)

    const newMeal = {
      name,
      price,
      duration,
      recipe,
      address,
      ratings: rate,
      restaurant,
      description,
      imgUrl,
    };

    addFood(newMeal);
  }

  const addFood = async (newMeal) => {
    try {
        const res = await fetch(`http://localhost:4000/${category}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMeal),
        });
        if (res) { alert("New meal added successfully"); }
    } catch (error) {
      console.log("Error while adding meal ", error); 
    }
    return navigate(`/category-page/${category}`);
  }

  return (
    <section className='bg-accent-secondary p-6'>
        <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
            <span>Create New Meal</span>
            <div className='border-t-[3px] border-orange-400 w-[13rem]' />
        </div>

        <form onSubmit={handleCreateFood}>
            <div className="input-wrapper">
                <div className="input-div">
                    <label for="name" class="label">
                        <RiBowlLine size={15} />
                        <span>Name</span>
                    </label>
                    <input type="text" id="name" name="name" placeholder='Name' className='input-field'
                      value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-div">
                    <label for="category" class="label">
                        <RiApps2Line size={15} />
                        <span>Category</span>
                    </label>
                    <select id="category" name="category" className='select-field'
                      value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value=""></option>
                        <option value="appetizer">Appetizer</option>
                        <option value="chinese">Chinese</option>
                        <option value="continental">Continental</option>
                        <option value="confectioneries">Confectioneries</option>
                        <option value="local">Local</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label for="price" class="label">
                        &#8358;
                        <span>Price</span>
                    </label>
                    <input type="number" id="price" name="price" placeholder='Price' className='input-field'
                      value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="input-div">
                    <label for="recipe" class="label">
                        <RiCheckboxMultipleBlankLine size={15} />
                        <span>Recipe</span>
                    </label>
                    <input type="text" id="recipe" name="recipe" placeholder='Recipe' className='input-field'
                      value={recipe} onChange={(e) => setRecipe(e.target.value)} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label for="duration" class="label">
                        <RiTimeLine size={15} />
                        <span>Duration</span>
                    </label>
                    <select id="duration" name="duration" className='select-field' 
                      value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value=""></option>
                        <option value="5m">5 minutes</option>
                        <option value="10m">10 minutes</option>
                        <option value="15m">15 minutes</option>
                        <option value="20m">20 minutes</option>
                        <option value="25m">25 minutes</option>
                        <option value="30m">30 minutes</option>
                        <option value="35m">35 minutes</option>
                        <option value="40m">40 minutes</option>
                        <option value="45m">45 minutes</option>
                        <option value="50m">50 minutes</option>
                    </select>
                </div>

                <div className="input-div">
                    <label for="ratings" class="label">
                        <RiStarLine size={15} />
                        <span>Ratings</span>
                    </label>
                    <select id="ratings" name="ratings" className='select-field'
                      value={ratings} onChange={(e) => setRatings(e.target.value)} >
                        <option className='' value=""></option>
                        <option className='' value="1">1 Star</option>
                        <option className='' value="2">2 Star</option>
                        <option className='' value="3">3 Star</option>
                        <option className='' value="4">4 Star</option>
                        <option className='' value="5">5 Star</option>
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label for="restaurant" class="label">
                        <RiBankLine size={15} />
                        <span>Restaurant</span>
                    </label>
                    <input type="text" id="restaurant" name="restaurant" placeholder='Restaurant' className='input-field'
                      value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
                </div>

                <div className="input-div">
                    <label for="imgUrl" class="label">
                        <RiImage2Line size={15} />
                        <span>Upload Photo</span>
                    </label>
                    <label for="imgUrl" class="label">
                        <span className='input-field !w-fit'>Choose Picture to Upload</span>
                    </label>
                    <input type="file" id="imgUrl" name="imgUrl" className='input-field' accept='.png, .jpeg, .jpg, .gif' style={{ width: "90%", display: 'none' }} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label for="description" class="label">
                        <RiDatabaseLine size={15} />
                        <span>Description</span>
                    </label>
                    <textarea type="text" id="description" name="description" placeholder='Description' className='input-field' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>

                <div className="input-div">
                    <label for="address" class="label">
                        <RiMapPin2Line size={15} />
                        <span>Address</span>
                    </label>
                    <textarea id="address" name="address" placeholder='Address' className='input-field'
                      value={address} onChange={(e) => setAddress(e.target.value)} ></textarea>
                </div>
            </div>


            <div className="button-div">
                <button type='submit' className='btn-create'>
                    <RiAddLine /> Create Meal
                </button>
            </div>
        </form>

      
    </section>
  )
}

export default CreateFood
