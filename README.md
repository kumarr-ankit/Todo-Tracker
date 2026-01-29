
## 📋 Overview

**Todo Tracker** is a simple yet elegant note-taking and task management application built with React and Vite. It allows users to create, edit, and delete notes/todos with due dates and timestamps. The app features a modern UI with light/dark mode support and a responsive design.

---

## 🎯 Features

- **Create Notes**: Add new todos with title, description, and due dates
- **Edit Notes**: Modify existing notes through an intuitive editor
- **Delete Notes**: Remove notes from your collection
- **Due Dates**: Set and track deadlines for your tasks
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works seamlessly on different screen sizes
- **Empty State**: User-friendly message when no notes exist
- **Context Menu**: Right-click menu on notes for quick actions (Edit, Delete, Send)
- **Splash Screen**: Loading animation while app initializes

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AdderForm.jsx          # Form for creating new notes
│   ├── EditForm.jsx           # Form for editing existing notes
│   ├── MenuItem.jsx           # Context menu for note actions
│   ├── NoteCard.jsx           # Individual note display card
│   ├── NotesWrapper.jsx       # Container for all notes
│   ├── Navbar.jsx             # Top navigation bar
│   ├── Footer.jsx             # Footer with action buttons
│   ├── UserProfile.jsx        # User menu (logout, delete account, theme)
│   ├── AddNewNote.jsx         # Button to trigger new note form
│   ├── ModeBtn.jsx            # Theme toggle button
│   ├── NothingElement.jsx     # Empty state component
│   ├── Extra.jsx              # Educational content (Markdown)
│   ├── constansts.js          # App constants
│   ├── css/                   # Component styles
│   └── jsx/                   # Additional JSX files
├── config/
│   └── supabaseClient.js      # Supabase configuration
├── context/
│   └── IdContext.js           # React Context for ID management
├── App.jsx                    # Main app component
├── MainApp.jsx                # MainApp  application layout : this is for conditional rendering of splash page and App page.
├── Splash.jsx                 # Loading splash screen
├── main.jsx                   # Entry point
├── App.css                    # Global app styles
├── index.css                  # Global index styles
├── Splash.css                 # Splash screen styles
└── assets/                    # Animations and images

public/
├── NoteItem.js                # Note data model class
├── DataUtils.js               # Data management utilities
├── Data.js                    # Data source (JSON import)

```

---

## 🔧 Core Components

### **AdderForm** (AdderForm.jsx)
Displays a form modal for creating new notes with:
- Title input
- Description textarea
- Due date picker
- Submit and cancel buttons
- Smooth animations on show/hide

### **NoteCard** (NoteCard.jsx)
Renders individual note cards with:
- Note title and description
- Creation date and due date
- Context menu (Edit, Delete, Send)
- Hover effects and animations

### **EditForm** (EditForm.jsx)
Modal form for editing existing notes with:
- Pre-populated fields
- Save changes button
- Cancel option

### **MenuItem** (MenuItem.jsx)
Context menu with options:
- Edit note
- Delete note
- Send note
- Event handling to prevent menu closure

### **NotesWrapper** (NotesWrapper.jsx)
Fetches and displays all notes from data source:
- Maps through notes array
- Shows empty state when no notes exist
- Passes note data to NoteCard components

### **ModeBtn** (ModeBtn.jsx)
Theme toggle button:
- Switches between light and dark mode
- Updates `data-theme` attribute on HTML element
- Uses lucide-react icons (Sun/Moon)

---

## 📊 Data Management

### **NoteItem** (NoteItem.js)
Note data model with properties:
```javascript
{
  id: int,           // id identifier : this is unique
  title: String,      // Note title
  desc: String,       // Note description
  dueAt: Date,        // Due date
  createdAt: Date     // Creation date
}
```

### **DataUtils** (DataUtils.js)
Utility functions:
- `getNotes()` - Retrieve all notes
- `addNote(note)` - Add new note to collection

### **Data** (Data.js, Data.json)
Central data source storing all notes in JSON format

---

## 🎨 Styling

The project uses **CSS custom properties (variables)** for theming:

### Light Mode Variables
- `--main-color`: #ffffff
- `--color-ocean`: #3b9aff
- `--color-sky`: #61a5c2
- `--text-normalColor`: #000000

### Dark Mode Variables
- `--main-color`: #121212
- `--color-ocean`: #4dabff
- `--color-sky`: #3d5afe
- `--text-normalColor`: #e0e0e0

**CSS Files:**
- App.css - Main application styles
- index.css - Global styles
- Splash.css - Splash screen styles
- Component.css - Component-specific styles
- NoteCard.css - Note card styling
- `components/css/` - Additional component styles

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kumarr-ankit/Todo-Tracker.git

# Navigate to project
cd Todo-Tracker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Running the App
The app will start at `http://localhost:5173` (Vite default)

---

## 📱 User Interface

### **Navbar**
- App title: "Todo Tracker"
- Fixed at top



