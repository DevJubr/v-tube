import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PlaylistModalVideo from "./modals-videos";
import { useStoreActions } from "easy-peasy";

const PlaylistModal = ({ videos, handleClose, open, scroll, setOpen }) => {
  const { addVideId } = useStoreActions((actions) => actions.videoId);
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">playlist title</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {videos?.map((item, ingt) => (
              <div
                onClick={() => {
                  setOpen(!open);
                  addVideId(item?.contentDetails?.videoId);
                }}
              >
                <PlaylistModalVideo
                  key={ingt}
                  cnlname={item.snippet.channelTitle}
                  thumbnails={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                />
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PlaylistModal;
