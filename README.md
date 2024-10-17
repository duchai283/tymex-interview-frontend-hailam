## Getting Started

First, run the development server:

```bash
npm install
npm run dev to run the application
npm run test or npm run test:ui for testing
```

## Web Application Test Submission

## Overview

This document outlines the features and implementation details of the web application I have built as part of the test assignment. The application is designed to provide a user-friendly interface while effectively fetching and displaying data from an API.

## What I Have Done So Far

1. UI Development
   Frameworks Used: I utilized Ant Design (antd) along with Tailwind CSS to build a responsive user interface that aligns with the reference Figma design.
   Responsive Design: The application is fully responsive, ensuring a seamless user experience across various devices.
2. Data Fetching
   API Integration: Implemented data fetching using Axios to retrieve data from the server.
   Server-Side Rendering: Built the application using Next.js, leveraging its server-side rendering capabilities to improve performance and SEO.
3. Data Handling
   Load More Functionality: Added a "Load More" button to fetch additional data from the server. This functionality is implemented using route.query to manage state and data retrieval.
   Empty Data Handling: Developed error handling for scenarios where no data is returned.
   Skeleton Loading: Incorporated skeleton loading indicators to provide visual feedback while data is being fetched.
4. Automatic Data Refresh
   Auto-Refresh Mechanism: Implemented a system to automatically refresh data every 60 seconds, ensuring users have access to the latest information. This feature is triggered only if there are no active filters applied by users.
5. Search Functionality
   Multi-Criteria Search: Implemented a search feature that supports multiple criteria, allowing users to refine their data queries.
   Auto-Trigger Search: The search is designed to automatically trigger when any search criteria change, providing a dynamic user experience.
   Debounce Search: Incorporated debouncing to limit the number of API calls made during searches, optimizing performance and reducing server load.

Thank you for considering my submission. I look forward to your feedback.
