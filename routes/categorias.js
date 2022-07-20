const router = require('express').Router();
const categoria_DAO  = require('../controller/categoriaDAO')
const becerro_DAO = require('../controller/becerroDAO')
const toro_DAO = require('../controller/toroDAO')
const vaca_DAO = require('../controller/vacaDAO')
const vacaCategory_DAO = require('../controller/vacaCategoryDAO')
const toroCategory_DAO = require('../controller/toroCategoryDAO')
const becerroCategory_DAO = require('../controller/becerroCategoryDAO')


router.get('/allCategorias',async(req,res)=>{
    const categorias =  await categoria_DAO.prototype.listCategorias()
    res.send(categorias)
})

router.post('/createCategoria',async(req,res)=>{
    var valores;
    const nuevaCategoria = new categoria_DAO(req.body.nombre,req.body.descripcion);
    await categoria_DAO.prototype.createCategoria(nuevaCategoria).then(function (user){
        valores = user.dataValues;
        res.send(valores)
    })
})

router.post('/findCategoryByName',async(req,res)=>{
    const listarJuego = await categoria_DAO.prototype.getCategoryByName(req.body.nombre)
    res.send(listarJuego)
})

router.get('/allCategorias/allBecerros',async(req,res)=>{
    const becerros =  await becerro_DAO.prototype.listBecerros()
    res.send(becerros)
})

router.get('/allCategorias/allToros',async(req,res)=>{
    const toros =  await toro_DAO.prototype.listToros()
    res.send(toros)
})

router.get('/allCategorias/allVacas',async(req,res)=>{
    const vacas =  await vaca_DAO.prototype.listVacas()
    res.send(vacas)
})

router.post('/createCategoryToro',async(req,res)=>{
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
    const listarJuego = await toroCategory_DAO.prototype.listToroCategory(req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findListVacasByIdCategory',async(req,res)=>{
    const listarJuego = await vacaCategory_DAO.prototype.listVacaCategory(req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
})

router.post('/findListBecerrosByIdCategory',async(req,res)=>{
    const listarJuego = await becerroCategory_DAO.prototype.listBecerroCategory(req.body.id_categoria)//categoria_DAO.prototype.getCategoryById(req.body.id)
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
    //id = req.body['id_categoria'];
    console.log(req.body)
    const listarJuego = await becerroCategory_DAO.prototype.updateCategoria(req.body)//categoria_DAO.prototype.getCategoryById(req.body.id)
    res.send(listarJuego)
    //res.send("prueba")
})

module.exports = router;