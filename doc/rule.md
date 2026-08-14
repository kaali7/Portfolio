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

## 3. Responsive Web Design & Testing
- **Multi-Device Responsiveness:** Every layout, UI component, and section MUST be fully responsive and tested across all standard viewport sizes: Mobile (`< 640px`), Tablet (`640px - 1024px`), Desktop (`1024px - 1440px`), and Ultra-wide (`> 1440px`).
- **No Overflow or Clipping:** Ensure all text, containers, HUD widgets, images, and visual overlays adapt fluidly without unexpected horizontal scrollbars, text clipping, or element overlap.
- **Touch & Pointer Adaptations:** Interactive elements (buttons, nav menus, dropdowns, cards, cursor triggers) must function seamlessly on both touch interfaces and mouse pointer devices.
- **Responsiveness Verification:** Whenever building or modifying UI components, verify layout scalability, spacing, and typography legibility across mobile and desktop breakpoints before finalizing.

## 4. Icon Usage Guidelines
- **Simple Icons (`simple-icons`)**: Used EXCLUSIVELY for real technology, brand, and framework logos (Python, Pandas, NumPy, PyTorch, TensorFlow, React, FastAPI, PostgreSQL, MongoDB, Git, Docker, GitHub, Hugging Face, etc.).
- **Lucide React (`lucide-react`)**: Used for UI interface controls & conceptual/data-science icons (Database, BarChart, LineChart, Brain, Network, Search, Code, Server, Workflow, Chart, Analytics, etc.).
- **Tabler Icons (`@tabler/icons-react`)**: Used as a secondary conceptual/technical UI icon set when needed.
- **Emoji & Unknown Icon Ban**: Emojis (e.g., 📊, 🤖, ⚡, 📚, 👁️, 🌐, 💻) and raw/unknown SVG icons are strictly banned across all components. Always use the proper icon library component.


