import authorImageUrl from "../public/images/profile-image.jpg";
import img1 from "../public/images/alexander-shatov-mr4JG4SYOF8-unsplash.jpg";
import img2 from "../public/images/eaters-collective-i_xVfNtQjwI-unsplash.jpg";
import img3 from "../public/images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg";
import img4 from "../public/images/igor-miske-JVSgcV8_vb4-unsplash.jpg";

const date = new Date().toDateString();

export const blogs = [
    {
        _id: 1,
        title: "Blog 1",
        summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
        image: img1,
        author: "John Doe",
        authorImage: authorImageUrl,
        date: date,
    },
    {
        _id: 2,
        title: "Blog 2",
        summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
        image: img2,
        author: "Agnes Keen",
        authorImage: authorImageUrl,
        date: date,
    },
    {
        _id: 3,
        title: "Blog 3",
        summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
        image: img3,
        author: "Jane Doe",
        authorImage: authorImageUrl,
        date: date,
    },
    {
        _id: 4,
        title: "Blog 4",
        summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
        image: img4,
        author: "Harold Cooper",
        authorImage: authorImageUrl,
        date: date,
    },
];
