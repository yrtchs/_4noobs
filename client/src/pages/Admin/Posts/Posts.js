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

export default function Posts() {
  const dispatch = useDispatch();
  const {
    data: posts,
    errorMessage,
    isFetching,
    message,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchMessages());
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
              <TableCell>Categories</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{formatIfNotExistData(post.title)}</TableCell>
                <TableCell>{formatIfNotExistData(post.tags)}</TableCell>
                <TableCell>{formatIfNotExistData(post.categories)}</TableCell>
                <TableCell>{formatIfNotExistData(post.author)}</TableCell>
                <TableCell>{formatIfNotExistData(post.updatedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
