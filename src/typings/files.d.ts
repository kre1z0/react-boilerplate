declare const img: string;

declare module "*.png" {
  export default img;
}

declare module "*.svg" {
  export default img;
}

declare module "*.jpg" {
  export default img;
}

declare module "react-icomoon";
