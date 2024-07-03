# React Content Listing Application

This project is a content listing application built with React. The application displays a list of movies in a grid format, supports infinite scrolling, client-side search with highlights, and handles missing images with placeholders.

## Table of Contents

- [Features](#features)
- [UI Design](#ui-design)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Contributing](#contributing)

## Features

- **Infinite Scrolling**: Automatically loads more content as the user scrolls down.
- **Client-side Search**: Filters content based on user input without additional API calls.
- **Search Term Highlighting**: Highlights the search term in the filtered results.
- **Placeholder Images**: Displays a default image when the original image is missing.
- **Responsive Design**: Adapts to various screen sizes, always showing three columns in mobile portrait view.
- **Debounced Search**: Reduces the number of search operations by using debounce.
- **Styled Components**: Uses CSS for styling components.
- **Header with Dynamic Behavior**: The header changes its appearance on scroll.

## UI Design

- **Header**: Contains a back arrow and a search icon. The header dynamically changes its appearance when scrolling.
- **Search Bar**: Allows users to search for content. Limits input to 50 characters and provides random search hints.
- **Grid List**: Displays the content in a grid format. Adjusts the number of columns based on screen width.
- **Grid Item**: Each item shows the movie poster and name. Highlights the search term if present.
- **No Records**: Displays a message when no content matches the search criteria.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-content-listing.git

2. cd react-content-listing

3. npm install

4. npm start


Project Structure
my-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/
│   │   ├── fetchData.js
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── GridItem.css
│   │   │   ├── Header.css
│   │   │   ├── NoRecords.css
│   │   │   ├── SearchBar.css
│   ├── components/
│   │   ├── GridItem.js
│   │   ├── Header.js
│   │   ├── NoRecords.js
│   │   ├── SearchBar.js
│   ├── context/
│   │   ├── DataContext.js
│   ├── hooks/
│   │   ├── useInfiniteScroll.js
│   ├── pages/
│   │   ├── ContentListPage.js
│   ├── utils/
│   │   ├── debounce.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── .gitignore
├── package.json
└── README.md



Usage
Infinite Scrolling
The application supports infinite scrolling to load more content as the user scrolls down. This is implemented using the useInfiniteScroll custom hook.

Search Functionality
Client-side Search: The search bar filters the displayed content based on user input.
Search Term Highlighting: The search term is highlighted within the content names.
Placeholder Images
If a movie poster is missing, a default placeholder image is displayed.

Responsive Design
The grid layout adjusts the number of columns based on the screen width:

Always shows three columns in mobile portrait view.
Technologies Used
React: A JavaScript library for building user interfaces.
CSS: For styling components.
JavaScript: For building the application logic.
HTML: For the structure of the web page.