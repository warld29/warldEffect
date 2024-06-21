// eslint-disable-next-line no-unused-vars
import React from "react";

export const links = [
  {
    name: "collection",
    submenu: true,
    sublinks: [
      {
        Head: "Occations",
        sublink: [
          { name: "Wedding", link: "/wedding" },
          { name: "Birthdays", link: "/Birthdays" },
          { name: "Functions", link: "/Functions" },
          { name: "Outdoor Event", link: "/Outdoor Event" },
        ],
      },
    ],
  },
  {
    name: "portraits",
    submenu: true,
    sublinks: [
      {
        Head: "A-Art",
        sublink: [
          { name: "Nature", link: "/Nature" },
          { name: "Models", link: "/Models" },
          { name: "Animals", link: "/Animals" },
          { name: "Aesthetic", link: "/Aesthetic" },
        ],
      },
    ],
  },
];
