// declare module "*.svg" {
//   const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default value;
// }

declare module "*.svg" {
  const content: any;
  export default content;
}
