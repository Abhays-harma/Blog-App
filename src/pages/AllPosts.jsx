import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden  flex flex-col">
                <PostCard {...post} />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default AllPosts;
