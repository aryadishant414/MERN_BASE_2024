
export const validate = (schema) => async (req, res, next) => {  // here the "schema" inside parenthesis is that validate wala schema
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const message = err.errors[0].message;
      console.log(message);
      res.status(400).send({message:message})
      

    }
  };
  
