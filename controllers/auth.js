exports.getLogin = (req, res, next) => {
	const isLoggedIn = req.get("Cookie").split("=")[1];
	res.render("auth/login.ejs", {
		path: "/login",
		pageTitle: "Login",
		isAuthenticated: isLoggedIn,
	});
};

exports.postLogin = (req, res, next) => {
	req.session.isLoggedIn = true;
	res.redirect("/");
};
