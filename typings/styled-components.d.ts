import * as React from "react";
import { StatelessComponent } from "react";

type GeneralComponent<P> = React.ComponentClass<P> | React.StatelessComponent<P>;
type ConstrainedProps<C, P> = C & ({ defaultProps?: P } | { new(props?: P, context?: any): any });
type PropsResolver<P> = (props: P) => string;
type TemplateStringsValue<P> = PropsResolver<P> | string | number;

interface StyledFunction<T, P> {
  (strs: TemplateStringsArray, ...fns: TemplateStringsValue<P>[]): T;
}

interface StyledInterface {
  <C extends GeneralComponent<P>, P>(component: ConstrainedProps<C, P>): StyledFunction<C, P>;

  a: StyledFunction<React.SFC<React.HTMLProps<HTMLButtonElement>>, React.HTMLAttributes<HTMLAnchorElement>>;
  abbr: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  address: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  area: StyledFunction<React.SFC<React.HTMLProps<HTMLAreaElement>>, React.HTMLAttributes<HTMLAreaElement>>;
  article: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  aside: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  audio: StyledFunction<React.SFC<React.HTMLProps<HTMLAudioElement>>, React.HTMLAttributes<HTMLAudioElement>>;
  b: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  base: StyledFunction<React.SFC<React.HTMLProps<HTMLBaseElement>>, React.HTMLAttributes<HTMLBaseElement>>;
  bdi: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  bdo: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  big: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  blockquote: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  body: StyledFunction<React.SFC<React.HTMLProps<HTMLBodyElement>>, React.HTMLAttributes<HTMLBodyElement>>;
  br: StyledFunction<React.SFC<React.HTMLProps<HTMLBRElement>>, React.HTMLAttributes<HTMLBRElement>>;
  button: StyledFunction<React.SFC<React.HTMLProps<HTMLButtonElement>>, React.HTMLAttributes<HTMLButtonElement>>;
  canvas: StyledFunction<React.SFC<React.HTMLProps<HTMLCanvasElement>>, React.HTMLAttributes<HTMLCanvasElement>>;
  caption: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  cite: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  code: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  col: StyledFunction<React.SFC<React.HTMLProps<HTMLTableColElement>>, React.HTMLAttributes<HTMLTableColElement>>;
  colgroup: StyledFunction<React.SFC<React.HTMLProps<HTMLTableColElement>>, React.HTMLAttributes<HTMLTableColElement>>;
  data: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  datalist: StyledFunction<React.SFC<React.HTMLProps<HTMLDataListElement>>, React.HTMLAttributes<HTMLDataListElement>>;
  dd: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  del: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  details: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  dfn: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  dialog: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  div: StyledFunction<React.SFC<React.HTMLProps<HTMLDivElement>>, React.HTMLAttributes<HTMLDivElement>>;
  dl: StyledFunction<React.SFC<React.HTMLProps<HTMLDListElement>>, React.HTMLAttributes<HTMLDListElement>>;
  dt: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  em: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  embed: StyledFunction<React.SFC<React.HTMLProps<HTMLEmbedElement>>, React.HTMLAttributes<HTMLEmbedElement>>;
  fieldset: StyledFunction<React.SFC<React.HTMLProps<HTMLFieldSetElement>>, React.HTMLAttributes<HTMLFieldSetElement>>;
  figcaption: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  figure: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  footer: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  form: StyledFunction<React.SFC<React.HTMLProps<HTMLFormElement>>, React.HTMLAttributes<HTMLFormElement>>;
  h1: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  h2: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  h3: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  h4: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  h5: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  h6: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadingElement>>, React.HTMLAttributes<HTMLHeadingElement>>;
  head: StyledFunction<React.SFC<React.HTMLProps<HTMLHeadElement>>, React.HTMLAttributes<HTMLHeadElement>>;
  header: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  hgroup: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  hr: StyledFunction<React.SFC<React.HTMLProps<HTMLHRElement>>, React.HTMLAttributes<HTMLHRElement>>;
  html: StyledFunction<React.SFC<React.HTMLProps<HTMLHtmlElement>>, React.HTMLAttributes<HTMLHtmlElement>>;
  i: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  iframe: StyledFunction<React.SFC<React.HTMLProps<HTMLIFrameElement>>, React.HTMLAttributes<HTMLIFrameElement>>;
  img: StyledFunction<React.SFC<React.HTMLProps<HTMLImageElement>>, React.HTMLAttributes<HTMLImageElement>>;
  input: StyledFunction<React.SFC<React.HTMLProps<HTMLInputElement>>, React.HTMLAttributes<HTMLInputElement>>;
  ins: StyledFunction<React.SFC<React.HTMLProps<HTMLModElement>>, React.HTMLAttributes<HTMLModElement>>;
  kbd: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  keygen: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  label: StyledFunction<React.SFC<React.HTMLProps<HTMLLabelElement>>, React.HTMLAttributes<HTMLLabelElement>>;
  legend: StyledFunction<React.SFC<React.HTMLProps<HTMLLegendElement>>, React.HTMLAttributes<HTMLLegendElement>>;
  li: StyledFunction<React.SFC<React.HTMLProps<HTMLLIElement>>, React.HTMLAttributes<HTMLLIElement>>;
  link: StyledFunction<React.SFC<React.HTMLProps<HTMLLinkElement>>, React.HTMLAttributes<HTMLLinkElement>>;
  main: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  map: StyledFunction<React.SFC<React.HTMLProps<HTMLMapElement>>, React.HTMLAttributes<HTMLMapElement>>;
  mark: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  menu: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  menuitem: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  meta: StyledFunction<React.SFC<React.HTMLProps<HTMLMetaElement>>, React.HTMLAttributes<HTMLMetaElement>>;
  meter: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  nav: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  noscript: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  object: StyledFunction<React.SFC<React.HTMLProps<HTMLObjectElement>>, React.HTMLAttributes<HTMLObjectElement>>;
  ol: StyledFunction<React.SFC<React.HTMLProps<HTMLOListElement>>, React.HTMLAttributes<HTMLOListElement>>;
  optgroup: StyledFunction<React.SFC<React.HTMLProps<HTMLOptGroupElement>>, React.HTMLAttributes<HTMLOptGroupElement>>;
  option: StyledFunction<React.SFC<React.HTMLProps<HTMLOptionElement>>, React.HTMLAttributes<HTMLOptionElement>>;
  output: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  p: StyledFunction<React.SFC<React.HTMLProps<HTMLParagraphElement>>, React.HTMLAttributes<HTMLParagraphElement>>;
  param: StyledFunction<React.SFC<React.HTMLProps<HTMLParamElement>>, React.HTMLAttributes<HTMLParamElement>>;
  picture: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  pre: StyledFunction<React.SFC<React.HTMLProps<HTMLPreElement>>, React.HTMLAttributes<HTMLPreElement>>;
  progress: StyledFunction<React.SFC<React.HTMLProps<HTMLProgressElement>>, React.HTMLAttributes<HTMLProgressElement>>;
  q: StyledFunction<React.SFC<React.HTMLProps<HTMLQuoteElement>>, React.HTMLAttributes<HTMLQuoteElement>>;
  rp: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  rt: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  ruby: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  s: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  samp: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  script: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  section: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  select: StyledFunction<React.SFC<React.HTMLProps<HTMLSelectElement>>, React.HTMLAttributes<HTMLSelectElement>>;
  small: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  source: StyledFunction<React.SFC<React.HTMLProps<HTMLSourceElement>>, React.HTMLAttributes<HTMLSourceElement>>;
  span: StyledFunction<React.SFC<React.HTMLProps<HTMLSpanElement>>, React.HTMLAttributes<HTMLSpanElement>>;
  strong: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  style: StyledFunction<React.SFC<React.HTMLProps<HTMLStyleElement>>, React.HTMLAttributes<HTMLStyleElement>>;
  sub: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  summary: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  sup: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  table: StyledFunction<React.SFC<React.HTMLProps<HTMLTableElement>>, React.HTMLAttributes<HTMLTableElement>>;
  tbody: StyledFunction<React.SFC<React.HTMLProps<HTMLTableSectionElement>>, React.HTMLAttributes<HTMLTableSectionElement>>;
  td: StyledFunction<React.SFC<React.HTMLProps<HTMLTableDataCellElement>>, React.HTMLAttributes<HTMLTableDataCellElement>>;
  textarea: StyledFunction<React.SFC<React.HTMLProps<HTMLTextAreaElement>>, React.HTMLAttributes<HTMLTextAreaElement>>;
  tfoot: StyledFunction<React.SFC<React.HTMLProps<HTMLTableSectionElement>>, React.HTMLAttributes<HTMLTableSectionElement>>;
  th: StyledFunction<React.SFC<React.HTMLProps<HTMLTableHeaderCellElement>>, React.HTMLAttributes<HTMLTableHeaderCellElement>>;
  thead: StyledFunction<React.SFC<React.HTMLProps<HTMLTableSectionElement>>, React.HTMLAttributes<HTMLTableSectionElement>>;
  time: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  title: StyledFunction<React.SFC<React.HTMLProps<HTMLTitleElement>>, React.HTMLAttributes<HTMLTitleElement>>;
  tr: StyledFunction<React.SFC<React.HTMLProps<HTMLTableRowElement>>, React.HTMLAttributes<HTMLTableRowElement>>;
  track: StyledFunction<React.SFC<React.HTMLProps<HTMLTrackElement>>, React.HTMLAttributes<HTMLTrackElement>>;
  u: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  ul: StyledFunction<React.SFC<React.HTMLProps<HTMLUListElement>>, React.HTMLAttributes<HTMLUListElement>>;
  "var": StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;
  video: StyledFunction<React.SFC<React.HTMLProps<HTMLVideoElement>>, React.HTMLAttributes<HTMLVideoElement>>;
  wbr: StyledFunction<React.SFC<React.HTMLProps<HTMLElement>>, React.HTMLAttributes<HTMLElement>>;

  // SVG
  circle: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGCircleElement>>;
  clipPath: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGClipPathElement>>;
  defs: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGDefsElement>>;
  ellipse: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGEllipseElement>>;
  g: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGGElement>>;
  image: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGImageElement>>;
  line: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGLineElement>>;
  linearGradient: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGLinearGradientElement>>;
  mask: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGMaskElement>>;
  path: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGPathElement>>;
  pattern: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGPatternElement>>;
  polygon: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGPolygonElement>>;
  polyline: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGPolylineElement>>;
  radialGradient: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGRadialGradientElement>>;
  rect: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGRect>>;
  stop: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGStopElement>>;
  svg: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGSVGElement>>;
  text: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGTextElement>>;
  tspan: StyledFunction<React.SFC<React.SVGProps>, React.SVGAttributes<SVGTSpanElement>>;
}

interface ThemeProps {
  theme: Object;
}

declare const styled: StyledInterface;

export const css: StyledFunction<(string | Function)[], any>;
export const keyframes: StyledFunction<string, any>;
export const injectGlobal: StyledFunction<undefined, any>;
export const ThemeProvider: StatelessComponent<ThemeProps>;

export default styled;
