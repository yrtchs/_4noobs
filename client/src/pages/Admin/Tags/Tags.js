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
  fetchTagsRequestAsync,
  deleteTagRequestAsync,
} from "../../../redux/tags/tags.calls";
import Button from "@mui/material/Button";

export default function Tags() {
  const dispatch = useDispatch();
  const {
    data: tags,
    errorMessage,
    isFetching,
    message,
  } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTagsRequestAsync());
  }, []);

  const handleDeleteTag = (id) => {
    dispatch(deleteTagRequestAsync(id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map((tag) => (
              <TableRow
                key={tag._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{formatIfNotExistData(tag.name)}</TableCell>
                <TableCell>{formatIfNotExistData(tag.updatedAt)}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteTag(tag._id)}
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
