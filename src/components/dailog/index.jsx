import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import usePlayList from "../../hooks/usePlayList";

const PlaylistAddDialog = ({ open, setopen }) => {
  const { getPlaylistById } = usePlayList();
  const [InputValue, setInputValue] = React.useState(null);

  const handleTogol = () => {
    setopen(false);
  };

  const AddToPlaylist = () => {
    if (InputValue) {
      if (InputValue.startsWith("https://www.youtube.com")) {
        const regex = /list=([\w-]+)/;
        const match = InputValue.match(regex);
        const playlistId = match[1];
        getPlaylistById(playlistId);
      } else if (InputValue.startsWith("PL")) {
        getPlaylistById(InputValue);
      } else {
        return;
      }
    } else {
      console.log("input e dewa hoi nai");
    }
    handleTogol();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleTogol}>
        <DialogTitle>URL or playlist Id</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please provide a valid url or playlist id that you want to add.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="purl"
            label="Youtube palulist URL or playlist Id"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTogol}>Close</Button>
          <Button onClick={AddToPlaylist}>Add playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlaylistAddDialog;
