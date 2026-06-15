# Design Brief

## Tone & Differentiation
Luxury minimalist fashion e-commerce. Editorial aesthetic inspired by high-end fashion magazines. Refined, confident, intentional whitespace. Premium experience with accent color (#C9A96E warm gold) reserved for CTAs and active states only.

## Color Palette (OKLCH)
| Token | Value | Purpose |
|-------|-------|---------|
| Background | `0.98 0.008 65` | Off-white canvas (#FAFAF8) |
| Foreground | `0.115 0.003 0` | Deep charcoal text (#1A1A1A) |
| Accent | `0.65 0.11 67` | Warm gold CTAs (#C9A96E) |
| Card | `0.99 0.006 63` | Product card base, near-white |
| Muted | `0.92 0.004 0` | Secondary text, borders |
| Border | `0.95 0.008 65` | Hairline dividers |

## Typography
- **Display**: Space Grotesk (headline, nav, branding)
- **Body**: Inter (copy, UI text)
- **Mono**: System monospace (code)
- **Scale**: 14px body, 16px nav, 18px subheading, 28px h2, 42px hero

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | Sticky, `border-b border-border`, `bg-background` | Logo, nav, cart/wishlist icons |
| Hero | `bg-background` with featured imagery | Editorial hero with product showcase |
| Product Grid | `bg-background`, grid 4/2/1 cols | 20 hardcoded products (5 per section) |
| Product Card | `bg-card shadow-subtle rounded-lg` | Image 256px, title, price, hover scale-105 |
| Footer | `border-t border-border bg-muted/20` | Links, newsletter, socials |

## Product Data Structure
- **Hardcoded frontend**: 20 products as TypeScript constants (Men, Women, Kids, Accessories: 5 each)
- **Image path**: `/assets/images/products/{id}.jpg` (serve via object storage)
- **Visible on load**: No backend dependency, all 20 products render immediately
- **Responsive display**: Mobile stack, tablet 2-col, desktop 4-col grid

## Component Patterns
- **Buttons**: Accent bg for primary, outlined charcoal for secondary. Smooth active state.
- **Form inputs**: `border-border focus:ring-accent`, light baseline, no decorations.
- **Product cards**: Image-led (256px), title + price below, hover: shadow-elevated + scale-105.
- **Category tags**: Muted bg, foreground text, minimal caps. Hover: accent text.

## Motion & Interactions
- **Hover zoom**: Product cards scale 1.05 + shadow-elevated (0.4s cubic-bezier).
- **Image zoom**: On hover, image scales 1.08 independently (transform 0.4s).
- **Page load**: Fade-in 0.3s, children stagger slide-up.
- **Smooth scroll**: All transitions use cubic-bezier(0.4, 0, 0.2, 1).

## Constraints
- Max container width: 1400px, center padding 2rem.
- Min touch target: 44px (all buttons, links).
- Color contrast: ≥7:1 WCAG AAA light mode.
- Border radius: 4px on cards, minimal everywhere else.

## Signature Detail
Product card hover synergy: card scale-105 + shadow elevation + image zoom 1.08 = premium "lift" without overdoing. Clean typography, generous breathing room, editorial discipline.
