/// <reference types="vite/client" />

declare module "*.avif";
declare module "*.bmp";
declare module "*.gif";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module "*.webp";
declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";
  const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}
