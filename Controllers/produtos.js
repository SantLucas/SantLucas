const Produto = require('../Models/Produto');

module.exports.cadastrar = (req, res) => {
       try {
            const newProduto = new Produto({
                nome: req.body.nome,
                descricao: req.body.descricao,
                foto: 'http://lorempixel.com/400/200',
                preco: req.body.preco,
                createdAt: req.body.createdAt,
                variacao: {
                    cor: [req.body.cor],
                    tamanho: [req.body.tamanho]
                }             
            })
    
            newProduto.save()
                .then(produto => {
                    res.json(produto);
                })
                .catch(error => {
                    console.log(error);
                })
       } catch (error) {
           throw error;
       }
}

module.exports.listar = (req, res) => {

}