### **Main View**
- Displays grid of note cards
- Add button (bottom-right) to create new notes
- Mode toggle button (bottom-left) for theme switch

### **Empty State**
When no notes exist, shows:
- "Hey, Geek 🐳" message
- Prompt to create first note
- Add new todo button

---

## 🔄 Note Operations

### Create Note
1. Click "Add new todo" button
2. Fill in title, due date, and description
3. Click "Submit"
4. Form animates out and note appears in grid

### Edit Note
1. Right-click or click menu icon on note card
2. Click "Edit"
3. Modify fields in editor form
4. Click "Save Changes"

### Delete Note
1. Right-click or click menu icon on note card
2. Click "Delete"
3. Note is removed from collection
4. Success message appears

---

## 🎭 Animation & Transitions

- **Form Animations**: Slide-in and slide-out effects
- **Menu Animations**: Fade and scale transitions
- **Splash Screen**: Lottie animation with loading indicator
- **Button Hover**: Scale and shadow effects
- **Theme Toggle**: Smooth rotation animation

---

## 📦 Dependencies

Key packages used:
- **React** - UI framework
- **Vite** - Build tool
- **lucide-react** - Icon library
- **react-markdown** - Markdown renderer
- **remark-gfm** - Markdown plugins
- **@lottiefiles/react-lottie-player** - Animation player
- **github-markdown-css** - Markdown styling

---

## 🎨 Customization

### Change Theme Colors
Edit CSS variables in index.css or component CSS files:
```css
:root {
  --card-background-color: #f3f1f1;
  --card-heading: #222;
  --card-desc: #020202;
  --card-dueCreate: rgb(10, 9, 9);
  --label-footer: rgb(0, 0, 0);
  --id: #4a4a4a;
  --border: #bababa;
  --radius-normal: 16px;
  --radius-curve: 20px;

  --main-color: #03ffdd;
  --appNameColor: black;
  --appDet: #909193;
  --text-normalColor: black;
  /* Deep Blue - for headers, nav */
  --main-color-secondary: #06ffb8;
  /* Slightly lighter for hover states or buttons */

  --color-ocean: #3b9aff;
  /* Primary action button color */
  --color-ocean-secondary: #468faf;
  /* Card headers, tags */

  --date-border: 1px solid var(--border);

  --color-sky: #61a5c2;
  /* Backgrounds, secondary buttons */
  --color-sky-secondary: #89c2d9;
  /* Input borders, light hovers */

  --color-sky-white: #a9d6e5;
  /* Light background, section separators */
  --color-sky-white-secondary: #caf0f8;
  /* Highlight boxes, hover areas */

  --color-light: #f9f9f9;
  /* Very light background — almost white but blue-tinted */
  --color-single-note-bg: #ffffff;

  --info-container-bg: #b0b0b03b;
}

[data-theme='dark'] {
  --date-border: none;
  --card-background-color: #1a1b1c62;
  --card-heading: #ffffff;
  --card-desc: #e9e9e9;
  --card-dueCreate: rgb(189, 185, 185);
  --label-footer: rgb(122, 117, 117);
  --id: #757364;
  --border: rgb(35, 35, 35);
  /* Core Backgrounds - using "Elevated" dark grays */
  --main-color: #121212;
  /* Deepest background */
  --main-color-secondary: #1e1e1e;
  /* Slightly lighter for sections */
  --color-single-note-bg: #252525;
  /* Note/Card backgrounds */
  --color-light: #181818;
  /* Blue-tinted dark */

  /* Text Colors */
  --appNameColor: #ffffff;
  --text-normalColor: #e0e0e0;
  /* Soft white for better readability */
  --appDet: #a0a0a0;
  /* Muted text */

  /* Ocean/Sky Blue Palette - adjusted for Dark Mode saturation */
  --color-ocean: #4dabff;
  /* Brighter blue to pop against dark */
  --color-ocean-secondary: #52b1d6;

  --color-sky: #3d5afe;
  --color-sky-secondary: #2c3e50;

  --color-sky-white: #2a2d2e;
  /* Swapped: dark grey with blue tint */
  --color-sky-white-secondary: #323739;

  /* Status and Containers */
  --info-container-bg: rgba(255, 255, 255, 0.1);
  /* Transparent white overlay */
}
```

### Modify Form Fields
Edit AdderForm.jsx and EditForm.jsx to add/remove input fields

### Update Note Display
Customize NoteCard.jsx layout and styling

---

## 📝 Notes

- All notes are coming from `supabase`
- Data persists  during session ( saved to backend by default)
- Context menu uses event delegation for performance
- Responsive design works on mobile, tablet, and desktop

---

## 🔮 Future Enhancements

Potential features to add:
- Backend database integration (Now using supabase for ease.)
- User authentication
- Categories/Tags for notes
- Search functionality
- Note sharing
- Rich text editing

---

**Created with ❤️ for productivity enthusiast** !😉