function isLoggedIn(req, res, next) {
  if (req.session && req.session.userRole) {
    next();
  } else {
    res.status(401).json({ message: "Vous devez vous connecter" });
  }
}

function isEmployee(req, res, next) {
  if (
    req.session &&
    (req.session.userRole === "Employé" || req.session.userRole === "Admin")
  ) {
    next();
  } else {
    res.status(401).json({ message: "Vous devez être employé pour acceder à cette fontion"});
  }
}

function isAdmin(req, res, next) {
  if (req.session && req.session.userRole === "Admin") {
    next();
  } else {
    res.status(401).json({ message: "Vous devez être admin pour acceder à cette fontion" });
  }
}

export { isLoggedIn, isEmployee, isAdmin };
