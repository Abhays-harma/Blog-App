import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import loginImage from '../assets/loginImage.png';


function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()
  
  const userData=useSelector((state)=>state.auth.userData)

  useEffect(() => {
    appwriteService.getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((err) => {
        setError('Failed to load posts');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex justify-center">
            <div className="loader"></div> {/* Optional: add a spinner or loading indicator */}
            <p>Loading posts...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex justify-center">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold">
                Login to read posts. . .
                <img className="mx-auto mt-4 w-1/4" src={loginImage} alt="" loading='lazy'/>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;