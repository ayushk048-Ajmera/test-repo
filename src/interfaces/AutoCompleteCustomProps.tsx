interface AutoCompleteCustomPropsOpt {
  id: number;
  title: string;
  icon: JSX.Element | string;
  year: number;
}

export default interface AutoCompleteCustomProps {
  id: number;
  label: string;
  variant: "filled" | "outlined" | "standard";
  options: Array<AutoCompleteCustomPropsOpt>;
}
