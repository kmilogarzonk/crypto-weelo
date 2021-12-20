import { DEFAULT_STYLES, TEXT_PAGE, TEXT_PAGE_SEPARATOR } from "../../config/constants";

export const styleTable = {
  table: {
    style: {
      ...DEFAULT_STYLES
    },
  },
  head: {
    style: {
      ...DEFAULT_STYLES
    },
  },
  headRow: {
    style: {
      ...DEFAULT_STYLES,
      fontWeight: '900'
    },
  },
  cells: {
    style: {
      ...DEFAULT_STYLES
    },
  },
  rows: {
    style: {
      ...DEFAULT_STYLES
    },
  },
  pagination: {
    style: {
      ...DEFAULT_STYLES
    },
  },
};

export const settingsPagination = {
  rowsPerPageText: TEXT_PAGE,
  rangeSeparatorText: TEXT_PAGE_SEPARATOR,
  selectAllRowsItem: false,
}
