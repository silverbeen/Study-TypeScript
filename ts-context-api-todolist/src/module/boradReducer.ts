import { idText } from "typescript";

//액션 타입
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";

export const boardSave = (saveData: any) => ({
  type: MODE_SAVE,
  saveData: {
    boardId: saveData.boardId,
    boardTitle: saveData.boardTitle,
    boardContent: saveData.boardContent,
  },
});

export const boardRemove = (boardId: any) => ({
  type: MODE_REMOVE,
  boardId: boardId,
});

export const boardSelectRow = (boardId: any) => ({
  type: MODE_SELECT_ROW,
  boardId: boardId,
});

const initialState = {
  boards: [
    {
      boardId: 1,
      boardTitle: "silver",
      boardContext: "은빈은빙느빙느빈",
    },
    {
      boardId: 2,
      boardTitle: "silver",
      boardContext: "은빈은빙느빙느빈",
    },
    {
      boardId: 3,
      boardTitle: "silver",
      boardContext: "은빈은빙느빙느빈",
    },
    {
      boardId: 4,
      boardTitle: "silver",
      boardContext: "은빈은빙느빙느빈",
    },
  ],
  lastId: 4,
  selectRowDate: {},
};

//리듀서
export default function boardReducer(
  state: {
    boards: {
      boardId: number;
      boardTitle: string;
      boardContext: string;
    }[];
    lastId: number;
    selectRowData: any;
  },
  action: any
) {
  switch (action.type) {
    case MODE_REMOVE:
      return {
        ...state,
        boards: state.boards.filter((row) => row.boardId !== action.boardId),
      };
    case MODE_SAVE:
      if (action.saveData.boardID === "") {
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...action.saveData,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        return {
          ...state,
          boards: state.boards.map((data) =>
            data.boardId === action.saveData.boardId
              ? {
                  ...action.saveData,
                }
              : data
          ),
          selectRowData: {},
        };
      }
    case MODE_SELECT_ROW:
      return {
        ...state,
        selectRowData:
          state.boards.find((row) => row.boardId) === action.boarId,
      };
      }
        default:
        return state
}
