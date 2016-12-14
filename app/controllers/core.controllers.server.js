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
  res.render('index',{
    titulo: "Olá mundo MVC!"
  });
}

module.exports.registro = function (req, res, next) {
  res.render('registro',{
    titulo: "Olá mund"
  });
}

module.exports.agendamento = function (req, res, next) {
  res.render('agendamento',{
    titulo: "Olá mund"
  });
}

module.exports.resultados = function (req, res, next) {
  res.render('resultados',{
    titulo: "Olá mund"
  });
}

module.exports.classificacao = function (req, res, next) {
  res.render('classificacao',{
    titulo: "Olá mund"
  });;
}

module.exports.contato = function (req, res, next) {
  res.render("index",{
    titulo: "Olá mund"
  });
}

module.exports.contatoHTML = function (req, res, next) {
  res.render('contato', detalhes);
}

module.exports.turma = function (req, res, next) {
  res.render('turma', {prof: professor, t:turma});
}
