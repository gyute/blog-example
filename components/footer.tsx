import React from "react";

import { AUTHOR } from "./constants";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-4 pt-20">
      <div className="container mx-auto flex justify-between text-center">
        <h3>Copyright &copy; 2024 {AUTHOR}</h3>
      </div>
    </footer>
  );
};
