var detalhes = {
  versao: 1.0,
  contato: "fulano@gmail.com"
};
var professor = {
  nome: "Zicrano",
  siape: 12345
}
var turma = {
  codigo: "dcc158",
  alunos: [
    {matricula:"20161233", nome:"Fulano"},
    {matricula:"20161234", nome:"Beltrano"},
    {matricula:"20161236", nome:"Ciclano"}
  ]
}

module.exports.home = function (req, res, next) {
  res.render("index",{
    titulo: "Olá mundo MVC!"
  });
}

module.exports.contato = function (req, res, next) {
  res.send(detalhes);
}

module.exports.contatoHTML = function (req, res, next) {
  res.render('contato', detalhes);
}

module.exports.turma = function (req, res, next) {
  res.render('turma', {prof: professor, t:turma});
}
