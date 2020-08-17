import { API } from "aws-amplify";

// constantes :  ese estado se consume en algunos componentes

const Photo = {
  array: [],
  loading: false,
};

// types
const Get_Photo = "Get_Photo";

//reducer :  acepta esta lista de pokemones y lo envia a una constante o estado

export default function PhotoReducer(state = Photo, action) {
  switch (action.type) {
    case Get_Photo:
      return {
        ...state,
        array: action.pyload.array,
        loading: action.pyload.loading,
      };
    // case Get_Siguiente_poke_exito:
    //   return {
    //     ...state,
    //     array: action.pyload.array,
    //     offset: action.pyload.offset,
    //   };

    default:
      return state;
  }
}

//acciones : Consume la Api  de pokemones y una vez lo tenemos la mandamos a reducer =0=== tambien permite con otra opciones  eliminar pokemos de la lista lo cual significa que en este archivo van a estar todas las acciones vinculadas con pokemones

// dispatch: activar el reducer
// getState : obtener data inicial o la ke este en state
export const getPhotoAccion = () => async (dispatch, getState) => {
  try {
    const res = await API.get("mascots", "/mascots/photocard");

    dispatch({
      type: Get_Photo,
      pyload: {
        array: res.data,
        loading: true,
      },
    });
  } catch (error) {
    console.log("error fetching from Lambda API");
  }
};
