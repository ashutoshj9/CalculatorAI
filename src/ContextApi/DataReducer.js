import CreateContext from "./CreateContext";

const PassReducer = (state, action) => {
  //#region  OPERATOR RESULT
  const operatorResult = () => {
    console.log(action.inputKey)
    if (state.result) {
      return state.result.toString().concat(action.inputKey)
    } else {
      return state.input.concat(action.inputKey);
    }
  }
  //#endregion
  //#region INSERT SYMBOL
  const insert = () => {
    console.log(state.input)
    if (state.input.includes(".")) {
      return state.input
    } else {
      return state.input.concat(action.inputKey)
    }
  }
  //#endregion
  switch (action.type) {
    case "error":
      return { ...state, payload: action.error };
    case "input":
      return { ...state, key: action.inputKey, input: state.input.concat(action.inputKey) };
    case "clear":
      return {
        ...state, key: "",
        input: "",
        previous: "",
        result: ""
      };
    case "del":
      return { ...state, input: state.input.slice(0, state.input.length - 1) };
    case "operator":
      return {
        ...state,
        input: "",
        key: action.inputKey,
        previous: operatorResult()
      };
    case "insert": return {
      ...state,
      input: insert()
    }
    case "result": return {
      ...state,
      result: action.result
    }
    default:
      return state;
  }
};

const ErrorMessage = (dispatch) => () => {
  dispatch({
    type: "error",
    error: "Error Occured!",
  });
};

const KeyInput = (dispatch) => (key, id) => {
  // console.log(key)
  if (id === 0) {
    dispatch({ type: "clear" });
  } else if (id === 1) {
    dispatch({ type: "del" });
  } else if (id === 3 || id === 7 || id === 11 || id === 15 || id === 16) {
    dispatch({ type: "operator", inputKey: key });
  } else if (id === 18) {
    dispatch({ type: "insert", inputKey: key })
  } else {
    dispatch({
      type: "input",
      inputKey: key.toString(),
    });
  }
};

const CalcResult = (dispatch) => (result, current) => {
  if (result.includes("+")) {
    const output = current ? parseFloat(result.split("+").join('')) + parseFloat(current) : parseFloat(result.split("+").join(''))
    dispatch({ type: "result", result: output })
  } else if (result.includes("-")) {
    const output = current ? parseFloat(result.split("+").join('')) - parseFloat(current) : parseFloat(result.split("-").join(''))
    dispatch({ type: "result", result: output })
  } else if (result.includes("X")) {
    const output = current ? parseFloat(result.split("+").join('')) * parseFloat(current) : parseFloat(result.split("X").join(''))
    dispatch({ type: "result", result: output })
  } else if (result.includes("/")) {
    const output = current ? parseFloat(result.split("+").join('')) / parseFloat(current) : parseFloat(result.split("/").join(''))
    dispatch({ type: "result", result: output })
  } else if (result.includes("%")) {
    const output = (parseFloat(result.split("/").join('')) / 100)
    dispatch({ type: "result", result: output })
  }
}

export const { Context, Provider } = CreateContext(
  PassReducer,
  { ErrorMessage, KeyInput, CalcResult },
  {
    payload: null,
    key: "",
    input: "",
    previous: "",
    result: ""
  }
);
