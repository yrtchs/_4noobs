import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatIfNotExistData } from "../../../utils/general";
import {
  fetchCategoriesRequestAsync,
  deleteCategoryRequestAsync,
} from "../../../redux/categories/categories.calls";
import Button from "@mui/material/Button";

export default function Categories() {
  const dispatch = useDispatch();
  const {
    data: categories,
    errorMessage,
    isFetching,
    message,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoriesRequestAsync());
  }, []);

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategoryRequestAsync(id));
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{formatIfNotExistData(category.name)}</TableCell>
                <TableCell>{formatIfNotExistData(category.descr)}</TableCell>
                <TableCell>
                  {formatIfNotExistData(category.createdAt)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteCategory(category._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
