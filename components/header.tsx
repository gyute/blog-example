"use client";

import Link from "next/link";
import React from "react";

import { ABOUT_ROUTE, BLOG_TITLE, HOME_ROUTE } from "./constants";

export const Header: React.FC = () => {
  return (
    <header className="pb-14 pt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="my-0">
            <Link href={"/"}>{BLOG_TITLE}</Link>
          </h1>
        </div>
        <div className="flex space-x-5">
          <nav>
            <ul className="flex space-x-5">
              <li>
                <Link href={HOME_ROUTE}>Home</Link>
              </li>
              <li>
                <Link href={ABOUT_ROUTE}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
