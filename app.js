import express from 'express';
const app = express();
app.use(express.json());

app.get("/",(req,res) =>{
    res.status(200).send("OK");
});

const produtos = [
    {
        id: 1,
        nome: "Banana",
        desc: "banana :)",
        custo: 10,
        preco: 22,
    },
    {
        id: 2,
        nome: "Maçã",
        desc: "maca :)",
        custo: 10,
        preco: 22,
    },
    {
        id: 3,
        nome: "Melancia",
        desc: "melancia :)",
        custo: 10,
        preco: 22,
    }
]

function buscaProdutos(id){
    return produtos.findIndex(produtos =>{
        return produtos.id === Number(id);
    })
}

app.route("/produtos")
    .get((req,res) =>{
        res.status(200).json(produtos);
    })
    .post((req,res) => {
        produtos.push(req.body);
        res.status(201).send("Produto cadastrado com sucesso");
    })

app.route("/produtos/:id")
    .get((req,res) =>{
        const id = buscaProdutos(req.params.id);
        res.status(200).json(produtos[id]);
    })
    .put((req,res) => {
        const id = buscaProdutos(req.params.id);
        produtos[id].nome = req.body.nome;
        produtos[id].desc = req.body.desc;
        produtos[id].custo = req.body.custo;
        produtos[id].preco = req.body.preco;
        res.status(200).json(produtos[id]);
    })
    .delete((req,res) =>{ 
        const id = buscaProdutos(req.params.id);
        if(produtos[id]){
            produtos.splice(id, 1);
            res.status(200).send("Produto removido");
        } else {
            res.status(200).send("Produto nao encontrado");
        }
    });

    export default app;
