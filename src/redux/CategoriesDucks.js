import { API } from "aws-amplify";

// constantes :  ese estado se consume en algunos componentes

const categories = {
  array: [],
};

// types
const Get_Categories = "Get_Categories";

//reducer :  acepta esta lista de pokemones y lo envia a una constante o estado

export default function CategoryReducer(state = categories, action) {
  switch (action.type) {
    case Get_Categories:
      return { ...state, array: action.pyload };
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
export const getCategoriesAccion = () => async (dispatch, getState) => {
  try {
    const res = await API.get("mascots", "/mascots");
    dispatch({
      type: Get_Categories,
      pyload: res.data,
    });
  } catch (error) {
    console.log("error fetching from Lambda API");
  }
};
// export const getPokeAccionSiguiente = () => async (dispath, getState) => {
//   try {
//     const offset = getState().pokemones.offset;
//     const siguiente = offset + 20;
//     console.log(offset);
//     const res = await axios(
//       `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}=0&limit=20`
//     );
//     dispath({
//       type: Get_Siguiente_poke_exito,
//       pyload: {
//         array: res.data.results,
//         offset: siguiente,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
