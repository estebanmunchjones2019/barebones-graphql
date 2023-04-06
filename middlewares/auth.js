const jwtVerify = (token)=>{
    if (token === 'asdfghjkl'){
        return {
            userId: '54789'
        }
    } else {
        throw new Error('invalid token');
    }
}

module.exports = (req, res, next) => {
    // keep working on this
    if (!req.headers.authorization){
        req.isAuth = false;
        return next();
    }
    const token = req.headers.authorization.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwtVerify(token);
    } catch(error){
        req.isAuth = false;
        return next();
    }
    if (!decodedToken){
        req.isAuth = false;
        return next();
    }

    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();

    // req has token in the headers
    // get the token from req
    // if the token matches a hardcoded string, req.isAuth = true
    // else req.isAuth = false
}