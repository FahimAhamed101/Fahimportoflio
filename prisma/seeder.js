

import { PrismaClient } from '@prisma/client';
const prisma  = new PrismaClient();

const products = () => ({
         
title: 'Free Shirt',
description: 'free-shirt',
      category: 'Shirts',
      images: '/images/shirt1.jpg',
    
      github: 'Nike',
  
      userId: '65dc52e287bf09def1a37366',
   
      link: 'A popular shirt',
    });

    const users = () => ({
         

        name:"admin1",
        email:
        "admin@admin1.com",
        password:
        "$2b$12$igIdeeapquhJHU8bRQwe9OMp5Wn.3hPzsyYmREpIW2xHn1O9TSO1e",
        role:
        "admin"
            });


async function main() {
    const fakerRounds = 1;

    console.log('Seeding...');
    /// --------- Users ---------------
    for (let i = 0; i < fakerRounds; i++) {
        await prisma.product.create({ data: products () })
        await prisma.user.create({ data: users () })
    }
    };
    
      
    
    main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
    });