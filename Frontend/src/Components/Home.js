import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
import ProductCard from '../Pages/ProductCard';
import logo from '../Images/quickship-high-resolution-logo-white-transparent.png'

const Home = () => {
  const [dropdowns, setDropdowns] = useState({
    foods: false,
    homemade: false,
    restaurant: false,
    grocery: false,
    profile: false
  });
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const bannerImages = [
    'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0=',
    'https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/184/1004/desktop-wallpaper-skin-care-products.jpg'
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [bannerImages.length]);

  const handleMouseEnter = (dropdown) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdown]: true
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdown]: false
    }));
  };

  const handlelogin =()=>{
    navigate("/Signin");
  }

  const toggleFavorite = (index) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(index)) {
        newFavorites.delete(index);
      } else {
        newFavorites.add(index);
      }
      return newFavorites;
    });
  };

  const addToCart = (index) => {
    setCart(prevCart => {
      const newCart = new Set(prevCart);
      newCart.add(index);
      return newCart;
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
   // Mapping search queries to specific routes
   const searchMap = {
    'apple': '/grocery/fruits',
    'orange': '/grocery/fruits',
    'banana': '/grocery/fruits',
    'mango': '/grocery/fruits',
    'carrot': '/grocery/vegetable',
    'tomato': '/grocery/vegetable',
    'muttonbiryani': '/homemade/non-veg',
    'chickenbiryani': '/homemade/non-veg',
    'dosa': '/homemade/veg',
    
  };
  const route = searchMap[searchQuery.toLowerCase()] || '/grocery/fruits';
  navigate(route);
};

  const products = [
    { id: 3, name: 'Apple', price: 'Rs.70 KG', img: 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Banana', price: 'Rs.30 KG', img: 'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?cs=srgb&dl=pexels-couleur-2316466.jpg&fm=jpg' },
    { id: 1, name: 'Carrot', price: 'RS.20 KG', img: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg' },
    { id: 4, name: 'Hot Biriyani', price: 'RS.120 Per KG', img: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph' },
    { id: 5, name: 'Dosa', price: 'RS.20', img: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-plate-of-dosa-with-sauce-on-top-image_2892701.jpg' },
    { id: 6, name: 'Parrota', price: 'Rs.15', img: 'https://media.istockphoto.com/id/618764348/photo/famous-asian-flat-bread-known-as-parathas.jpg?s=612x612&w=0&k=20&c=yrz3Gn1RIHw8ohxG0uGNAU1H8wa2dB6xRli_DD3PJ6o=' },
    { id: 7, name: 'Dosa', price: 'Rs.20', img: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-plate-of-dosa-with-sauce-on-top-image_2892701.jpg' },
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className="header">
        <div className="container">
          <div className="topbar">
            <div className="branding">
            <img src= {logo} alt="App Logo" className="app-logo" />
              <h1>Quickship</h1>
              <h3>Bringing the store to your door</h3>
            </div>
            <div className="search-bar-container">
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li
                className="Grocery"
                onMouseEnter={() => handleMouseEnter('foods')}
                onMouseLeave={() => handleMouseLeave('foods')}
              >
                Foods
                  <ul className='dropdown'>
                    <li
                      onMouseEnter={() => handleMouseEnter('homemade')}
                      onMouseLeave={() => handleMouseLeave('homemade')}
                    >
                      <Link to='/homemade'><h2>HomeMade</h2></Link>
                      {dropdowns.homemade && (
                        <ul className='sub-dropdown'>
                          <li><Link to='/homemade/veg'><h3>Veg</h3></Link></li>
                          <li><Link to='/homemade/non-veg'><h3>Non-Veg</h3></Link></li>
                        </ul>
                      )}
                    </li>
                    <li
                      onMouseEnter={() => handleMouseEnter('restaurant')}
                      onMouseLeave={() => handleMouseLeave('restaurant')}
                    >
                      
                      {dropdowns.restaurant && (
                        <ul className='sub-dropdown'>
                          <li><Link to='/homemade/veg'>Veg</Link></li>
                          <li><Link to='/homemade/non-veg'>Non-Veg</Link></li>
                          {/* Add specific restaurant food options here */}
                        </ul>
                      )}
                    </li>
                  </ul>
                
              </li>
              <li
                className="Grocery"
                onMouseEnter={() => handleMouseEnter('grocery')}
                onMouseLeave={() => handleMouseLeave('grocery')}
              >
                Grocery
                {dropdowns.grocery && (
                  <ul className='dropdown'>
                    <li><Link to='/grocery/fruits'><h3>Fruits</h3></Link></li>
                    <li><Link to='/grocery/vegetable'><h3>Vegetable</h3></Link></li>
                    <li><Link to='/grocery/oil'><h3>Oil</h3></Link></li>
                    <li><Link to='/grocery/masala'><h3>Masala Products</h3></Link></li>
                    <li><Link to='/grocery/milk'><h3>Care Products</h3></Link></li>
                  </ul>
                )}
              </li>
              <li
                className="profile"
                onMouseEnter={() => handleMouseEnter('profile')}
                onMouseLeave={() => handleMouseLeave('profile')}
              >
                Profile
                {dropdowns.profile && (
                  <ul className="dropdown">
                    <li><i className="fas fa-shopping-cart"></i><Link to="/myorders"> My Orders</Link></li>
                    <li><i className="fas fa-heart"></i><Link to="/fav"> Favorites</Link></li>
                    <li><i className="fas fa-cart-plus"></i><Link to="/add"> Add to Cart</Link></li>
                    <li><i className="fas fa-cog"></i><Link to="/accs"> Account Settings</Link></li>
                    <li><i className="fas fa-sign-out-alt"></i><Link to="/Signin"> Logout</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Banner with Auto-moving Images */}
      <div className="main-banner">
        <img src={bannerImages[currentImageIndex]} alt="Main Banner" />
        <div className="banner-text">
          <h2>Exclusive Deals on Fresh Products</h2>
          <button onClick={handlelogin}>Shop Now</button>
        </div>
      </div>

      {/* Products Section */}
    
      <div className="products">
      <div className="container">
      <div className="row">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.img} alt={product.name} onClick={handlelogin}/>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   <ProductCard/>
    

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2023 Quickship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
