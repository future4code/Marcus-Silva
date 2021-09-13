```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let primeiraNota = ex * 1;
  let segundaNota = p1 * 2;
  let terceiraNota = p2 * 3;

  let media = (primeiraNota + segundaNota + terceiraNota) / 6;

  if (media >= 9) {
    return "A";
  } else if (media >= 7.5 && media < 9) {
    return "B";
  } else if (media >= 6 && media < 7.5) {
    return "C";
  } else if (media < 6) {
    return "D";
  }
}
```
