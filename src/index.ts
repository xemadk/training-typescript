interface Patient {
  id: string;
  name: string;
  state: State;
}

type State = "Ingreso" | "Estancia" | "Altas";

const pat1 = {
  id: "1",
  name: "Joan",
  state: "Ingreso"
} as Patient;

const updateState = (pat: Patient, newState: State) => {
  pat = { ...pat, state: newState };
  console.log(pat.state);
};

updateState(pat1, "Altas");

//Typos enlazados. Se actualizara prodcutname si se actualiza product item.
interface ProductItem {
  name: string;
  prive: number;
}

type ProductName = ProductItem["name"];

//Tupos condicionados
type DarkColors = "black" | "gray";
type LightColors = "white" | "yellow";

type Status = "sad" | "happy";

type Palette<P extends Status> = P extends "sad" ? DarkColors : LightColors;

const palette: Palette<"happy"> = "white";
