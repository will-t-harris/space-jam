import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RawDraftContentState,
  RichUtils,
  DraftEditorCommand,
} from "draft-js";
import "draft-js/dist/Draft.css";
import store from "store";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onSave = (content: RawDraftContentState) => {
    store.set("entry", content);
  };

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
    />
  );
};

export default MyEditor;
