const { verifyToken } = require('../Authentication/auth');

function checkForAuthenticationCookies(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue){
            req.user = null;
            return next();
        }
            

        try {
            const userPayload = verifyToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            res.clearCookie(cookieName);
            console.error('Token verification failed:', error);
            req.user = null;
        }
        next();
    };
}

function restrictToLoggedIn(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    next();
}

module.exports = { checkForAuthenticationCookies, restrictToLoggedIn };