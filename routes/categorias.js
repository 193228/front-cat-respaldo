const router = require('express').Router();
const categoria_DAO  = require('../controller/categoriaDAO')
const becerro_DAO = require('../controller/becerroDAO')
const toro_DAO = require('../controller/toroDAO')
const vaca_DAO = require('../controller/vacaDAO')
const vacaCategory_DAO = require('../controller/vacaCategoryDAO')
const toroCategory_DAO = require('../controller/toroCategoryDAO')
const becerroCategory_DAO = require('../controller/becerroCategoryDAO')


router.post('/allCategorias/',async(req,res)=>{
    idUsuario = req.body.id_usuario
    const categorias =  await categoria_DAO.prototype.listCategorias(idUsuario)
    res.send(categorias)
})

router.post('/createCategoria',async(req,res)=>{
    var valores;
    const nuevaCategoria = new categoria_DAO(req.body.id_usuario,req.body.nombre,req.body.descripcion);
    console.log(nuevaCategoria)
    await categoria_DAO.prototype.createCategoria(nuevaCategoria).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/allCategorias/allBecerros',async(req,res)=>{
    idUsuario = req.body.id_usuario
    const becerros =  await becerro_DAO.prototype.listBecerros(idUsuario)
    res.send(becerros)
})

router.post('/allCategorias/allToros',async(req,res)=>{
    idUsuario = req.body.id_usuario
    const toros =  await toro_DAO.prototype.listToros(idUsuario)
    res.send(toros)
})

router.post('/allCategorias/allVacas',async(req,res)=>{
    idUsuario = req.body.id_usuario
    const vacas = await vaca_DAO.prototype.listVacas(idUsuario);
    res.send(vacas)
})

router.post('/createCategoryToro',async(req,res)=>{
    console.log(req.body);
    console.log("entro categoria back toro: "+req.body);
    const animalCategory = await toroCategory_DAO.prototype.createCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/createCategoryVaca',async(req,res)=>{
    console.log("entro categoria back Vaca: "+req.body);
    const animalCategory = await vacaCategory_DAO.prototype.createCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/createCategoryBecerro',async(req,res)=>{
    console.log("entro categoria back Becerro: "+req.body);
    const animalCategory = await becerroCategory_DAO.prototype.createCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/findListTorosByIdCategory',async(req,res)=>{
    const listarJuego = await toroCategory_DAO.prototype.listToroCategory(req.body.id_usuario,req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findListVacasByIdCategory',async(req,res)=>{
    console.log(req.body);
    const listarJuego = await vacaCategory_DAO.prototype.listVacaCategory(req.body.id_usuario,req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findListBecerrosByIdCategory',async(req,res)=>{
    const listarJuego = await becerroCategory_DAO.prototype.listBecerroCategory(req.body.id_usuario,req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findByIdBecerro',async(req,res)=>{
    const listarJuego = await becerroCategory_DAO.prototype.findByIdBecerro(req.body.id_becerro)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findByIdVaca',async(req,res)=>{
    const listarJuego = await vacaCategory_DAO.prototype.findByIdVaca(req.body.id_vaca)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findByIdToro',async(req,res)=>{
    const listarJuego = await toroCategory_DAO.prototype.findByIdToro(req.body.id_toro)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/updateBecerroByCategory',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await becerroCategory_DAO.prototype.updateCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/updateToroByCategory',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await toroCategory_DAO.prototype.updateCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/updateVacaByCategory',async(req,res)=>{ //Incompleto. Falta actualizar la 
    await vacaCategory_DAO.prototype.updateCategoria(req.body).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/deleteBecerroByCategory',async(req,res)=>{
    console.log(req.body); //Incompleto. Falta actualizar la categoria
    await becerroCategory_DAO.prototype.deleteBecerroCategoria(req.body.id_categoria,req.body.id_becerro,req.body.id_usuario).then(function (user){
        valores = user.dataValues;
        console.log(valores);
        res.send(valores)
    })
})

router.post('/deleteToroByCategory',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await toroCategory_DAO.prototype.deleteToroCategoria(req.body.id_categoria,req.body.id_toro,req.body.id_usuario).then(function (user){
        valores = user.dataValues;
        console.log(valores);
        res.send(valores)
    })
})

router.post('/deleteVacaByCategory',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await vacaCategory_DAO.prototype.deleteVacaCategoria(req.body.id_categoria,req.body.id_vaca,req.body.id_usuario).then(function (user){
        valores = user.dataValues;
        console.log(valores);
        res.send(valores)
    })
})

router.post('/findCategoryBecerroByIdBecerro',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await becerroCategory_DAO.prototype.findCategoryByIdBecerro(req.body.id_becerro).then(function (user){
        console.log(user);
        res.send(user)
    })
})

router.post('/findCategoryToroByIdToro',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await toroCategory_DAO.prototype.findCategoryByIdToro(req.body.id_toro).then(function (user){
        console.log(user);
        res.send(user)
    })
})

router.post('/findCategoryVacaByIdVaca',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    vacaCategory_DAO.prototype.createCategoria
    await vacaCategory_DAO.prototype.findCategoryByIdVaca(req.body.id_vaca).then(function (user){
        console.log(user);
        res.send(user)
    })
})

router.post('/findCategoryBecerroById',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await becerroCategory_DAO.prototype.findCategoryById(req.body.id).then(function (user){
        console.log(user);
        res.send(user)
    })
})

router.post('/deleteCategoria',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    await categoria_DAO.prototype.deleteCategoryById(req.body.id_usuario, req.body.id)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send("se elimino");
})

router.post('/updateCategoria',async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    categoriaActualizar = new categoria_DAO(req.body['id_usuario'],req.body['nombre'],req.body['descripcion']);
    var id = req.body['id_usuario'];
    var idcategoria = req.body['id'];
    await categoria_DAO.prototype.updateCategory(categoriaActualizar,id,idcategoria);
    res.send("Se Actualizo Correctamente");
})

router.post('/deleteBecerroByIdBecerro', async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    console.log(req.body.id);
    await becerroCategory_DAO.prototype.deleteBecerrobyIdBecerro(req.body.id).then(function (user){
        res.send(user);
    })
})

router.post('/deleteVacaByIdVaca', async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    console.log(req.body.id);
    console.log(req.body.id_usuario)
    await vacaCategory_DAO.prototype.deleteVacaByIdVaca(req.body.id_usuario,req.body.id).then(function (user){
        res.send(user);
    })
})

router.post('/deleteToroByIdToro', async(req,res)=>{ //Incompleto. Falta actualizar la categoria
    console.log(req.body.id);
    await toroCategory_DAO.prototype.deleteTorobyIdToro(req.body.id).then(function (user){
        res.send(user);
    })
})

module.exports = router;