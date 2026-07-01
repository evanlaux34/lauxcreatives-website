/* @ds-bundle: {"format":3,"namespace":"LauxCreativesDesignSystem_2042c0","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Caption","sourcePath":"components/core/Caption.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PhotoCard","sourcePath":"components/core/PhotoCard.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"04f687a999d9","components/core/Caption.jsx":"eb9476c29814","components/core/Divider.jsx":"cf9922b8d5f8","components/core/Eyebrow.jsx":"31ace682ab20","components/core/Input.jsx":"cacfe210554a","components/core/Logo.jsx":"2d563edd0110","components/core/PhotoCard.jsx":"126caaaba8d8","components/core/SectionHeader.jsx":"13460f528d56","components/core/Tag.jsx":"f042fafc7571","ui_kits/website/AboutScreen.jsx":"27f33561bf4e","ui_kits/website/ContactScreen.jsx":"91bc07dfbe90","ui_kits/website/Footer.jsx":"70a7338fe4fd","ui_kits/website/HomeScreen.jsx":"8df9fd0527e8","ui_kits/website/InvestmentScreen.jsx":"1bcb837a8209","ui_kits/website/Nav.jsx":"9be5774f94e5","ui_kits/website/PortfolioScreen.jsx":"60319ba3de51","ui_kits/website/app.jsx":"aeb794092b11"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LauxCreativesDesignSystem_2042c0 = window.LauxCreativesDesignSystem_2042c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Button
 * Square, letterpress-feel button with an uppercase Courier label.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '10.5px',
      tracking: '0.22em'
    },
    md: {
      padding: '13px 28px',
      fontSize: '12px',
      tracking: '0.26em'
    },
    lg: {
      padding: '17px 38px',
      fontSize: '13px',
      tracking: '0.28em'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    fontFamily: "var(--font-label)",
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: 'uppercase',
    padding: s.padding,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), box-shadow var(--dur) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none',
    lineHeight: 1,
    boxShadow: hover && !disabled ? 'var(--shadow-raise)' : 'none',
    transform: active && !disabled ? 'translateY(1px)' : 'none'
  };
  const variants = {
    primary: {
      background: active ? 'var(--lc-sepia-ink-deep)' : 'var(--lc-sepia-ink)',
      color: 'var(--lc-paper-text)',
      borderColor: 'var(--lc-sepia-ink)'
    },
    secondary: {
      background: hover ? 'var(--lc-ivory-light)' : 'transparent',
      color: 'var(--lc-ink)',
      borderColor: 'var(--lc-ink)'
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--lc-accent)' : 'var(--lc-ink-soft)',
      borderColor: 'transparent',
      padding: '6px 4px'
    },
    onDark: {
      background: hover ? 'var(--lc-paper-text)' : 'transparent',
      color: hover ? 'var(--lc-sepia-ink)' : 'var(--lc-paper-text)',
      borderColor: 'var(--lc-line-on-photo)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary)
    },
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Caption
 * Contact-sheet style caption for under photos. Courier, uppercase.
 */
function Caption({
  children,
  fig,
  tone = 'muted',
  style,
  ...rest
}) {
  const colors = {
    muted: 'var(--lc-ink-muted)',
    onDark: 'rgba(242,234,212,0.7)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--type-label-tracking-sm)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.muted,
      ...style
    }
  }, rest), fig ? `${fig} — ` : '', children);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Caption.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Divider
 * Hairline rule. Plain, or with a centered Courier label / middot motif.
 */
function Divider({
  label,
  tone = 'paper',
  style,
  ...rest
}) {
  const lineColor = tone === 'onDark' ? 'var(--lc-line-on-dark)' : 'var(--lc-line)';
  const textColor = tone === 'onDark' ? 'rgba(242,234,212,0.7)' : 'var(--lc-ink-muted)';
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 'none',
        borderTop: `1px solid ${lineColor}`,
        margin: 0,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: lineColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10.5px',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: textColor,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: lineColor
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Eyebrow
 * Uppercase Courier label used above headlines and as section markers.
 */
function Eyebrow({
  children,
  number,
  tone = 'accent',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--lc-accent)',
    muted: 'var(--lc-ink-muted)',
    onDark: 'rgba(242,234,212,0.85)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--type-label)',
      letterSpacing: 'var(--type-label-tracking)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.accent,
      ...style
    }
  }, rest), number ? `${number} — ` : '', children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Input
 * Underline-style editorial field. Courier label, Garamond input text.
 */
