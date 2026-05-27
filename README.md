# Manashi Ray — Personal Portfolio

A professional, academic portfolio website designed and built for Dr. Manashi Ray. The site highlights her biography, forthcoming memoir (*Charting My Own Course*), speaking engagements, and timeline of achievements.

## Design & Architecture
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Custom Vanilla CSS Modules (No Tailwind)
* **Aesthetic:** Minimalist, Academic, Professional
* **Color Palette:** Ivory, Deep Navy, Warm Gold
* **Typography:** Cormorant Garamond (Headings) & Inter (Body)

## Project Structure
The website uses a modern multi-page architecture to separate content logically:
* `/` - Home Page (Hero & Featured overview)
* `/about` - Full biography and statistics
* `/book` - Detailed showcase of the debut memoir, including an interactive 3D book cover
* `/speaking` - Speaking topics and an interactive timeline of milestones
* `/contact` - Functional contact form and social links

## Setup and Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   cd manashi-ray
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production
To create an optimized production build, run:
```bash
npm run build
```
Once the build is complete, you can start the production server with:
```bash
npm run start
```
