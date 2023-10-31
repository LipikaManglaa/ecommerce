import JWT from 'jsonwebtoken'

//Protected Routes token base
export const SignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECERT_KEY
      );
    
      next();
      console.log(decode)
    } catch (error) {
      console.log(error);
    }
  };  