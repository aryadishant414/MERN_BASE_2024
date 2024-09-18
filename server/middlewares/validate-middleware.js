
export const validate = (schema) => async (req, res, next) => {  // here the "schema" inside parenthesis is that validate wala schema
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const status = 422;
      const message = 'Fill the input properly';
      const extraDetails = err.errors[0].message;

      const error = {
        status,
        message,
        extraDetails
      }
      console.log(message);
      // res.status(400).send({message:message})
      next(error);
      

    }
  };
  
