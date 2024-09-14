import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className='py-4 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-2'>
      <Container>
        {/* Logo and Nav on top for small devices */}
        <nav className='flex flex-col items-center sm:flex-row sm:justify-between'>
          
          {/* Logo Centered on Mobile, Inline on Larger Screens */}
          <Link to='/' className='mb-4 sm:mb-0'>
            <div className='flex flex-col items-center sm:flex-row sm:items-center'>
              <Logo width='80px' />
              <div className='text-2xl font-bold text-white font-mono mt-2 sm:mt-0 sm:ml-2'>
                NeuraChip
              </div>
            </div>
          </Link>

          {/* Navigation Buttons Below Logo on Mobile, Inline on Larger Screens */}
          <ul className='flex gap-2 sm:flex-row sm:space-x-6 items-center text-white'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='mb-2 sm:mb-0'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='mb-2 sm:mb-0'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
