const HomeModel = require('../models/HomeModel');

exports.homeGet = (req, res) => {
    res.render('index');
};

exports.homePost = async (req, res) => {
    const tarefa = req.body.nome;
    const data = new Date(req.body.data);
    const time = req.body.time;

    const Tarefa = new HomeModel({
        tarefa,
        data,
        time,
    });

    try {
        await Tarefa.save();
        console.log('Tarefa salva com sucesso');
        res.render("index")
    } catch (err) {
        console.log(err);
        res.render("404")
    }
};
