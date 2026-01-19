import React from "react";

export const ptComponents = {
  block: {
    // default block renderer for normal text
    normal: ({ children }: any) => <p className="p">{children}</p>,
    h2: ({ children }: any) => <h2 className="h2">{children}</h2>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value?.href} target={value?.blank ? "_blank" : undefined}>
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <img src={value?.asset?.url} alt={value?.alt || ""} />
    ),
  },
};

export default ptComponents;
