export const getDateTime = () => {
  const data = new Date();

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const horas = ("0" + data.getHours()).slice(-2);
  const minutos = ("0" + data.getMinutes()).slice(-2);
  const segundos = ("0" + data.getSeconds()).slice(-2);
  const milissegundos = ("00" + data.getMilliseconds()).slice(-3);
  const dia = ("0" + data.getDate()).slice(-2);
  const mesIndex = data.getMonth();
  const mes = ("0" + (data.getMonth() + 1)).slice(-2);
  const mesFormat = meses[mesIndex];
  const ano = data.getFullYear();

  const horaAtual = `${horas}:${minutos}`;
  const dataSistema = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milissegundos}Z`;
  const dataAtualBR = `${dia}/${mes}/${ano}`;
  const dataAtualENG = `${ano}/${mes}/${dia}`;
  const dataAtual = `${dia}/${mesFormat}/${ano}`;
  const dataHoraAtual = `${dia}/${mesFormat}/${ano} as ${horas}:${minutos}`;

  return {
    dataHoraAtual,
    horaAtual,
    dataAtual,
    dataAtualBR,
    dataAtualENG,
    dataSistema,
  };
};
