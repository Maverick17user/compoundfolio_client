// To avoiding TS images type issues 

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}