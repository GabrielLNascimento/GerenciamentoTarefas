const HomeModel = require('../models/HomeModel');

exports.tarefasGet = async (req, res) => {
    try {
        const tarefas = await HomeModel.find();
        res.render('tarefas', {
            tarefas,
        });
    } catch (err) {
        console.log(err);
        res.render('404')
    }
};

exports.tarefaApagar = async (req, res) => {
    try {
        await HomeModel.deleteOne({_id: req.body.id})
        res.redirect("/tarefas")
    } catch (err) {
        console.log(err)
        res.render('404')
    }
    
}
