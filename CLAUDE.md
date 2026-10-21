# CLAUDE.md

## Project overview

This project is an informational website for Pizzería La Abuela, a local pizzeria in Rivas-Vaciamadrid, Madrid.

- Frontend: React with Vite.
- Language: JavaScript.
- Styling: CSS.
- Website language: Spanish (Spain).
- Main goals: present the business, display its menu and prices, and provide contact, opening hours and location information.
- Initial scope: static informational website. No backend, database, authentication, shopping cart or custom ordering system.

## Documentation

Read the relevant document before working on a task:

- `docs/requisitos.md`: project scope, functional requirements and acceptance criteria.
- `docs/contenido-negocio.md`: verified business information, menu items, ingredients and prices.
- `docs/diseno.md`: visual identity, colors, typography and layout guidelines.

Do not load or reproduce all documentation in every response. Consult only the files relevant to the current task.

## Development guidelines

- Inspect the existing project structure and configuration before making changes.
- Follow the existing conventions unless there is a clear reason to change them.
- Prefer simple, readable and maintainable code over unnecessary abstractions.
- Create reusable components when they provide a clear benefit.
- Keep business and menu data separate from presentation when appropriate.
- Avoid duplicating data or logic.
- Do not add dependencies unless they are necessary. Explain the reason before introducing them.
- Do not rewrite unrelated files or replace existing configuration without justification.
- Preserve existing functionality when modifying code.

## Business information accuracy

- Treat `docs/contenido-negocio.md` as the source of truth for business information and menu data.
- Never invent products, ingredients, prices, promotions, opening hours, delivery URLs or business claims.
- Preserve the supplied prices exactly.
- If information is missing or ambiguous, ask for clarification or leave it explicitly pending.
- Do not present stock or generated images as real photographs of the business or its food.
- Do not assume that materials are authorized for publication.

## Visual and accessibility guidelines

- Follow `docs/diseno.md`.
- Use the defined color palette and typography consistently.
- Prioritize mobile usability and responsive layouts.
- Use semantic HTML and accessible names for interactive elements.
- Ensure visible keyboard focus, sufficient contrast and meaningful image alternative text.
- Avoid unnecessary animations, visual clutter and excessive dependencies.

## Workflow

For each task:

1. Identify the specific goal and inspect only the relevant files.
2. For significant changes, propose a concise implementation plan before editing.
3. Implement the smallest coherent change that meets the requirements.
4. Run relevant checks, such as linting, tests or a production build, when available.
5. Inspect the final diff and report any remaining issues.

Do not claim that checks passed unless they were actually executed.

## Communication

- Communicate with the user in Spanish (Spain).
- Keep explanations concise and focused on the current task.
- Explain important decisions briefly so the user can learn React and good development practices.
- Do not explain basic concepts repeatedly unless asked.
- When a task is complete, summarize the changes, checks performed and any outstanding issues.
- Do not implement additional features that were not requested.

## Safety and version control

- Never expose secrets, credentials, API keys or environment variables.
- Do not run destructive commands or overwrite important files without explicit approval.
- Do not commit changes automatically.
- Review changes before recommending a Git commit.