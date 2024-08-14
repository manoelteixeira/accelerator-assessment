function validateName(req, res, next) {
  if (!req.body.name) {
    res.status(400).json({ error: "name is required" });
  } else if (typeof req.body.name !== "string") {
    res.status(400).json({ error: "name must be a string" });
  } else if (req.body.name.length == 0) {
    res.status(400).json({ error: "name cant be an empty string" });
  } else {
    next();
  }
}
function validateDescription(req, res, next) {
  if (!req.body.description) {
    res.status(400).json({ error: "description is required" });
  } else if (typeof req.body.description !== "string") {
    res.status(400).json({ error: "description must be a string" });
  } else if (req.body.description.length == 0) {
    res.status(400).json({ error: "description cant be an empty string" });
  } else {
    next();
  }
}

module.exports = { validateName, validateDescription };
