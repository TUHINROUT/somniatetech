# Somniate Solutions – Next.js Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Responsive on all screens, with an app-style
mobile experience (sticky app bar, slide-in menu, bottom tab bar, swipeable rows, PWA manifest).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Images
Images in `public/images/` are already cropped from your mockup (low-res). For sharper results replace them with original photos using the same file names.

## Add your real photos (optional)
Copy images into `public/images/` using these exact names. Until a file exists, a soft
gradient is shown, so nothing breaks.

- Hero: hero.jpg (wide, 1600x700), office.jpg, team.jpg, case-study.jpg
- Services: svc-turning, svc-pedestrian, svc-bus, svc-vehicle, svc-anpr, svc-cycle, svc-parking, svc-link, svc-roundabout, svc-data (.jpg)
- Projects: prj-urban, prj-highway, prj-roundabout, prj-env (.jpg)
- Insights: ins-traffic, ins-drone, ins-gis (.jpg)

## Edit content
All text, links and lists are in `lib/data.ts`. Sections are in `components/`.
Colors: `tailwind.config.ts`. Replace the logo in `components/Logo.tsx` and the app icon in `public/icon.svg`.
"# somniatetech" 
