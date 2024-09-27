const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  promocao: { type: Number, default: 0 },
  preco: { type: Number, required: true },
  imagem: { type: Number, required: true },
  dataLancamento: { type: Date, default: Date.now },
});

module.exports = mongoose.model("produtos", produtoSchema);
