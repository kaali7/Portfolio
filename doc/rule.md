# Project Rules & Guidelines

## 1. Git and File Updates
- Always ensure changes are verified locally before committing.
- When making significant changes to the project structure or design, commit the changes with a clear, descriptive message (e.g., `feat(ui): redesign hero section with GSAP`).
- Do not commit generated files or dependencies (`node_modules`, `.next`, etc.). The `.gitignore` must always be respected.
- Keep documentation (like `current.md`) updated alongside code changes to accurately reflect the project state.

## 2. Design and AI Agent Skills
- When updating or redesigning the frontend, the AI must actively consult its available specialized skills (such as `design-taste-frontend` or others in `skills-lock.json`).
- Avoid defaulting to generic "AI-generated" aesthetics (like excessive purple glows, templated floating nodes, or default generic layouts). 
- Always infer the correct "vibe" and design direction based on references before writing UI code.
- If a design change involves new animations, prioritize smooth, purposeful native animations (e.g., Framer Motion or GSAP) over generic CSS transitions.