function Input({
  label,
  type = 'text',
  multiline = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `lc-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focus ? 'var(--lc-accent)' : 'var(--lc-line)'}`,
    borderRadius: 'var(--radius-none)',
    fontFamily: 'var(--font-editorial)',
    fontSize: '18px',
    color: 'var(--lc-ink)',
    padding: '8px 2px',
    outline: 'none',
    transition: 'border-color var(--dur) var(--ease-soft)',
    resize: multiline ? 'vertical' : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10.5px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--lc-ink-muted)'
    }
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: 3,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Logo
 * The clean serif "LC" monogram and the Bringbold "LauxCreatives"
 * logotype, supplied as the studio's master art. The solid
 * single-color shapes (mark, wordmark, lockup, circle-mark) are
 * recolored on the fly via CSS mask, so they sit in any brand tone
 * on any surface. The gold coin badge ships as fixed two-tone art.
 */

// Trimmed aspect ratios (w / h) of each supplied art file.
const ASPECT = {
  mark: 939 / 953,
  // mono LC
  wordmark: 7732 / 1201,
  // "LauxCreatives" logotype
  lockup: 10101 / 1943,
  // circle-LC + logotype, horizontal
  circle: 1 // circle outline + LC
};
const ASSET = {
  mark: 'mono-paper.png',
  wordmark: 'wordmark-paper.png',
  lockup: 'lockup-paper.png',
  circle: 'mark-circle-paper.png'
};

// Resolve the design-system asset base from the loaded bundle's <script src>,
// so the art resolves correctly from any consuming page.
const DS_BASE = (() => {
  if (typeof document === 'undefined') return '';
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s) return (s.getAttribute('src') || '').replace(/_ds_bundle\.js.*$/, '');
  return '';
})();
const TONES = {
  ink: 'var(--lc-sepia-ink)',
  paper: 'var(--lc-paper-text)',
  gold: 'var(--lc-accent)',
  olive: 'var(--lc-aged-olive)',
  blue: 'var(--lc-dusty-blue)'
};

// Variant → which masked shape (and its aliases).
const SHAPE_FOR = {
  mark: 'mark',
  monogram: 'mark',
  wordmark: 'wordmark',
  lockup: 'lockup',
  circle: 'circle',
  stamp: 'circle'
};
function Masked({
  shape,
  height,
  color,
  src,
  style
}) {
  const w = Math.round(height * ASPECT[shape]);
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Laux Creatives",
    style: {
      display: 'inline-block',
      width: `${w}px`,
      height: `${height}px`,
      backgroundColor: color,
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  });
}
function Logo({
  variant = 'mark',
  size = 64,
  tone = 'ink',
  color,
  src,
  plain = false,
  style,
  ...rest
}) {
  const markColor = color || TONES[tone] || TONES.ink;
  const base = `${DS_BASE}assets/logos/`;

  // The gold coin badge ships as fixed two-tone art (gold on sepia).
  if (variant === 'badge') {
    const file = plain ? 'badge-gold-plain.png' : 'badge-gold.png';
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src || base + file,
      alt: "Laux Creatives \u2014 Chicago & Beyond",
      width: size,
      height: size,
      style: {
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
        ...style
      }
    }, rest));
  }

  // Everything else is a recolorable masked shape.
  const shape = SHAPE_FOR[variant] || 'mark';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Masked, {
    shape: shape,
    height: size,
    color: markColor,
    src: src || base + ASSET[shape]
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — PhotoCard
 * The signature taped print: photo on an ivory mat, soft shadow,
 * Courier caption in the bottom mat.
 */
function PhotoCard({
  src,
  alt = '',
  caption,
  fig,
  tone = 'warm',
  height = 300,
  fill = false,
  onDark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const filters = {
    warm: 'var(--photo-filter-warm)',
    sepia: 'var(--photo-filter-sepia)',
    bw: 'var(--photo-filter-bw)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      padding: '12px 12px 0',
      boxShadow: onDark ? 'var(--shadow-card-dark)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft)',
      ...(fill ? {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: typeof height === 'number' ? `${height}px` : height,
      objectFit: 'cover',
      display: 'block',
      filter: filters[tone] || filters.warm
    }
  }), fill ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto'
    }
  }) : null, caption ? /*#__PURE__*/React.createElement(__ds_scope.Caption, {
    fig: fig,
    style: {
      padding: '11px 4px 14px'
    }
  }, caption) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: '12px'
    }
  }));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — SectionHeader
 * Numbered eyebrow on the left, right-aligned meta label, optional hairline.
 */
