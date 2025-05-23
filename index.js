document.getElementById("avaliacao").addEventListener("submit", function (e) {
  e.preventDefault();

  const getValor = (id, tipo = "texto") => {
    const el = document.getElementById(id);
    return tipo === "numero" ? parseFloat(el.value) : el.value;
  };

  const deambula = getValor("deambula");
  const alerta = getValor("alerta");
  const apetite = getValor("apetite");
  const hidratado = getValor("hidratado");
  const oximetria = getValor("oximetria", "numero");
  const glasgowConsciencia = parseInt(getValor("glasgow_consciencia"), 10);
  const temperatura = getValor("temperatura", "numero");
  const dificuldadeResp = getValor("dificuldade_respiratoria");
  const sangramentos = getValor("sangramentos");
  const comportamento = getValor("comportamento");
  const glasgowDor = parseInt(getValor("glasgow_dor"), 10);
  const respostaNeuro = getValor("resposta_neuro");

  let resultado = "";

  const sinaisDeAlta =
    deambula === "Sim" &&
    alerta === "Sim" &&
    apetite === "Sim" &&
    hidratado === "Sim" &&
    oximetria >= 95 &&
    glasgowConsciencia >= 15 &&
    temperatura >= 38 &&
    temperatura <= 39;

  let sinaisGraves = 0;

  if (deambula === "nao") sinaisGraves++;
  if (oximetria < 90) sinaisGraves++;
  if (temperatura < 36 || temperatura > 40) sinaisGraves++;
  if (dificuldadeResp === "Sim") sinaisGraves++;
  if (sangramentos === "Sim") sinaisGraves++;
  if (comportamento === "Sim") sinaisGraves++;

  const sinaisDeEutanasia = glasgowDor >= 18 || respostaNeuro === "Sim";

  if (sinaisGraves >= 2) {
    resultado = "🔴 Paciente com indícios de um provável óbito.🔴";
  } else if (sinaisDeEutanasia) {
    resultado = "🔴 Paciente com indicação de eutanásia.🔴";
  } else if (sinaisDeAlta) {
    resultado = "🟢 Paciente de alta!🟢";
  } else {
    resultado =
      "🟡 Paciente em condição intermediária, será necessário observação, indicação de internamento!🟡";
  }

  document.getElementById("resultado").style.display = "block";
  document.getElementById("resultado").textContent = resultado;
});
