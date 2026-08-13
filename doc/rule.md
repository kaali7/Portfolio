# Project Rules & Guidelines

## 1. Git and File Updates
- Always ensure changes are verified locally before committing.
- When making significant changes to the project structure or design, commit the changes with a clear, descriptive message (e.g., `feat(ui): redesign hero section with GSAP`).
- Do not commit generated files or dependencies (`node_modules`, `.next`, etc.). The `.gitignore` must always be respected.
- Keep documentation (like `current.md`) updated alongside code changes to accurately reflect the project state.
- **Documentation Enforcement:** Whenever a change is made or the user asks to commit, the AI MUST read and update `doc/current.md` to reflect the latest progress. If a major change involves new dependencies or architectural shifts, the AI MUST also update `doc/tech_stack.md`.

## 2. Design and AI Agent Skills
- **Skill Usage Mapping:** When creating or changing anything based on user requirements, you MUST consult the respective skill based on the task (referencing `skills-lock.json`):
  - **Better UI / Web Design:** `web-design-guidelines`, `design-taste-frontend`, `ui-ux-pro-max`, `add-ui`
  - **Animations:** `review-animations`, `improve-animations`, `animate`
  - **Design Critique / UX Review:** `critique`
  - **Brand & Messaging:** `brand`
  - **Slides & Presentations:** `slides`
- Avoid defaulting to generic "AI-generated" aesthetics (like excessive purple glows, templated floating nodes, or default generic layouts). 
- Always infer the correct "vibe" and design direction based on references before writing UI code.
- If a design change involves new animations, prioritize smooth, purposeful native animations (e.g., Framer Motion or GSAP) over generic CSS transitions.
