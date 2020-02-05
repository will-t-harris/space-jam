import React, { FunctionComponent } from "react";

type CardProps = {
  title: string;
  paragraph: string;
};

const Card: FunctionComponent<CardProps> = ({ title, paragraph, children }) => (
  <aside>
    <h2 className="text-primaryText pt-10">{title}</h2>
    <p className="text-primaryText">{paragraph}</p>
    {children}
  </aside>
);

export default Card;
