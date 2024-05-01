export function formatarStringParaNumber(value: string) {
  if (value !== "" && value !== "R$0,00") {
    return parseFloat(
      value.replace("R$", "").replaceAll(".", "").replaceAll(",", ".")
    );
  } else {
    throw new Error("Invalid value: " + value);
  }
}
