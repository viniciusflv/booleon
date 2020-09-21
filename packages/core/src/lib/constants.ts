export const c = {
  res: '',
  acc: function (value: string) {
    this.res += value;
    return this;
  },
  value: function (value: string) {
    return this.acc(value);
  },
  get [';']() {
    return this.acc(';');
  },
  get ['-']() {
    return this.acc('-');
  },
  get [':']() {
    return this.acc(':');
  },
  get [',']() {
    return this.acc(',');
  },
  get rem() {
    return this.acc('rem');
  },
  get border() {
    return this.acc('border');
  },
  get radius() {
    return this.acc('radius');
  },
  get top() {
    return this.acc('top');
  },
  get right() {
    return this.acc('right');
  },
  get left() {
    return this.acc('left');
  },
  get bottom() {
    return this.acc('bottom');
  },
  get transform() {
    return this.acc('transform');
  },
  get width() {
    return this.acc('width');
  },
  get cursor() {
    return this.acc('cursor');
  },
  get none() {
    return this.acc('none');
  },
  get color() {
    return this.acc('color');
  },
  get background() {
    return this.acc('background');
  },
  get px() {
    return this.acc('px');
  },
  get style() {
    return this.acc('style');
  },
  get height() {
    return this.acc('height');
  },
  get font() {
    return this.acc('font');
  },
  get auto() {
    return this.acc('auto');
  },
  get transition() {
    return this.acc('transition');
  },
  get overflow() {
    return this.acc('overflow');
  },
  get grid() {
    return this.acc('grid');
  },
  get deg() {
    return this.acc('deg');
  },
  get min() {
    return this.acc('min');
  },
  get max() {
    return this.acc('max');
  },
  get flex() {
    return this.acc('flex');
  },
  get filter() {
    return this.acc('filter');
  },
  get weight() {
    return this.acc('weight');
  },
  get padding() {
    return this.acc('padding');
  },
  get margin() {
    return this.acc('margin');
  },
  get text() {
    return this.acc('text');
  },
  get resize() {
    return this.acc('resize');
  },
  get content() {
    return this.acc('content');
  },
  get transparent() {
    return this.acc('transparent');
  },
  get property() {
    return this.acc('property');
  },
  get linear() {
    return this.acc('linear');
  },
  get justify() {
    return this.acc('justify');
  },
  get image() {
    return this.acc('image');
  },
  get vw() {
    return this.acc('vw');
  },
  get vh() {
    return this.acc('vh');
  },
  get translatey() {
    return this.acc('translatey');
  },
  get translatex() {
    return this.acc('translatex');
  },
  get translate() {
    return this.acc('translate');
  },
  get to() {
    return this.acc('to');
  },
  get space() {
    return this.acc('space');
  },
  get row() {
    return this.acc('row');
  },
  get position() {
    return this.acc('position');
  },
  get gradient() {
    return this.acc('gradient');
  },
  get shadow() {
    return this.acc('shadow');
  },
  get list() {
    return this.acc('list');
  },
  get hidden() {
    return this.acc('hidden');
  },
  get column() {
    return this.acc('column');
  },
  get align() {
    return this.acc('align');
  },
  get z() {
    return this.acc('z');
  },
  get visible() {
    return this.acc('visible');
  },
  get timing() {
    return this.acc('timing');
  },
  get start() {
    return this.acc('start');
  },
  get span() {
    return this.acc('span');
  },
  get size() {
    return this.acc('size');
  },
  get repeat() {
    return this.acc('repeat');
  },
  get outline() {
    return this.acc('outline');
  },
  get opacity() {
    return this.acc('opacity');
  },
  get object() {
    return this.acc('object');
  },
  get items() {
    return this.acc('items');
  },
  get index() {
    return this.acc('index');
  },
  get function() {
    return this.acc('function');
  },
  get fit() {
    return this.acc('fit');
  },
  get family() {
    return this.acc('family');
  },
  get end() {
    return this.acc('end');
  },
  get direction() {
    return this.acc('direction');
  },
  get break() {
    return this.acc('break');
  },
  get box() {
    return this.acc('box');
  },
  get y() {
    return this.acc('y');
  },
  get x() {
    return this.acc('x');
  },
  get word() {
    return this.acc('word');
  },
  get white() {
    return this.acc('white');
  },
  get type() {
    return this.acc('type');
  },
  get template() {
    return this.acc('template');
  },
  get rotate() {
    return this.acc('rotate');
  },
  get pointer() {
    return this.acc('pointer');
  },
  get normal() {
    return this.acc('normal');
  },
  get fill() {
    return this.acc('fill');
  },
  get display() {
    return this.acc('display');
  },
  get decoration() {
    return this.acc('decoration');
  },
  get cubic() {
    return this.acc('cubic');
  },
  get collapse() {
    return this.acc('collapse');
  },
  get bezier() {
    return this.acc('bezier');
  },
  get attachment() {
    return this.acc('attachment');
  },
  get zoom() {
    return this.acc('zoom');
  },
  get wrap() {
    return this.acc('wrap');
  },
  get visibility() {
    return this.acc('visibility');
  },
  get url() {
    return this.acc('url');
  },
  get stroke() {
    return this.acc('stroke');
  },
  get stretch() {
    return this.acc('stretch');
  },
  get spacing() {
    return this.acc('spacing');
  },
  get skewy() {
    return this.acc('skewy');
  },
  get skewx() {
    return this.acc('skewx');
  },
  get skew() {
    return this.acc('skew');
  },
  get serif() {
    return this.acc('serif');
  },
  get scaley() {
    return this.acc('scaley');
  },
  get scalex() {
    return this.acc('scalex');
  },
  get scale() {
    return this.acc('scale');
  },
  get reverse() {
    return this.acc('reverse');
  },
  get nowrap() {
    return this.acc('nowrap');
  },
  get no() {
    return this.acc('no');
  },
  get line() {
    return this.acc('line');
  },
  get letter() {
    return this.acc('letter');
  },
  get fixed() {
    return this.acc('fixed');
  },
  get events() {
    return this.acc('events');
  },
  get cover() {
    return this.acc('cover');
  },
  get contain() {
    return this.acc('contain');
  },
  get center() {
    return this.acc('center');
  },
  get all() {
    return this.acc('all');
  },
  get wait() {
    return this.acc('wait');
  },
  get vertical() {
    return this.acc('vertical');
  },
  get user() {
    return this.acc('user');
  },
  get underline() {
    return this.acc('underline');
  },
  get through() {
    return this.acc('through');
  },
  get sticky() {
    return this.acc('sticky');
  },
  get sepia() {
    return this.acc('sepia');
  },
  get separate() {
    return this.acc('separate');
  },
  get select() {
    return this.acc('select');
  },
  get scroll() {
    return this.acc('scroll');
  },
  get saturate() {
    return this.acc('saturate');
  },
  get sans() {
    return this.acc('sans');
  },
  get rows() {
    return this.acc('rows');
  },
  get relative() {
    return this.acc('relative');
  },
  get progress() {
    return this.acc('progress');
  },
  get outside() {
    return this.acc('outside');
  },
  get out() {
    return this.acc('out');
  },
  get origin() {
    return this.acc('origin');
  },
  get nwse() {
    return this.acc('nwse');
  },
  get not() {
    return this.acc('not');
  },
  get nesw() {
    return this.acc('nesw');
  },
  get move() {
    return this.acc('move');
  },
  get monospace() {
    return this.acc('monospace');
  },
  get local() {
    return this.acc('local');
  },
  get italic() {
    return this.acc('italic');
  },
  get invert() {
    return this.acc('invert');
  },
  get inside() {
    return this.acc('inside');
  },
  get in() {
    return this.acc('in');
  },
  get hue() {
    return this.acc('hue');
  },
  get horizontal() {
    return this.acc('horizontal');
  },
  get help() {
    return this.acc('help');
  },
  get grow() {
    return this.acc('grow');
  },
  get grayscale() {
    return this.acc('grayscale');
  },
  get grabbing() {
    return this.acc('grabbing');
  },
  get evenly() {
    return this.acc('evenly');
  },
  get ellipsis() {
    return this.acc('ellipsis');
  },
  get duration() {
    return this.acc('duration');
  },
  get drop() {
    return this.acc('drop');
  },
  get disc() {
    return this.acc('disc');
  },
  get delay() {
    return this.acc('delay');
  },
  get default() {
    return this.acc('default');
  },
  get decimal() {
    return this.acc('decimal');
  },
  get crosshair() {
    return this.acc('crosshair');
  },
  get contrast() {
    return this.acc('contrast');
  },
  get columns() {
    return this.acc('columns');
  },
  get col() {
    return this.acc('col');
  },
  get brightness() {
    return this.acc('brightness');
  },
  get both() {
    return this.acc('both');
  },
  get blur() {
    return this.acc('blur');
  },
  get between() {
    return this.acc('between');
  },
  get around() {
    return this.acc('around');
  },
  get areas() {
    return this.acc('areas');
  },
  get area() {
    return this.acc('area');
  },
  get appearance() {
    return this.acc('appearance');
  },
  get allowed() {
    return this.acc('allowed');
  },
  get absolute() {
    return this.acc('absolute');
  },
};
