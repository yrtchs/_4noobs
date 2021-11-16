import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMessages } from "../../../redux/posts/posts.calls";
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
import { fetchTagsRequestAsync } from "../../../redux/tags/tags.calls";

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
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map((tag) => (
              <TableRow
                key={tag._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{formatIfNotExistData(tag.title)}</TableCell>
                <TableCell>{formatIfNotExistData(tag.updatedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
