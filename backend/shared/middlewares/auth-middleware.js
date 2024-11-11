import { getUser } from "../service/auth.js";

export async function restrictToLoggedinUserOnly(req, res, next){
    console.log("Request cookies:", req.cookies);  // Log cookies
    const userId = req.cookies?.uid;
    console.log("User ID from cookie:", userId);  // Log UID from cookies
    
    if (!userId) {
        return res.redirect("/login");
    }

    const user = getUser(userId);
    if (!user) {
        return res.redirect("/login");
    }

    req.user = user;
    next();
}