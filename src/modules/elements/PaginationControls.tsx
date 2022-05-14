import React, { ChangeEvent } from "react";
import { Box, Pagination, useTheme } from "@mui/material";

export type OnPageChange = (event: ChangeEvent<unknown>, page: number) => void;

type PaginationControlsProps = {
  rowsPerPage?: number;
  totalPages: number;
  currentPage: number;
  onPageChange: OnPageChange;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

// const useStyles = makeStyles({
//   root: {
//     "& .MuiPaginationItem-icon": {
//       color: (props: { color: "primary" | "secondary" }) =>
//         `${props.color === "primary" ? YELLOW : BLUE}`,
//     },
//
//     "& .MuiPaginationItem-textPrimary:not(.Mui-selected)": {
//       color: (props: { color: "primary" | "secondary" }) =>
//         `${props.color === "primary" ? YELLOW : BLUE}`,
//     },
//   },
// });

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  color = "primary",
  disabled,
}) => {
  const { spacing } = useTheme();
  // const styles = useStyles({ color });

  return (
    <Box
      display="flex"
      alignItems="center"
      style={{ gap: spacing(2) }}
      // className={styles.root}
    >
      <Pagination
        disabled={disabled}
        color={color}
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
    </Box>
  );
};
