# Portfolio starter

Responsive React + Vite portfolio inspired by a modern, dark editorial developer portfolio. It uses a normal-sized portrait placeholder, not a full-screen background image. The name, projects, education, skills, and links are sample content for you to replace.

## Run in VS Code
1. Extract the ZIP and open the extracted folder in VS Code.
2. Open Terminal → New Terminal. If PowerShell blocks npm, use the terminal dropdown and select **Command Prompt**.
3. Run `npm install`, then `npm run dev`.
4. Open the exact Local URL printed by Vite. Keep the terminal running; don't use Live Server.

## Add your photo
Put your image in `public/profile.jpg` (create a `public` folder if needed). In `src/main.jsx`, replace the `<div className="portrait-placeholder"> ... </div>` with:
`<img className="profile-photo" src="/profile.jpg" alt="Your profile" />`
Add to `src/styles.css`:
`.profile-photo { display:block; width:100%; aspect-ratio:4/5; object-fit:cover; }`

Update the sample skills, timeline, project cards, social links, and page title before publishing. The contact form is a demo only and needs a form service to actually send messages. Use `npm run build` to test a production build.