function SectionHeader({
  number,
  title,
  meta,
  tone = 'accent',
  rule = true,
  style,
  ...rest
}) {
  const metaColor = tone === 'onDark' ? 'rgba(242,234,212,0.6)' : 'var(--lc-ink-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      borderTop: rule ? '1px solid var(--border-hairline)' : 'none',
      paddingTop: rule ? '34px' : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    number: number,
    tone: tone
  }, title), meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--type-label)',
      letterSpacing: 'var(--type-label-tracking-sm)',
      textTransform: 'uppercase',
      color: metaColor
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laux Creatives — Tag
 * Small Courier label chip. Outline by default; filled / pill variants.
 */
function Tag({
  children,
  variant = 'outline',
  style,
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--lc-ink-soft)',
      border: '1px solid var(--lc-line)'
    },
    solid: {
      background: 'var(--lc-aged-olive)',
      color: 'var(--lc-paper-text)',
      border: '1px solid var(--lc-aged-olive)'
    },
    accent: {
      background: 'transparent',
      color: 'var(--lc-accent)',
      border: '1px solid var(--lc-accent)'
    },
    pill: {
      background: 'var(--lc-ivory-light)',
      color: 'var(--lc-ink-soft)',
      border: '1px solid var(--lc-line-soft)',
      borderRadius: 'var(--radius-pill)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: '10.5px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      lineHeight: 1,
      borderRadius: 'var(--radius-none)',
      ...(variants[variant] || variants.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Divider,
  PhotoCard
} = window.LauxCreativesDesignSystem_2042c0;
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '84px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 0.85fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '20px'
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '58px',
      lineHeight: 1.0,
      color: 'var(--lc-ink)'
    }
  }, "Storytellers at heart."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '26px',
      maxWidth: '520px',
      textWrap: 'pretty'
    }
  }, "Laux Creatives was founded by Evan & Alexis Laux with one simple hope \u2014 to serve people well through photography and design. We're drawn to the moments, details, and ideas that make your story worth telling."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '18px',
      maxWidth: '520px',
      textWrap: 'pretty'
    }
  }, "We're not here to check boxes. We're here to show up, earn your trust, and create something that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lc-ink)'
    }
  }, "actually feels like you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      color: 'var(--lc-accent)',
      marginTop: '24px'
    }
  }, "Evan & Alexis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/evan.jpg",
    tone: "bw",
    caption: "Evan",
    fig: "Fig. 01",
    height: 360
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/alexis.jpg",
    tone: "bw",
    caption: "Alexis",
    fig: "Fig. 02",
    height: 360
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--lc-paper-text)',
      position: 'relative',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lc-grain"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mono-paper.png",
    alt: "Laux Creatives",
    style: {
      height: '78px',
      width: 'auto',
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: '30px',
      lineHeight: 1.3,
      marginTop: '26px'
    }
  }, "\"Drawn to the moments, details, and ideas that make your story worth telling.\""), /*#__PURE__*/React.createElement(Divider, {
    label: "Chicago & Beyond \xB7 Est. 2024",
    tone: "onDark",
    style: {
      marginTop: '38px',
      maxWidth: '440px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '84px 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '34px'
    }
  }, "What We Offer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '18px'
    }
  }, [['Weddings', 'Full-day coverage, from getting ready to the last dance.'], ['Engagements', 'A relaxed session to remember how this began.'], ['Family', 'Unposed, in-between, real — the people who showed up.'], ['Portraits', 'Honest light, honest you. 35mm and digital.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--lc-line)',
      paddingTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '27px',
      color: 'var(--lc-ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '16px',
      lineHeight: 1.55,
      color: 'var(--lc-ink-soft)',
      marginTop: '8px'
    }
  }, d))))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Input,
  Button
} = window.LauxCreativesDesignSystem_2042c0;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '84px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '20px'
    }
  }, "Say Hello"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      lineHeight: 1.0,
      color: 'var(--lc-ink)'
    }
  }, "Let's tell your story."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '22px',
      maxWidth: '440px',
      textWrap: 'pretty'
    }
  }, "Tell us a little about your day. We read every note ourselves and reply within a few days \u2014 no forms-into-the-void here."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--lc-ink-muted)',
      lineHeight: 2.2
    }
  }, "Chicago & Beyond"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/badge-gold.png",
    alt: "Laux Creatives \u2014 Chicago & Beyond",
    style: {
      height: '96px',
      width: 'auto',
      marginTop: '30px',
      opacity: 0.95
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--lc-line-soft)',
      boxShadow: 'var(--shadow-card)',
      padding: '40px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      color: 'var(--lc-ink)'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: '19px',
      color: 'var(--lc-ink-soft)',
      marginTop: '12px'
    }
  }, "We'll be in touch soon \u2014 we can't wait to hear more."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSent(false)
  }, "Send another \u2192"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your names",
    placeholder: "Evan & Alexis"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "hello@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "The date (or season)",
    placeholder: "Golden hour, October 2026"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell us about your day",
    multiline: true,
    placeholder: "Where, who, and what feels most like you\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "button",
    type: "submit"
  }, "Send the note")))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */

