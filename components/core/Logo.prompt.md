The Laux Creatives brand lockups, built on the supplied master art: the clean serif "LC" monogram, the Bringbold "LauxCreatives" logotype, and the gold coin badge. The solid shapes recolor on the fly via CSS mask; the coin badge is fixed two-tone art.

```jsx
<Logo variant="mark" size={80} tone="gold" />       {/* LC monogram */}
<Logo variant="wordmark" size={48} />               {/* "LauxCreatives" logotype */}
<Logo variant="lockup" size={56} tone="ink" />      {/* circle-LC + logotype, horizontal */}
<Logo variant="circle" size={140} tone="paper" />   {/* circle outline + LC */}
<Logo variant="badge" size={150} />                 {/* gold coin · ESTD 2024 · Chicago & Beyond */}
<Logo variant="badge" size={150} plain />           {/* coin, no text */}
```

Tones: `ink`, `paper` (for dark/photo backgrounds), `gold`, `olive`, `blue` — or pass `color` for any value. `size` is the height for masked shapes and the diameter for the badge. `src` overrides the art if needed.
