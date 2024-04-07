export const obterDataHora = () => {
  const data = new Date();

  const horas = ("0" + data.getHours()).slice(-2);
  const minutos = ("0" + data.getMinutes()).slice(-2);
  const segundos = ("0" + data.getSeconds()).slice(-2);
  const milissegundos = ("00" + data.getMilliseconds()).slice(-3);
  const dia = ("0" + data.getDate()).slice(-2);
  const mes = ("0" + (data.getMonth() + 1)).slice(-2);
  const ano = data.getFullYear();

  const dataHoraSistema = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milissegundos}Z`;
  const dataHoraAtual = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
  const horaAtual = `${horas}:${minutos}`;
  const dataAtual = `${dia}/${mes}/${ano}`;

  return { dataHoraAtual, horaAtual, dataAtual, dataHoraSistema };
};
