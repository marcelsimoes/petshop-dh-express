const verificaSeLogado = (req, res, next) => {
    if(!req.session.usuario){
        return res.redirect("/login")
    }

    next();
}

module.exports = verificaSeLogado;