export const PSEUDO_ELEMENTS = [
  ['focus' as 'focus__PROP', ':focus:focus-within'],
  ['after' as 'after__PROP', ':after'],
  ['before' as 'before__PROP', ':before'],
  ['active' as 'active__PROP', ':active'],
  ['checked' as 'checked__PROP', ':checked'],
  ['disabled' as 'disabled__PROP', ':disabled'],
  ['hover' as 'hover__PROP', ':hover'],
  ['visited' as 'visited__PROP', ':visited'],
  ['child' as 'child__PROP', '>*'],
  ['last' as 'last__PROP', ':last-child'],
  ['first' as 'first__PROP', ':first-child'],
  ['sibling' as 'sibling__PROP', '+*'],
  ['odd' as 'odd__PROP', ':nth-child(odd)'],
  ['even' as 'even__PROP', ':nth-child(even)'],
] as const;
export type PseudoElements = typeof PSEUDO_ELEMENTS[number][0];

export const MEDIA_QUERIES = [
  ['xs' as 'xs__PROP', '(min-width: 640px)'],
  ['sm' as 'sm__PROP', '(min-width: 768px)'],
  ['md' as 'md__PROP', '(min-width: 1024px)'],
  ['lg' as 'lg__PROP', '(min-width: 1440px)'],
  ['xl' as 'xl__PROP', '(min-width: 1920px)'],
] as const;
export type MediaQueries = typeof MEDIA_QUERIES[number][0];

export const SD_1 = [
  ['0 1px 1px', '0', 'rgba(0,0,0,0.14)'],
  ['0 2px 1px', '-1px', 'rgba(0,0,0,0.12)'],
  ['0 1px 3px', '0', 'rgba(0,0,0,0.20)'],
];
export const SD_2 = [
  ['0 2px 2px', '0', 'rgba(0,0,0,0.14)'],
  ['0 3px 1px', '-2px', 'rgba(0,0,0,0.12)'],
  ['0 1px 5px', '0', 'rgba(0,0,0,0.20)'],
];
export const SD_3 = [
  ['0 3px 4px', '0', 'rgba(0,0,0,0.14)'],
  ['0 3px 3px', '-2px', 'rgba(0,0,0,0.12)'],
  ['0 1px 8px', '0', 'rgba(0,0,0,0.20)'],
];
export const SD_4 = [
  ['0 4px 5px 0', '0', 'rgba(0,0,0,0.14)'],
  ['0 1px 10px', '0', 'rgba(0,0,0,0.12)'],
  ['0 2px 4px', '-1px', 'rgba(0,0,0,0.20)'],
];
export const SD_6 = [
  ['0 6px 10px', '0', 'rgba(0,0,0,0.14)'],
  ['0 1px 18px', '0', 'rgba(0,0,0,0.12)'],
  ['0 3px 5px', '-1px', 'rgba(0,0,0,0.20)'],
];
export const SD_8 = [
  ['0 8px 10px', ' 1px', 'rgba(0,0,0,0.14)'],
  ['0 3px 14px', ' 2px', 'rgba(0,0,0,0.12)'],
  ['0 5px 5px', '-3px', 'rgba(0,0,0,0.20)'],
];
export const SD_9 = [
  ['0 9px 12px', '1px', 'rgba(0,0,0,0.14)'],
  ['0 3px 16px', '2px', 'rgba(0,0,0,0.12)'],
  ['0 5px 6px', '-3px', 'rgba(0,0,0,0.20)'],
];
export const SD_12 = [
  ['0 12px 17px', '2px', 'rgba(0,0,0,0.14)'],
  ['0 5px 22px', '4px', 'rgba(0,0,0,0.12)'],
  ['0 7px 8px', '-4px', 'rgba(0,0,0,0.20)'],
];
export const SD_16 = [
  ['0 16px 24px', '2px', 'rgba(0,0,0,0.14)'],
  ['0 6px 30px', '5px', 'rgba(0,0,0,0.12)'],
  ['0 8px 10px', '-5px', 'rgba(0,0,0,0.20)'],
];
export const SD_24 = [
  ['0 24px 38px', '3px', 'rgba(0,0,0,0.14)'],
  ['0 9px 46px', '8px', 'rgba(0,0,0,0.12)'],
  ['0 11px 15px', '-7px', 'rgba(0,0,0,0.20)'],
];

