# Employee Dashboard

A professional React.js dashboard application built with AG Grid for displaying and managing employee data.

## Features

- **AG Grid Integration**: Full-featured data grid with client-side rendering
- **Sorting**: Click column headers to sort data
- **Filtering**: Column-level filtering for all data fields
- **Pagination**: Configurable pagination with page size selector (10, 20, 50)
- **Column Resizing**: Drag column borders to resize
- **Responsive Design**: Clean, professional UI that works on desktop and tablet
- **Professional Styling**: Modern, minimal design with subtle hover effects

## Tech Stack

- React 18 (Vite)
- AG Grid Community Edition
- Functional components with Hooks
- Plain CSS (CSS Modules structure)
- JavaScript

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx      # Main dashboard container
│   ├── Header.jsx          # App header component
│   └── DataGrid.jsx        # AG Grid wrapper component
├── data/
│   ├── sampleData.js       # Sample employee dataset (20 rows)
│   └── columnDefs.js       # AG Grid column definitions
├── styles/
│   ├── Dashboard.css       # Dashboard layout styles
│   ├── Header.css          # Header component styles
│   └── DataGrid.css        # Grid customization styles
├── App.jsx                 # Root component
└── main.jsx               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

The dashboard displays a table of employee information with the following columns:
- ID
- Name
- Email
- Department
- Role
- Salary (formatted as currency)
- Join Date (formatted date)
- Status (with visual badge)
- Location

### Grid Features

- **Sorting**: Click any column header to sort ascending/descending
- **Filtering**: Click the filter icon in column headers to filter data
- **Pagination**: Use the pagination controls at the bottom to navigate pages
- **Column Resizing**: Hover over column borders and drag to resize
- **Row Hover**: Hover over rows to see highlight effect

## Code Quality

- Clean, readable code structure
- Reusable components
- Optimized with `useMemo` and `useCallback` where appropriate
- Separation of concerns (data, components, styles)
- Professional styling with consistent design system

## License

This project is created for assessment purposes.
