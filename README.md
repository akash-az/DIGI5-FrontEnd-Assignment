# 📝 Notes App

A modern note-taking application with tag-based organization, built using React and Redux Toolkit.

![Notes App Screenshot](/public/screenshot.png)

## ✨ Features

- **Create Notes** with title, content, and multiple tags
- **Edit & Delete** existing notes
- **Tag Management**:
  - Add/remove tags from notes
  - Filter notes by tags
  - Automatic tag categorization
- **Responsive Design** works on all screen sizes
- **Persistent Storage** using local storage
- **Modern UI** with clean animations and transitions
- **Search Optimization** through tag filtering

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/akash-az/DIGI5-FrontEnd-Assignment.git

Install dependencies:

cd DIGI5-FrontEnd-Assignment
npm install

-> To Start the development server: npm run dev


🛠️ Technologies Used

React - Frontend framework

Redux Toolkit - State management

Tailwind CSS - Styling system

React Icons - Icon library

Vite - Build tool


📂 Project Structure

src/
├── app/            # Redux store configuration
├── components/     # React components
├── features/       # Redux slices
├── assets/         # Static assets
public/             # Public assets
```

## Key challenges you faced during development:

1. Text Overflow Issues : Content overflow in notes/titles despite using whitespace-pre-wrap

2. Redux Store Configuration : store is not defined errors due to incorrect exports

3. Dynamic Textarea Sizing : Difficulty balancing width/height expansion for multi-line content

4. Tag Management : Tags disappearing after note deletion or not updating filters

5. Border Styling Conflicts : Unintended dark borders replacing subtle design

6. Edit Feature Layout Breakage : Existing note UI breaking when editing activated

7. Local Storage Persistence : Data loss on refresh despite localStorage implementation
