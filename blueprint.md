# AI Directory Website Blueprint

## Overview

The goal of this project is to create a comprehensive and user-friendly website that lists and categorizes all artificial intelligences in the world. The site will provide a one-stop resource for users to learn about different AIs, their capabilities, and how to access them.

## Design and Style

The website will have a modern, clean, and visually appealing design.

*   **Layout:** The main page features a category filter bar, followed by a 5x4 grid showcasing the top 20 ranked AIs. Below the grid, users can find a search bar and a full card-based layout for all AIs.
*   **Category Filters:** A series of buttons allowing users to filter the top ranking grid by AI category.
*   **Ranked Cards:** The top 20 cards are compact, clickable links that take the user to the AI's website. They prominently display the rank number, AI name, and category.
*   **Color Palette:** A vibrant and energetic color palette will be used, with a focus on blues, purples, and greens.
*   **Typography:** Expressive and easy-to-read fonts will be used to create a clear visual hierarchy.
*   **Interactivity:** Interactive elements have a "glow" effect and subtle animations. Cards have a lifted appearance with soft, deep shadows and a 3D tilt effect on hover.
*   **Texture:** A subtle noise texture will be applied to the main background to add a premium, tactile feel.

## Features

*   **Daily AI Ranking:** A clickable grid of the top AIs that changes every day, visible on the initial screen. Each card links to the AI's official website.
*   **Category Filtering:** Users can filter the daily ranking grid by selecting a specific AI category.
*   **AI Listings:** A comprehensive, clickable list of all AIs, each with its own detailed card that links to the official site.
*   **Categorization:** AIs are categorized by their function.
*   **Search and Filtering:** Users can search for specific AIs.
*   **Multi-language Support:** The website content is available in 12 languages.

## Completed Plans

*   **Phase 11: Finalize Multilingual Support**
    *   **`main.js` & `index.html`:** Corrected translation errors and added full support for 12 languages in the UI.

## Current Plan

*   **Phase 12: Translate AI Categories**
    1.  **Restructure `ai_data.json`:** Create a new top-level `categories` object to hold translations for each category name. Update the `ai_tools` array to reference these categories via a `category_key`.
    2.  **Update `main.js`:** Modify the logic to fetch the new data structure. The `createCategoryFilters` function will now use the `categories` object and the current language to create translated filter buttons.
    3.  **Update `ai-card.js`:** Adjust the `AiCard` component to correctly display the translated category name passed from `main.js`.
    4.  **Update `main.js`:** Ensure that switching the language dynamically updates the category filter buttons and the category names visible on the AI cards.
