export interface State {
  initalSetupCompleted: boolean;
  questionAnswered: {
    "haushalt": boolean;
    "warmwasser": boolean;
    "heizen": boolean;
    "elektronik": boolean;
  }
}
