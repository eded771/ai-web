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
*   **Interactivity:** Interactive elements have a "glow" effect and subtle animations. Cards have a lifted appearance with soft, deep shadows.
*   **Texture:** A subtle noise texture will be applied to the main background to add a premium, tactile feel.

## Features

*   **Daily AI Ranking:** A clickable grid of the top AIs that changes every day, visible on the initial screen. Each card links to the AI's official website.
*   **Category Filtering:** Users can filter the daily ranking grid by selecting a specific AI category.
*   **AI Listings:** A comprehensive, clickable list of all AIs, each with its own detailed card that links to the official site.
*   **Categorization:** AIs are categorized by their function.
*   **Search and Filtering:** Users can search for specific AIs.
*   **Multi-language Support:** The website content is available in 12 languages.

## Current Plan

*   **Phase 9: Add Category Filters**
    1.  **Update `index.html`:** Add a container for the category filter buttons above the daily ranking grid.
    2.  **Update `style.css`:** Add styling for the filter buttons, including active and hover states.
    3.  **Update `main.js`:** 
        *   Define the list of categories.
        *   Create and render the filter buttons.
        *   Implement the filtering logic. When a button is clicked, filter the AI list by that category and re-render the ranking grid.
        *   Add an "All" button to show all AIs.
