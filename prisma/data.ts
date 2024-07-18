import bcrypt from 'bcrypt';



const data = {

  
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hash('123456',12),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hash('123456',12),
      isAdmin: false,
    },
  ],
  products: [
    
    {
      
title: 'Free Shirt',
description: 'free-shirt',
      category: 'Shirts',
      images: '/images/shirt1.jpg',
    
      github: 'Nike',
      rating: 4.5,
      userId: 1,
   
      link: 'A popular shirt',
    }
  
  ],
};

export default data;