export const TEXT_TAGS = [
  'a',
  'b',
  'caption',
  'legend',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'li',
  'p',
  'label',
  'span',
  'strong',
  'td',
  'th',
] as const;

export const SVG_TAGS = [
  'animate',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'switch',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
  'view',
] as const;

export const VIEW_TAGS = [
  ...SVG_TAGS,
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'slot',
  'script',
  'section',
  'select',
  'small',
  'source',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'template',
  'tbody',
  'textarea',
  'tfoot',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'webview',
] as const;

export const REACT_PROPS = [
  'data-testid',
  'children',
  'accept',
  'acceptCharset',
  'accessKey',
  'action',
  'allowFullScreen',
  'allowTransparency',
  'alt',
  'async',
  'autoComplete',
  'autoFocus',
  'autoPlay',
  'capture',
  'cellPadding',
  'cellSpacing',
  'challenge',
  'charSet',
  'checked',
  'cite',
  'classID',
  'className',
  'colSpan',
  'cols',
  // 'content',
  'contentEditable',
  'contextMenu',
  'controls',
  'controlsList',
  'coords',
  'crossOrigin',
  'data',
  'dateTime',
  'default',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'encType',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'frameBorder',
  'headers',
  'height',
  // 'hidden',
  'high',
  'href',
  'hrefLang',
  'htmlFor',
  'httpEquiv',
  'icon',
  'id',
  'inputMode',
  'integrity',
  'is',
  'keyParams',
  'keyType',
  'kind',
  'label',
  'lang',
  'list',
  'loop',
  'low',
  'manifest',
  'marginHeight',
  'marginWidth',
  'max',
  'maxLength',
  'media',
  'mediaGroup',
  'method',
  'min',
  'minLength',
  'multiple',
  'muted',
  'name',
  'noValidate',
  'nonce',
  'open',
  'optimum',
  'pattern',
  'placeholder',
  'poster',
  'preload',
  'profile',
  'radioGroup',
  'readOnly',
  'rel',
  'required',
  'reversed',
  'role',
  'rowSpan',
  'rows',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'span',
  'spellCheck',
  'src',
  'srcDoc',
  'srcLang',
  'srcSet',
  'start',
  'step',
  'style',
  'summary',
  'tabIndex',
  'target',
  'title',
  'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap',
  'about',
  'datatype',
  'inlist',
  'prefix',
  'property',
  'resource',
  'typeof',
  'vocab',
  'accentHeight',
  'accumulate',
  'additive',
  'alignmentBaseline',
  'allowReorder',
  'alphabetic',
  'amplitude',
  'arabicForm',
  'ascent',
  'attributeName',
  'attributeType',
  'autoReverse',
  'azimuth',
  'baseFrequency',
  'baseProfile',
  'baselineShift',
  'bbox',
  'begin',
  'bias',
  'by',
  'calcMode',
  'capHeight',
  'clip',
  'clipPath',
  'clipPathUnits',
  'clipRule',
  'colorInterpolation',
  'colorInterpolationFilters',
  'colorProfile',
  'colorRendering',
  'contentScriptType',
  'contentStyleType',
  'cursor',
  'cx',
  'cy',
  'd',
  'decelerate',
  'descent',
  'diffuseConstant',
  'direction',
  'display',
  'divisor',
  'dominantBaseline',
  'dur',
  'dx',
  'dy',
  'edgeMode',
  'elevation',
  'enableBackground',
  'end',
  'exponent',
  'externalResourcesRequired',
  'fill',
  'fillOpacity',
  'fillRule',
  'filter',
  'filterRes',
  'filterUnits',
  'floodColor',
  'floodOpacity',
  'focusable',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStretch',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'format',
  'from',
  'fx',
  'fy',
  'g1',
  'g2',
  'glyphName',
  'glyphOrientationHorizontal',
  'glyphOrientationVertical',
  'glyphRef',
  'gradientTransform',
  'gradientUnits',
  'hanging',
  'horizAdvX',
  'horizOriginX',
  'ideographic',
  'imageRendering',
  'in',
  'in2',
  'intercept',
  'k',
  'k1',
  'k2',
  'k3',
  'k4',
  'kernelMatrix',
  'kernelUnitLength',
  'kerning',
  'keyPoints',
  'keySplines',
  'keyTimes',
  'lengthAdjust',
  'letterSpacing',
  'lightingColor',
  'limitingConeAngle',
  'local',
  'markerEnd',
  'markerHeight',
  'markerMid',
  'markerStart',
  'markerUnits',
  'markerWidth',
  'mask',
  'maskContentUnits',
  'maskUnits',
  'mathematical',
  'mode',
  'numOctaves',
  'offset',
  'opacity',
  'operator',
  'order',
  'orient',
  'orientation',
  'origin',
  'overflow',
  'overlinePosition',
  'overlineThickness',
  'paintOrder',
  'panose1',
  'pathLength',
  'patternContentUnits',
  'patternTransform',
  'patternUnits',
  'pointerEvents',
  'points',
  'pointsAtX',
  'pointsAtY',
  'pointsAtZ',
  'preserveAlpha',
  'preserveAspectRatio',
  'primitiveUnits',
  'r',
  'radius',
  'refX',
  'refY',
  'renderingIntent',
  'repeatCount',
  'repeatDur',
  'requiredExtensions',
  'requiredFeatures',
  'restart',
  'result',
  'rotate',
  'rx',
  'ry',
  'scale',
  'seed',
  'shapeRendering',
  'slope',
  'spacing',
  'specularConstant',
  'specularExponent',
  'speed',
  'spreadMethod',
  'startOffset',
  'stdDeviation',
  'stemh',
  'stemv',
  'stitchTiles',
  'stopColor',
  'stopOpacity',
  'strikethroughPosition',
  'strikethroughThickness',
  'string',
  'stroke',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'surfaceScale',
  'systemLanguage',
  'tableValues',
  'targetX',
  'targetY',
  'textAnchor',
  'textDecoration',
  'textLength',
  'textRendering',
  'to',
  'transform',
  'u1',
  'u2',
  'underlinePosition',
  'underlineThickness',
  'unicode',
  'unicodeBidi',
  'unicodeRange',
  'unitsPerEm',
  'vAlphabetic',
  'vHanging',
  'vIdeographic',
  'vMathematical',
  'values',
  'vectorEffect',
  'version',
  'vertAdvY',
  'vertOriginX',
  'vertOriginY',
  'viewBox',
  'viewTarget',
  'visibility',
  'widths',
  'wordSpacing',
  'writingMode',
  'x',
  'x1',
  'x2',
  'xChannelSelector',
  'xHeight',
  'xlinkActuate',
  'xlinkArcrole',
  'xlinkHref',
  'xlinkRole',
  'xlinkShow',
  'xlinkTitle',
  'xlinkType',
  'xmlns',
  'xmlnsXlink',
  'xmlBase',
  'xmlLang',
  'xmlSpace',
  'y',
  'y1',
  'y2',
  'yChannelSelector',
  'z',
  'zoomAndPan',
  // Clipboard Events
  'onCopy',
  'onCut',
  'onPaste',
  // Composition Events
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
  // Keyboard Events
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  // Focus Events
  'onFocus',
  'onBlur',
  // Form Events
  'onChange',
  'onInput',
  'onInvalid',
  'onReset',
  'onSubmit',
  // Mouse Events
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  // Pointer Events
  'onPointerDown',
  'onPointerMove',
  'onPointerUp',
  'onPointerCancel',
  'onGotPointerCapture',
  'onLostPointerCapture',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerOver',
  'onPointerOut',
  // Selection Events
  'onSelect',
  // Touch Events
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  // UI Events
  'onScroll',
  // Wheel Events
  'onWheel',
  // Media Events
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
  // Image Events
  'onLoad',
  'onError',
  // Animation Events
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
  // Transition Events
  'onTransitionEnd',
  // Other Events
  'onToggle',
];