function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-footer)',
      color: 'rgba(242,234,212,0.85)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '54px 48px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('Home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/lockup-paper.png",
    alt: "Laux Creatives",
    style: {
      height: '36px',
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'rgba(242,234,212,0.8)',
      marginTop: '14px',
      maxWidth: '320px',
      lineHeight: 1.5
    }
  }, "Serving people well through photography & design.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--lc-accent)',
      marginBottom: '16px'
    }
  }, "Explore"), ['Home', 'Portfolio', 'About', 'Investment', 'Contact'].map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    onClick: () => onNav(it),
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '17px',
      color: 'rgba(242,234,212,0.85)',
      cursor: 'pointer',
      marginBottom: '8px'
    }
  }, it))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--lc-accent)',
      marginBottom: '16px'
    }
  }, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '17px',
      color: 'rgba(242,234,212,0.85)',
      lineHeight: 1.7
    }
  }, "Chicago & Beyond"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(242,234,212,0.16)',
      padding: '20px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'rgba(242,234,212,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Est. 2024 \xB7 Evan & Alexis Laux"), /*#__PURE__*/React.createElement("span", null, "Photography \xB7 Design \xB7 Storytelling")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Button,
  PhotoCard,
  SectionHeader,
  Caption,
  Logo
} = window.LauxCreativesDesignSystem_2042c0;
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '648px',
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(180deg,rgba(40,35,24,0.5) 0%,rgba(40,35,24,0.18) 42%,rgba(40,35,24,0.68) 100%),url(../../assets/photos/IMG_9828-hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 42%',
      color: 'var(--lc-paper-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lc-grain"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '22px',
      border: '1px solid var(--lc-line-on-photo)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '46px',
      right: '46px',
      top: '34px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'rgba(242,234,212,0.92)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Chicago & Beyond"), /*#__PURE__*/React.createElement("span", null, "Est. 2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mark-circle-paper.png",
    alt: "Laux Creatives",
    style: {
      height: '84px',
      width: 'auto',
      marginBottom: '20px',
      filter: 'drop-shadow(0 2px 14px rgba(30,26,16,0.45))',
      transform: 'translate(0px, -130px)',
      boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-paper.png",
    alt: "Laux Creatives",
    style: {
      width: '450px',
      height: 'auto',
      display: 'block',
      filter: 'drop-shadow(0 2px 20px rgba(30,26,16,0.42))',
      transform: 'translate(0px, 29px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: '23px',
      color: 'rgba(242,234,212,0.95)',
      textShadow: '0 1px 10px rgba(30,26,16,0.5)',
      transform: 'translate(0px, 20px)'
    }
  }, "Serving people well through photography & design"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px',
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => onNav('Portfolio')
  }, "View the Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => onNav('Contact')
  }, "Inquire"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '40px',
      textAlign: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: 'rgba(242,234,212,0.85)'
    }
  }, "Photography \xB7 Design \xB7 Storytelling")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '84px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '20px'
    }
  }, "Our Hope"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '46px',
      lineHeight: 1.06,
      color: 'var(--lc-ink)'
    }
  }, "We're drawn to the moments that make your story worth telling."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '24px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      textWrap: 'balance'
    }
  }, "We're not here to check boxes. We're here to show up, earn your trust, and create something that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lc-ink)'
    }
  }, "actually feels like you.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page-alt)',
      padding: '84px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    title: "Featured Work",
    meta: "Weddings \xB7 Engagements \xB7 Family",
    style: {
      marginBottom: '36px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: 'span 2',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/IMG_9828.jpg",
    caption: "Weddings",
    fig: "Fig. 01",
    height: 520,
    fill: true,
    style: {
      flex: '1 1 auto'
    }
  })), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/IMG_0374.jpg",
    caption: "Engagements",
    height: 251
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/DSCF3673.jpg",
    caption: "Portraits",
    height: 251
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/IMG_6684.jpg",
    caption: "Engagements",
    height: 251
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/IMG_9244.jpg",
    caption: "Family",
    height: 251
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('Portfolio')
  }, "See the full gallery")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '84px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/evan.jpg",
    tone: "bw",
    caption: "Evan",
    fig: "Fig. 01",
    height: 300
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    src: "../../assets/photos/alexis.jpg",
    tone: "bw",
    caption: "Alexis",
    fig: "Fig. 02",
    height: 300
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '20px'
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '52px',
      lineHeight: 1.0,
      color: 'var(--lc-ink)'
    }
  }, "Storytellers", /*#__PURE__*/React.createElement("br", null), "at heart."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '24px',
      maxWidth: '480px',
      textWrap: 'pretty'
    }
  }, "Laux Creatives was founded by Evan & Alexis Laux with one simple hope \u2014 to serve people well through photography and design."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '38px',
      color: 'var(--lc-accent)',
      marginTop: '20px'
    }
  }, "Evan & Alexis"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('About')
  }, "More about us \u2192"))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InvestmentScreen.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Divider
} = window.LauxCreativesDesignSystem_2042c0;
const PACKAGES = [{
  name: 'The First Package',
  coverage: '4–5 hours',
  price: '$1,750',
  featured: false,
  includes: ['Engagement session included', '1 wedding photographer (myself)', 'Next-day teasers', 'Online gallery within 6 weeks']
}, {
  name: 'The Second Package',
  coverage: '6–8 hours',
  price: '$2,000',
  featured: false,
  includes: ['Engagement session included', '1 wedding photographer', 'Next-day teasers', 'Online gallery within 6 weeks']
}, {
  name: 'The Third Package',
  coverage: '8 hours',
  price: '$2,500',
  featured: true,
  includes: ['Engagement session included', '2 wedding photographers', 'Next-day teasers', 'Online gallery within 6 weeks']
}, {
  name: 'The Fourth Package',
  coverage: '8 hours',
  price: '$3,750',
  featured: false,
  includes: ['Engagement session included', '1 photographer & 1 videographer', 'Next-day teasers', 'Online gallery in 4–6 weeks', 'Documentary-style video within 6 weeks', 'Wide-angle video of the ceremony within 6 weeks']
}];
function PackageCard({
  pkg,
  onNav
}) {
  const f = pkg.featured;
  const pAccent = f ? '#F2EAD4' : 'var(--lc-accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: f ? 'var(--surface-dark)' : 'var(--surface-card)',
      color: f ? 'var(--lc-paper-text)' : 'var(--lc-ink)',
      border: '1px solid ' + (f ? 'var(--surface-dark)' : 'var(--lc-line-soft)'),
      boxShadow: 'var(--shadow-card)',
      padding: '32px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10.5px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: f ? pAccent : 'var(--lc-ink-muted)'
    }
  }, "Collection"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      lineHeight: 1.05,
      whiteSpace: 'nowrap',
      letterSpacing: '-0.01em',
      marginTop: '14px',
      color: f ? 'var(--lc-paper-text)' : 'var(--lc-ink)'
    }
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: f ? 'rgba(242,234,212,0.7)' : 'var(--lc-ink-muted)',
      marginTop: '4px'
    }
  }, pkg.coverage, " coverage"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: f ? 'rgba(242,234,212,0.2)' : 'var(--lc-line)',
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '11px',
      flex: 1
    }
  }, pkg.includes.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '16.5px',
      lineHeight: 1.5,
      color: f ? 'rgba(242,234,212,0.9)' : 'var(--lc-ink-soft)',
      paddingLeft: '18px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      color: pAccent
    }
  }, "\xB7"), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: f ? 'rgba(242,234,212,0.2)' : 'var(--lc-line)',
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: f ? 'rgba(242,234,212,0.6)' : 'var(--lc-ink-muted)'
    }
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '42px',
      letterSpacing: '-0.01em',
      color: f ? pAccent : 'var(--lc-ink)',
      marginTop: '2px'
    }
  }, pkg.price), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('Contact'),
    style: {
      marginTop: '22px',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      textAlign: 'center',
      cursor: 'pointer',
      padding: '13px',
      border: '1px solid ' + (f ? 'rgba(242,234,212,0.45)' : 'var(--lc-ink-muted)'),
      background: f ? pAccent : 'transparent',
      color: f ? 'var(--surface-dark)' : 'var(--lc-ink)'
    }
  }, "Inquire"));
}
function InvestmentScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '72px 48px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '18px'
    }
  }, "Investment"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '60px',
      lineHeight: 0.98,
      color: 'var(--lc-ink)'
    }
  }, "Wedding Collections"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      margin: '20px auto 0',
      maxWidth: '600px',
      textWrap: 'pretty'
    }
  }, "Every collection includes an engagement session and next-day teasers. Not sure which fits your day? ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lc-ink)'
    }
  }, "Reach out \u2014 we'll help you find the right one.")), /*#__PURE__*/React.createElement(Divider, {
    label: "Weddings \xB7 Chicago & Beyond",
    style: {
      maxWidth: '360px',
      margin: '30px auto 0'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '24px 48px 84px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '18px',
      alignItems: 'stretch'
    }
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.name,
    pkg: p,
    onNav: onNav
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'var(--lc-ink-muted)',
      textAlign: 'center',
      margin: '40px auto 0',
      maxWidth: '620px',
      textWrap: 'pretty'
    }
  }, "Custom collections, elopements, and travel are always welcome \u2014 tell us about your day and we'll tailor something to fit.")));
}
window.InvestmentScreen = InvestmentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InvestmentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React */
const {
  Button
} = window.LauxCreativesDesignSystem_2042c0;
function Nav({
  current,
  onNav
}) {
  const items = ['Home', 'Portfolio', 'About', 'Investment'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 46px',
      background: 'rgba(235,226,201,0.92)',
      backdropFilter: 'saturate(1.1)',
      borderBottom: '1px solid var(--lc-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    onClick: () => onNav('Home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/lockup-ink.png",
    alt: "Laux Creatives",
    style: {
      height: '34px',
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onNav(it),
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: current === it ? 'var(--lc-accent)' : 'var(--lc-ink-soft)',
      borderBottom: current === it ? '1px solid var(--lc-accent)' : '1px solid transparent',
      paddingBottom: '3px',
      transition: 'color var(--dur-fast) var(--ease-soft)'
    }
  }, it)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('Contact')
  }, "Inquire")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PortfolioScreen.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Tag,
  PhotoCard,
  SectionHeader
} = window.LauxCreativesDesignSystem_2042c0;
const PORTFOLIO = [{
  src: 'IMG_9828.jpg',
  cat: 'Weddings',
  cap: 'the whole party in motion'
}, {
  src: 'IMG_0092.jpg',
  cat: 'Weddings',
  cap: 'walking into forever'
}, {
  src: 'IMG_0374.jpg',
  cat: 'Engagements',
  cap: 'held still for a second'
}, {
  src: 'IMG_6684.jpg',
  cat: 'Engagements',
  cap: 'golden hour, hers'
}, {
  src: 'IMG_0644.jpg',
  cat: 'Engagements',
  cap: 'a field, the two of them'
}, {
  src: 'DSCF3673.jpg',
  cat: 'Portraits',
  cap: 'soft window light'
}, {
  src: 'IMG_8504.jpg',
  cat: 'Family',
  cap: 'the people who showed up'
}, {
  src: 'IMG_9244.jpg',
  cat: 'Family',
  cap: 'laughing, unposed'
}, {
  src: 'IMG_7351-2.jpg',
  cat: 'Portraits',
  cap: '35mm · the in-between'
}];
const CATS = ['All', 'Weddings', 'Engagements', 'Family', 'Portraits'];
function PortfolioScreen() {
  const [filter, setFilter] = React.useState('All');
  const shown = PORTFOLIO.filter(p => filter === 'All' || p.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '72px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: '18px'
    }
  }, "The Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '66px',
      lineHeight: 0.98,
      color: 'var(--lc-ink)'
    }
  }, "Worth Remembering"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: '19px',
      lineHeight: 1.62,
      color: 'var(--lc-ink-soft)',
      marginTop: '20px',
      maxWidth: '560px'
    }
  }, "A few of the days, fields, and faces we've been trusted with. Warm, candid, unhurried \u2014 the in-between moments most worth keeping."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '32px',
      flexWrap: 'wrap'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: filter === c ? 'solid' : 'outline'
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 48px 84px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columnCount: 3,
      columnGap: '18px'
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.src,
    style: {
      breakInside: 'avoid',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    src: `../../assets/photos/${p.src}`,
    caption: p.cat,
    fig: `Fig. 0${i % 9 + 1}`,
    height: i % 3 === 0 ? 360 : 260
  }))))));
}
window.PortfolioScreen = PortfolioScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PortfolioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* global React, ReactDOM */
const {
  Nav,
  Footer,
  HomeScreen,
  PortfolioScreen,
  AboutScreen,
  InvestmentScreen,
  ContactScreen
} = window;
function App() {
  const [screen, setScreen] = React.useState('Home');
  const nav = s => {
    setScreen(s);
    window.scrollTo({
      top: 0
    });
  };
  let body;
  if (screen === 'Portfolio') body = /*#__PURE__*/React.createElement(PortfolioScreen, {
    onNav: nav
  });else if (screen === 'About') body = /*#__PURE__*/React.createElement(AboutScreen, {
    onNav: nav
  });else if (screen === 'Investment') body = /*#__PURE__*/React.createElement(InvestmentScreen, {
    onNav: nav
  });else if (screen === 'Contact') body = /*#__PURE__*/React.createElement(ContactScreen, {
    onNav: nav
  });else body = /*#__PURE__*/React.createElement(HomeScreen, {
    onNav: nav
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    current: screen,
    onNav: nav
  }), body, /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

})();
