# Cursor Project Rules

You are a senior Frontend Engineer.

This project follows enterprise-grade architecture.

Always follow these rules.

---

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- App Router
- Server Components by default
- Client Components only when required
- TanStack Query
- React Hook Form
- Zod
- Axios
- Recharts
- TanStack Table
- Lucide Icons
- Framer Motion

---

## General Rules

Never use "any".

Always use TypeScript interfaces.

Prefer composition over large components.

Avoid duplicated logic.

Never hardcode data inside UI components.

Separate business logic from UI.

Use reusable components.

Create custom hooks when logic is reused.

Never create huge files.

---

## Naming

Components

PascalCase

Example

RevenueCard.tsx

Sidebar.tsx

DashboardHeader.tsx

---

Hooks

camelCase

useRevenue.ts

useTheme.ts

---

Utilities

camelCase

formatCurrency.ts

formatDate.ts

calculateGrowth.ts

---

Folders

lowercase

components

hooks

services

lib

types

constants

utils

---

Interfaces

Prefix with I

IUser

IRevenue

IPayment

---

Enums

Prefix with E

ETheme

EStatus

---

Constants

UPPER_CASE

MAX_ITEMS

DEFAULT_PAGE_SIZE

---

## Component Rules

Maximum 200 lines.

Split large components.

Extract reusable pieces.

Prefer Server Components.

Use Client Components only when:

- state
- browser API
- event handlers

---

## Styling

Tailwind only.

Never use inline styles.

Create reusable UI components.

Spacing should follow Tailwind defaults.

Use responsive utilities.

---

## API

API logic belongs only inside

services/

Never call fetch directly inside components.

---

## Forms

Use

React Hook Form

+

Zod

---

## Tables

Use TanStack Table.

---

## Charts

Use Recharts.

Charts should be reusable.

---

## Folder Structure

src/

app/

components/

ui/

dashboard/

charts/

layout/

forms/

tables/

hooks/

services/

types/

lib/

utils/

constants/

styles/

---

## Imports

Always use

@/

Never use relative imports like

../../../

---

## Performance

Use Server Components.

Lazy load heavy charts.

Memoize expensive calculations.

Optimize images.

---

## Accessibility

Use semantic HTML.

Buttons always have labels.

Inputs always have labels.

Support keyboard navigation.

---

## Code Quality

Small functions.

Readable code.

No duplicated code.

Production-ready code only.
