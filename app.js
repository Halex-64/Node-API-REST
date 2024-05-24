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
        preço: 22,
    },
    {
        id: 2,
        nome: "Maçã",
        desc: "maca :)",
        custo: 10,
        preço: 22,
    },
    {
        id: 3,
        nome: "Melancia",
        desc: "melancia :)",
        custo: 10,
        preço: 22,
    }
]