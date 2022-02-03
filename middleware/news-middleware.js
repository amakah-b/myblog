// const checkNumber = (req, res, next) => {
//   const { number } = req.query;
//   if (number < 5) res.send(" Ooops! Number is too small");
//   next();
// };

const checkNumber = (req, res, next) => {
  try {
    console.log(req.query);
    const { integer } = req.query;
    const { number } = req.query;
    if (number < 5) res.send(" Ooops! Number is too small");
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkNumber;
