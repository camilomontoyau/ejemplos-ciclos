var color = "amarillo";

//ejemplo if
if (color === "rosado") {
  console.log("el color es rosado");
} else if (color === "amarillo") {
  console.log("el color es amarillo y no me gusta");
} else {
  console.log("no es rosado y no es amarillo");
}

//ejemplo switch

switch (color) {
  case "rosado":
    console.log("el color es rosado");
    break;
  case "amarillo":
    console.log("el color es amarillo y no me gusta");
    break;
  default:
    console.log("no es rosado y no es amarillo");
}

switch (color) {
  case "rosado":
  case "amarillo":
    console.log("el color es amarillo o rosado");
    break;
  default:
    console.log("no es rosado y no es amarillo");
}
