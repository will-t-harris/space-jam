import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  DraftEditorCommand,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import store from "store";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const rawDraftContentState = convertToRaw(editorState.getCurrentContent());
    store.set("content", rawDraftContentState);
  }, [editorState]);

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
    <>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Enter text here"
        textAlignment="center"
      />
    </>
  );
};

export default MyEditor;
