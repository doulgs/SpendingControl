export function formatarData(dataHoraSistema: string) {
  // Divide a string em partes
  const partes = dataHoraSistema.split("T");
  const dataPartes = partes[0].split("-");

  // Rearranja as partes para o formato brasileiro
  const dataBrasileira = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;

  return dataBrasileira;
}
