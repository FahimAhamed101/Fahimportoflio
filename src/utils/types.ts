import "next-auth";

declare module "next-auth" {
  interface User {
    id: string | number | any;
  }
   
  interface Session {
    user: User;
  }
  
  interface Session {
    session: User;
  }
}

  
