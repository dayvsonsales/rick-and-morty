import React from "react";

const MemoImage = ({ src, alt }) => {
  return <img alt={alt} src={src} />;
};

export default React.memo(MemoImage);
