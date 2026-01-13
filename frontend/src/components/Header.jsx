import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SummaryApi from "../common";
import ROLE from "../common/role";
import Context from "../context";
import CategoryDropdown from './CategoryList';
import { GrSearch } from "react-icons/gr";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleUser, FaBell } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [hambugDrop, setHambugDrop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);
  const location = useLocation();
  const { notificationCount } = useContext(Context);
  const hideSearchBar = location.pathname === "/login" || location.pathname === "/signup";

  const getCartCount = () => {
    return context?.cartProductCount || 0;
  };

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      setSearch("");
    }
  }, [location.pathname]);

  const handleScroll = () => {
    if (menuDisplay) {
      setMenuDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuDisplay]);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else if (data.error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu") && menuDisplay) {
        setMenuDisplay(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuDisplay]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    navigate(value ? `/search?q=${value}` : "/search");
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white flex items-center py-5 px-4 sm:px-10 lg:px-16 justify-between font-medium border-b border-gray-200'>
        
        {/* Search Bar Overlay */}
        <div className={`absolute top-0 left-0 w-full h-full bg-white transition-all duration-300 flex items-center px-4 sm:px-10 lg:px-16 z-[60] ${showSearch ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className='flex items-center w-full max-w-4xl mx-auto gap-3'>
            <div className='flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2'>
              <GrSearch className='text-gray-400 mr-2' />
              <input 
                type='text' 
                placeholder='Search for baking tools, decorations...' 
                className='bg-transparent flex-1 outline-none text-sm'
                value={search}
                onChange={handleSearch}
                autoFocus={showSearch}
              />
            </div>
            <RxCross1 onClick={()=>setShowSearch(false)} className='w-6 h-6 cursor-pointer text-gray-500 hover:text-black transition-colors' />
          </div>
        </div>

        <Link to='/'>
          <span className='text-xl sm:text-2xl font-bold text-gray-800 select-none'>Jubiac</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/product-category?category=baking' className='flex flex-col items-center gap-1'>
                <p>BAKING</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            
            <NavLink to='/product-category?category=decoration' className='flex flex-col items-center gap-1'>
                <p>DECORATION</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/product-category?category=equipment' className='flex flex-col items-center gap-1'>
                <p>EQUIPMENT</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        {/* Removed Mobile Navigation from here to move into Hamburger Menu */}

        <div className='flex items-center gap-7 sm:gap-6'>
            {/* Search Icon */}
            <GrSearch onClick={()=>setShowSearch(true)} className='w-5 h-5 cursor-pointer' />

            <div className='group relative hidden sm:block'>
                {user ? (
                    <>
                        {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt={user.fullName} className='w-8 h-8 rounded-full cursor-pointer object-cover border border-gray-200'/>
                        ) : (
                            <FaRegCircleUser className='w-5 h-5 cursor-pointer'/>
                        )}
                        <div className='group-hover:block hidden absolute right-0 pt-4'>
                            <div className='text-gray-500 rounded flex flex-col gap-2 w-36 py-3 px-5 bg-white shadow-lg border border-gray-100'>
                                <p className='text-sm font-semibold text-gray-800 truncate mb-1'>{user.fullName || user.email}</p>
                                <hr className='border-gray-100 mb-1'/>
                                <p className='cursor-pointer hover:text-black text-sm' onClick={() => navigate('/order')}>Orders</p>
                                <p className='cursor-pointer hover:text-black text-sm' onClick={handleLogout}>Logout</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <Link to='/login'>
                        <FaRegCircleUser className='w-5 h-5 cursor-pointer'/>
                    </Link>
                )}
            </div>

            {user?.role === ROLE.ADMIN && (
              <button
                onClick={() => navigate('/admin-overview/overview')}
                className='hidden sm:block bg-black text-white px-3 py-1 rounded'
              >
                Admin
              </button>
            )}

            <Link to='/cart' className='relative hidden sm:block'>
                    <PiShoppingCartSimpleBold className='w-5 h-5'/>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
            </Link>

            {/* Mobile Hamburger Menu */}
            <GiHamburgerMenu onClick={()=>setVisible(true)} className='w-7 h-6 cursor-pointer sm:hidden'/>
        </div>

        {/* sidebar menu for smaller screens */}
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white z-[60]
            transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='cursor-pointer flex items-center gap-4 p-3 border-b'>
                        <IoMdArrowDropdown className='h-4 w-4 rotate-180'/>
                        <p>Back</p>
                    </div>

                    {/* Navigation Links in Mobile Menu */}
                    <div className='flex flex-col border-b sm:hidden'>
                        <NavLink onClick={()=>setVisible(false)} to='/product-category?category=baking' className='py-3 pl-6 hover:bg-gray-50 border-b font-medium text-gray-800'>BAKING</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/product-category?category=decoration' className='py-3 pl-6 hover:bg-gray-50 border-b font-medium text-gray-800'>DECORATION</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/product-category?category=equipment' className='py-3 pl-6 hover:bg-gray-50 border-b font-medium text-gray-800'>EQUIPMENT</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/cart' className='py-3 pl-6 hover:bg-gray-50 flex items-center gap-2 font-medium text-gray-800'>
                            CART
                            <span className='bg-black text-white text-[10px] px-[6px] py-[2px] rounded-[4px] min-w-[18px] text-center leading-none'>
                                {getCartCount()}
                            </span>
                        </NavLink>
                    </div>

                    {user ? (
                        <>
                            <div className='py-4 px-6 bg-gray-50 flex items-center gap-3 border-b'>
                                {user.avatarUrl ? (
                                    <img src={user.avatarUrl} alt={user.fullName} className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                                ) : (
                                    <FaRegCircleUser className='w-8 h-8'/>
                                )}
                                <div className='overflow-hidden'>
                                    <p className='font-bold text-gray-800 truncate'>{user.fullName || 'User'}</p>
                                    <p className='text-xs text-gray-500 truncate'>{user.email}</p>
                                </div>
                            </div>
                            <div onClick={() => { setVisible(false); navigate('/order'); }} className='cursor-pointer py-3 pl-6 border-b hover:bg-gray-50'>
                                Orders
                            </div>
                        </>
                    ) : (
                        <Link onClick={()=>setVisible(false)} to='/login' className='py-2 pl-6 border hover:bg-gray-50'>
                            Login
                        </Link>
                    )}
                    {user?.role === ROLE.ADMIN && (
                      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:bg-gray-50' to='/admin-overview/overview'>ADMIN</NavLink>
                    )}
                    {user && (
                        <div onClick={() => { setVisible(false); handleLogout(); }} className='cursor-pointer py-2 pl-6 border hover:bg-gray-50'>
                            Logout
                        </div>
                    )}
                </div>
        </div>

    </div>
  )
};

export default Header;