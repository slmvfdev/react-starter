# AI Agent Global Rules (Frontend Project)

---

## 1. General Principles

* Always follow **spec-driven development (SDD)**
* Never implement without understanding requirements
* Prefer **clean, maintainable, and scalable code**
* Avoid overengineering and unnecessary abstractions
* Code must be **readable and predictable**

---

## 2. Architecture Rules

### 2.1 Separation of Concerns

Strictly separate:

* Data layer (data transformation, business logic)
* UI layer (React components)
* State management (Redux or local state)

❌ DO NOT mix:

* UI + business logic
* React Flow + data transformation

---

### 2.2 Feature-Based Structure

Code must follow this structure:

* `features/` → business logic
* `widgets/` → complex UI blocks
* `pages/` → page composition
* `shared/` → reusable utilities and components

---

### 2.3 React Flow Rules

* React Flow is **visualization only**
* Nodes and edges must be generated **outside** UI components
* No business logic inside React Flow components

---

## 3. Code Quality Rules

### 3.1 TypeScript

* Use strict typing
* Avoid `any`
* Define clear interfaces and types

---

### 3.2 Naming

* Use descriptive names
* Avoid abbreviations
* Functions must describe action (e.g., `buildEmployeeHierarchy`)

---

### 3.3 Functions

* Keep functions small and focused
* One function = one responsibility

---

## 4. State Management Rules

### 4.1 Global State (Redux)

Use Redux ONLY for:

* employee data
* filters
* authentication

---

### 4.2 Local State

Use React state for:

* UI interactions
* React Flow state (nodes, edges)

---

## 5. UI/UX Rules

### 5.1 Consistency

* Use one design system (Tailwind-based)
* Avoid mixing multiple UI styles

---

### 5.2 Simplicity

* Keep UI minimal
* Avoid visual clutter

---

### 5.3 Status Representation

* Use a single consistent method (colored dot)
* Do not mix icons, emojis, and badges

---

## 6. Performance Rules

* Avoid unnecessary re-renders
* Memoize where needed
* Keep React Flow optimized
* Do not render large datasets without optimization

---

## 7. Data Handling Rules

* Backend returns flat data
* Transform data in a dedicated layer
* Never transform data inside UI components

---

## 8. Testing Rules

* Write tests ONLY for:

    * data transformation
    * filtering logic

* Do NOT write unnecessary UI tests

---

## 9. Dependency Rules

* Do not introduce new libraries unless necessary
* Prefer existing stack (React, Tailwind, Redux)

---

## 10. Error Handling

* Always handle edge cases:

    * empty data
    * missing fields
    * invalid hierarchy

---

## 11. Output Expectations

Every implementation must include:

* Clear folder placement
* Typed code (TypeScript)
* Clean structure
* No dead code
* No console.logs (unless debugging explicitly requested)

---

## 12. Forbidden Practices

❌ Mixing business logic inside components
❌ Using `any` type
❌ Writing large monolithic components
❌ Hardcoding data inside UI
❌ Ignoring project structure

---

## 13. Implementation Style

* Prefer composition over inheritance
* Prefer clarity over cleverness
* Keep code easy to refactor

---

## 14. Communication Rules

* If requirements are unclear → ASK before implementing
* Do not assume missing logic
* Follow given spec strictly

---
