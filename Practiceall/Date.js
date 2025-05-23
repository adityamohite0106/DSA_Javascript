const accessControl = (req, res, nex) => {
  const day = new Date().getDay();
  if (day === 1 || day === 3 || day === 5) {
    next();
  } else {
    res.status(406).send("not date available");
  }
};
app.use(accessControl );