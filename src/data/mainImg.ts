interface ImgObj {
  id: number;
  name: string;
  url: string;
}

const mainImg: ImgObj[][] = [
  [
    { id: 0, name: "bacon-img", url: "bacon.png" }, // 0
    { id: 1, name: "ramen-img", url: "ramen.png" }, // 1*
    { id: 2, name: "salad-img", url: "salad.png" }, // 2
  ], // 1
  [
    { id: 3, name: "toast-img", url: "toast.png" },
    { id: 4, name: "banana-img", url: "banana.png" },
    { id: 5, name: "chicken-img", url: "chicken.png" },
  ], // 2
  [
    { id: 6, name: "soup-img", url: "soup.png" },
    { id: 7, name: "dumpling-img", url: "dumpling.png" },
    { id: 8, name: "bagle-img", url: "bagle.png" },
  ], // 3
  [
    { id: 9, name: "egg-img", url: "egg.png" },
    { id: 10, name: "hotdog-img", url: "hotdog.png" },
    { id: 11, name: "cupcake-img", url: "cupcake.png" },
  ], // 4
  [
    { id: 12, name: "shrimp-img", url: "shrimp.png" },
    { id: 13, name: "curry-img", url: "curry.png" },
    { id: 14, name: "waffle-img", url: "waffle.png" },
  ], // 5
  // [
  //   { id: 15, name: "donut-img", url: "donut.png" },
  //   { id: 16, name: "juice-img", url: "juice.png" },
  //   { id: 17, name: "bread-img", url: "bread.png" },
  // ], // 6
  // [
  //   { id: 18, name: "spaghetti-img", url: "spaghetti.png" },
  //   { id: 19, name: "sushi-img", url: "sushi.png" },
  //   { id: 20, name: "cake-img", url: "cake.png" },
  // ], // 7
];

export default mainImg;
