import { Auth } from "aws-amplify";

// constantes :  ese estado se consume en algunos componentes

const User = {
  object: {},
  loading: false,
};

// types
const Get_User = "Get_User";

//reducer :  acepta esta lista de pokemones y lo envia a una constante o estado

export default function UserReducer(state = User, action) {
  switch (action.type) {
    case Get_User:
      return {
        ...state,
        object: action.pyload.object,
        loading: action.pyload.loading,
      };
    // case Get_Siguiente_poke_exito:
    //   return {
    //     ...state,
    //     object: action.pyload.object,
    //     offset: action.pyload.offset,
    //   };

    default:
      return state;
  }
}

//acciones : Consume la Api  de pokemones y una vez lo tenemos la mandamos a reducer =0=== tambien permite con otra opciones  eliminar pokemos de la lista lo cual significa que en este archivo van a estar todas las acciones vinculadas con pokemones

// dispatch: activar el reducer
// getState : obtener data inicial o la ke este en state
export const getUserAccion = () => async (dispatch, getState) => {
  try {
    let res = await Auth.currentUserInfo();

    dispatch({
      type: Get_User,
      pyload: {
        object: res,
        loading: true,
      },
    });
  } catch (error) {
    console.log("error fetching User");
  }
};
