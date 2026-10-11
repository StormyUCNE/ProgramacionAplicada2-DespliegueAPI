
export const validarRegistro =(re, res, next)=>{
    if(!req.body.nombre || req.body.nombre.trim() === "")
        return res.status(400).json({error: "Nombre es un campo requerido"});
    if(!req.body.email || req.body.email.trim() === "")
        return res.status(400).json({error: "Email es un campo requerido"});
    if(!req.body.password || req.body.password.trim() === "")
        return res.status(400).json({error: "Contraseña es un campo requerido"});
    if(typeof req.body.nombre !== "string")
        return res.status(400).json({error: "Nombre debe ser una cadena de texto"});
    if(!req.body.email.includes("@gmail.com"))
        return res.status(400).json({error: "Email posee formato incorrecto"});
    if(req.body.nombre.length >= 10)
        return res.status(400).json({error: "Nombre muy largo, Max. 10 caracteres"});
    if(req.body.nombre.length < 3)
        return res.status(400).json({error: "Nombre muy corto, Min. 3 caracteres"});
    if(req.body.password.length < 7)
        return res.status(400).json({error: "Contraseña muy corta, Min. 7 caracteres"});
    if(req.body.password.length > 20)
        return res.status(400).json({error: "Contraseña muy larga, Max. 20 caracteres"});
    next();
}

export const validarLogin =(re, res, next)=>{
    if(!req.body.email || req.body.email.trim() === "")
        return res.status(400).json({error: "Email es un campo requerido"});
    if(!req.body.password || req.body.password.trim() === "")
        return res.status(400).json({error: "Contraseña es un campo requerido"});
    if(!req.body.email.includes("@gmail.com"))
        return res.status(400).json({error: "Email posee formato incorrecto"});
    next();
}

export const validarCreacionTarea =(re, res, next)=>{
    if(!req.body.titulo)
        return res.status(400).json({error: "Título es un campo requerido"});
    if(req.body.titulo.trim().length() > 25)
        return res.status(400).json({error: "Título es muy largo, Max. 25 caracteres"});
    next();
}