import React, { ChangeEvent } from "react";
import { Box, Pagination, Typography } from "@mui/material";

export type OnPageChange = (event: ChangeEvent<unknown>, page: number) => void;

type PaginationControlsProps = {
  rowsPerPage?: number;
  totalPages: number;
  totalCount?: number;
  label?: string;
  currentPage: number;
  onPageChange: OnPageChange;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  totalCount = 0,
  currentPage,
  label = "",
  onPageChange,
  color = "primary",
  disabled,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" pb={2} pl={2} pr={1}>
      <Typography variant="subtitle2">
        Total{" "}
        <Typography
          component="span"
          style={{
            fontWeight: 600,
          }}
        >
          {totalCount}
        </Typography>{" "}
        {label}
      </Typography>
      <Pagination
        size="small"
        disabled={disabled}
        color={color}
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
    </Box>
  );
};
