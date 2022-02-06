// import { v4 as uuid } from "uuid";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_INPUT":
//       return {
//         ...state,
//         input: {
//           ...state.input,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "ADD_ITEM":
//       const { text, number } = state.input;
//       return {
//         ...state,
//         list: [...state.list, { id: uuid(), text, number }],
//       };
//     case "REMOVE_ITEM":
//       let items = [...state.list];
//       items = items.filter((item) => {
//         return item.id !== action.payload;
//       });
//       return { ...state, list: [...items] };
//   }

//   return state;
// };
