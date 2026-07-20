# AI Rules for Delicias da Milly Application

This document outlines the core technologies used in this project and provides guidelines for using specific libraries to maintain consistency and best practices.

## Tech Stack Overview

*   **React**: The primary JavaScript library for building the user interface.
*   **TypeScript**: Used for type safety across the entire codebase, enhancing code quality and maintainability.
*   **Vite**: The build tool providing a fast development server and optimized production builds.
*   **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling, ensuring responsive designs.
*   **shadcn/ui**: A collection of beautifully designed, accessible, and customizable UI components built on Radix UI.
*   **React Router DOM**: Handles client-side routing and navigation within the application.
*   **React Query**: Manages server state, data fetching, caching, and synchronization.
*   **React Hook Form & Zod**: Used together for robust form management and schema-based validation.
*   **Lucide React**: Provides a comprehensive and customizable icon library.
*   **Sonner**: The chosen library for displaying elegant and accessible toast notifications.

## Library Usage Rules

To ensure consistency and maintainability, please adhere to the following guidelines when developing:

*   **UI Components**:
    *   **Always** prioritize `shadcn/ui` components for all UI elements.
    *   If a specific component is not available in `shadcn/ui`, create a new, small, focused custom component using Tailwind CSS.
    *   **Do not** introduce new UI component libraries.
*   **Styling**:
    *   **Exclusively** use Tailwind CSS for all styling.
    *   Ensure all designs are responsive by utilizing Tailwind's responsive utility classes.
    *   Avoid custom CSS files or inline styles unless absolutely necessary for unique, non-Tailwind-addressable cases.
*   **Routing**:
    *   Use `react-router-dom` for all navigation.
    *   All main application routes should be defined in `src/App.tsx`.
*   **State Management**:
    *   For local component state, use React's `useState` and `useReducer` hooks.
    *   For global server state or data fetching, use `react-query`.
    *   For global client state (e.g., shopping cart), use `React.Context` (as demonstrated by `CartContext`).
*   **Forms & Validation**:
    *   Implement all forms using `react-hook-form` for controlled inputs and submission handling.
    *   Use `zod` for defining validation schemas for all form inputs.
*   **Icons**:
    *   Use `lucide-react` for all icons throughout the application.
*   **Notifications**:
    *   Use `sonner` for displaying all toast notifications to the user.
*   **Date Handling**:
    *   Use `date-fns` for any date formatting, parsing, or manipulation tasks.
*   **Utility Functions**:
    *   General utility functions (e.g., `cn` for class merging) should be placed in `src/lib/utils.ts`.
*   **File Structure**:
    *   `src/pages/`: For top-level views and routes.
    *   `src/components/`: For reusable UI components.
    *   `src/contexts/`: For React Context providers.
    *   `src/hooks/`: For custom React hooks.
    *   `src/lib/`: For utility functions, constants, and data (e.g., `products.ts`, `whatsapp.ts`).
    *   `src/types/`: For TypeScript type definitions.