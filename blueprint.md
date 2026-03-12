# AI Top 20 Categories Website Blueprint

## Overview

The project's goal is to build a clean, fast, text-only website that serves as a directory for top AI tools. The website will present a master list of 20 AI categories. When a user clicks on a category, the site will display a ranked list of the top 20 AI tools within that category.

All data for categories and tools will be sourced from local text files, making the content easy to manage and update.

## Core Structure

The website will have a two-level navigation structure:

1.  **Category View (Default):** The initial page loads with the main title "AI Top 20 카테고리" and a list of the 20 main AI categories.
2.  **Tool View:** When a user clicks on a category, the view updates to show a ranked list (1-20) of AI tools belonging to that selected category.

## File & Data Structure

The content is managed through a specific folder structure:

*   `ai/`: The root folder for all content.
*   `ai/[Category Name]/`: Each of the 20 main categories will have its own folder within `ai/`. For example, `ai/Text Generation/`.
*   `ai/[Category Name]/[Rank]_[Tool Name].txt`: Inside each category folder, there will be up to 20 text files. The filename dictates the rank and name of the tool. The content of the file can be a description or a link.
    *   Example: `ai/Text Generation/1_ChatGPT.txt`

## Features

*   **Dynamic Content:** The website will dynamically read the folder and file structure under `ai/` to generate the category and tool lists. No hard-coding of lists in the JavaScript.
*   **Text-Only Design:** The UI will be entirely text-based, with no images, complex icons, or heavy styling. The focus is on readability and speed.
*   **Interactive Navigation:** Clicking a category smoothly reveals the list of tools.

## Current Plan

*   **Phase 1: Project Reset & Scaffolding**
    1.  **Update `blueprint.md`:** Formalize the new project direction. (Complete)
    2.  **Clean Up:** Delete all old, unnecessary files (`ai-card.js`, `ai_data.json`, `firebase-debug.log`).
    3.  **Create New `style.css`:** Write a minimal, text-focused stylesheet.
    4.  **Create New `index.html`:** Design the basic HTML structure with containers for categories and tools.
    5.  **Create `ai/` Directory:** Create the main content directory.
    6.  **Populate Sample Content:** Create one sample category folder (`ai/Text Generation/`) and a few sample tool files (`1_ChatGPT.txt`, `2_Gemini.txt`) to work with.
    7.  **Create New `main.js`:** Write the core logic to read the file system and display content dynamically.
