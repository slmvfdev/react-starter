# Company Design System

## Overview

This design system is used for internal enterprise applications including:

- CRM
- HR Management
- Employee Management
- Monitoring Systems
- Dashboard Applications
- Administrative Panels

Technology stack:

- React
- TypeScript
- TailwindCSS
- Ant Design

Ant Design is the primary component library.

Custom design is implemented through:

- Ant Design Theme Tokens
- CSS Variables
- TailwindCSS Utility Classes

The design language is clean, minimal, professional and enterprise-oriented.

---

# Design Principles

## 1. Enterprise First

This system is designed for business users, managers, directors and operators.

Focus on:

- readability
- information density
- consistency
- usability

Avoid:

- excessive animations
- playful interfaces
- marketing-style layouts

---

## 2. Minimal Visual Noise

Use:

- subtle borders
- neutral backgrounds
- moderate shadows

Avoid:

- strong gradients
- bright saturated backgrounds
- unnecessary decorations

---

## 3. Data-Centric Design

Most screens contain:

- tables
- forms
- dashboards
- reports
- employee information

Data visibility is more important than visual effects.

---

# Typography

## Font Family

```css
font-family: var(--font-sans);
```

Primary font:

```txt
Inter
```

Fallback:

```txt
system-ui
sans-serif
```

---

## Font Scale

### Page Title

```txt
32px
font-weight: 600
```

### Section Title

```txt
24px
font-weight: 600
```

### Card Title

```txt
18px
font-weight: 600
```

### Body

```txt
14px
font-weight: 400
```

### Small Text

```txt
12px
font-weight: 400
```

---

# Color System

## Theme Colors

Supported themes:

- blue-theme
- green-theme
- orange-theme
- rose-theme
- violet-theme
- sky-theme

Primary color changes according to active theme.

Example:

```css
--primary
```

Maps to:

```txt
Ant Token:
colorPrimary
colorInfo
colorLink
```

---

# Semantic Colors

## Success

```css
--color-success
```

Used for:

- completed
- active
- approved
- success states

Color:

```txt
rgb(16 185 129)
```

---

## Warning

```css
--color-warning
```

Used for:

- pending
- warning states
- attention messages

Color:

```txt
rgb(245 158 11)
```

---

## Error

```css
--color-error
```

Used for:

- errors
- rejected states
- destructive actions

Color:

```txt
rgb(244 63 94)
```

---

# Light Theme

## Background

Page Background:

```css
--color-bg-layout
```

```txt
rgb(249, 250, 251)
```

Card Background:

```css
--color-bg-container
```

```txt
rgb(255,255,255)
```

---

## Text

Primary:

```css
--color-text-base
```

```txt
rgb(31,41,55)
```

Secondary:

```css
--color-text-secondary
```

```txt
rgb(107,114,128)
```

Description:

```css
--color-text-description
```

```txt
rgb(156,163,175)
```

---

# Dark Theme

## Background

Page:

```txt
rgb(18,28,42)
```

Container:

```txt
rgb(26,36,52)
```

Elevated:

```txt
rgb(30,41,58)
```

Dark mode should feel professional and soft.

Avoid pure black backgrounds.

---

# Borders

Default Border:

```css
--color-border
```

Light:

```txt
rgba(17,24,39,0.1)
```

Dark:

```txt
rgba(255,255,255,0.1)
```

Use borders more often than shadows.

---

# Layout Rules

## Header

Height:

```txt
56px
```

Background:

```txt
colorBgContainer
```

---

## Sidebar

Width:

```txt
240px
```

Background:

```txt
colorBgContainer
```

---

## Content Area

Padding:

```txt
24px
```

Background:

```txt
colorBgLayout
```

---

# Card Design

Cards should:

- have subtle borders
- use white background in light mode
- use container background in dark mode

Preferred radius:

```txt
8px
```

Avoid excessive shadows.

---

# Table Design

Tables are one of the most important components.

Requirements:

- compact
- readable
- enterprise-style

Use:

- alternating row backgrounds when useful
- subtle hover states
- left-aligned text by default

Numeric columns:

```txt
right aligned
```

Status columns:

```txt
center aligned
```

---

# Form Design

Forms should prioritize readability.

Spacing:

```txt
16px
```

between fields.

Labels should appear above inputs.

Avoid placeholder-only forms.

---

# Buttons

Primary actions:

```txt
type="primary"
```

Use theme primary color.

Secondary actions:

```txt
default button
```

Danger actions:

```txt
danger button
```

Do not create custom button styles unless necessary.

Prefer Ant Design button variants.

---

# Status Colors

Approved:

```txt
success
```

Pending:

```txt
warning
```

Rejected:

```txt
error
```

Inactive:

```txt
secondary text color
```

---

# Icons

Preferred icon style:

```txt
outline
```

Libraries:

- Lucide

Avoid mixing icon styles.

---

# Shadows

Use minimal shadows.

Preferred hierarchy:

```txt
border
→ shadow
→ elevation
```

Enterprise applications should rely on structure rather than visual effects.

---

# Component Strategy

Always prefer:

1. Ant Design component
2. Ant Design component with custom tokens
3. Custom wrapper component

Avoid building custom components when Ant Design already provides a solution.

---

# Tailwind Usage

Tailwind is used for:

- spacing
- layout
- flexbox
- grid
- sizing
- responsive behavior

Avoid hardcoded colors.

Prefer:

```txt
CSS Variables
Ant Design Tokens
```

instead of:

```txt
bg-blue-500
text-red-500
```

Use semantic styles whenever possible.

---

# AI Instructions

When generating UI:

- Use Ant Design components first.
- Use TailwindCSS for layout.
- Use CSS variables for colors.
- Follow enterprise software design patterns.
- Prefer clarity over creativity.
- Prefer consistency over uniqueness.
- Design for desktop-first experiences.
- Most users work on large monitors.
- Focus on dashboards, tables, forms and management workflows.