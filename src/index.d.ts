// css config for css modules
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.png'
declare module '*.jpg'