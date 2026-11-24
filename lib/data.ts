export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Solutions", href: "#solutions", dropdown: true },
  { label: "Industries", href: "#industries", dropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const strip = [
  { icon: "Target", title: "High-Accuracy", sub: "Surveys" },
  { icon: "Layers", title: "Traffic & Mobility", sub: "Solutions" },
  { icon: "Settings", title: "Engineering", sub: "Consultancy" },
  { icon: "Leaf", title: "Environment &", sub: "Sustainability" },
  { icon: "BarChart3", title: "Data Analytics", sub: "& GIS" },
  { icon: "Box", title: "End-to-End", sub: "Project Support" },
];

export const stats = [
  { icon: "Briefcase", value: "14+", label: "Years of Experience" },
  { icon: "Layers", value: "250+", label: "Projects Delivered" },
  { icon: "Users", value: "100+", label: "Expert Professionals" },
  { icon: "Globe", value: "14+", label: "Countries Served" },
];

// img = optional file in /public/images (gradient shows if the file is missing)
export const services = [
  {
    title: "Turning Movement Survey",
    img: "svc-turning.jpg",
    g: ["#2d5a3a", "#6f9a6a"],
  },
  {
    title: "Pedestrian Survey",
    img: "svc-pedestrian.jpg",
    g: ["#3c4a63", "#8b9ab5"],
  },
  {
    title: "Bus Occupancy Survey",
    img: "svc-bus.jpg",
    g: ["#1c7a45", "#7ccf8f"],
  },
  {
    title: "Vehicle Occupancy Survey",
    img: "svc-vehicle.jpg",
    g: ["#4a4f58", "#9aa1ad"],
  },
  { title: "ANPR Survey", img: "svc-anpr.jpg", g: ["#30475e", "#7f9bb5"] },
  {
    title: "Cycle Movement Survey",
    img: "svc-cycle.jpg",
    g: ["#356b3c", "#9bc58a"],
  },
  {
    title: "Parking Surveys",
    img: "svc-parking.jpg",
    g: ["#27579e", "#6fa0e0"],
  },
  {
    title: "Link Count Survey",
    img: "svc-link.jpg",
    g: ["#4d5560", "#a3acb8"],
  },
  {
    title: "Roundabout Survey",
    img: "svc-roundabout.jpg",
    g: ["#3d6e3a", "#9cc98f"],
  },
  {
    title: "Data Entry & Processing",
    img: "svc-data.jpg",
    g: ["#2b3a4a", "#7a8ea3"],
  },
];

export const industries = [
  { icon: "Route", label: "Transport & Mobility" },
  { icon: "Building2", label: "Urban Development" },
  { icon: "HardHat", label: "Infrastructure & Construction" },
  { icon: "Leaf", label: "Environment & Forestry" },
  { icon: "Truck", label: "Mining & Industrial" },
  { icon: "Landmark", label: "Government & Public Sector" },
  { icon: "Droplets", label: "Water Resources" },
];

export const method = [
  { icon: "Search", title: "Discover", sub: "Understand requirements" },
  { icon: "ClipboardList", title: "Survey", sub: "Collect high-accuracy data" },
  { icon: "LineChart", title: "Analyze", sub: "Process & model the data" },
  { icon: "PenTool", title: "Plan", sub: "Design & develop solutions" },
  {
    icon: "PackageCheck",
    title: "Deliver",
    sub: "Compliant, actionable outputs",
  },
];

export const tech = [
  { icon: "Plane", title: "Drone / UAV Survey" },
  { icon: "Compass", title: "DGPS / GNSS Survey" },
  { icon: "Crosshair", title: "Total Station (ETS)" },
  { icon: "Layers", title: "GIS & Spatial Analytics" },
  { icon: "Database", title: "Data Processing & Automation" },
];

export const projects = [
  {
    title: "Urban Traffic Study",
    sub: "Major city traffic assessment and mobility planning",
    g: ["#2e5a45", "#86b59a"],
    img: "Urban_Traffic_Study.png",
  },
  {
    title: "Highway Corridor Survey",
    sub: "High-accuracy survey for corridor development",
    g: ["#3f6b2f", "#a3cf7f"],
    img: "Highway_Corridor_Survey.png",
  },
  {
    title: "Roundabout Design & Analysis",
    sub: "Traffic data collection and design optimization",
    g: ["#4b6b52", "#9fc2a5"],
    img: "Roundabout_Design_Analysis.png",
  },
  {
    title: "Environmental Mapping",
    sub: "GIS mapping for land and environmental assessment",
    g: ["#2f6b3a", "#8fd09a"],
    img: "Environmental_Mapping.png",
  },
];

export const why = [
  { icon: "Target", label: "Domain Expertise" },
  { icon: "Layers", label: "Advanced Technology" },
  { icon: "Users", label: "Experienced Team" },
  { icon: "ShieldCheck", label: "Quality & Compliance" },
  { icon: "Clock", label: "On-Time Delivery" },
];

export const values = [
  { icon: "Gem", label: "Integrity" },
  { icon: "Lightbulb", label: "Innovation" },
  { icon: "Award", label: "Excellence" },
  { icon: "Users", label: "Collaboration" },
  { icon: "Leaf", label: "Sustainability" },
];

export const insights = [
  {
    tag: "Industry Insights",
    title: "The Role of Traffic Data in Smarter Cities",
    date: "Apr 20, 2025",
    g: ["#c7402f", "#f0b34c"],
    img: "ins-traffic.jpg",
  },
  {
    tag: "Technology",
    title: "How Drones Are Transforming Surveys",
    date: "Apr 12, 2025",
    g: ["#2f6fa8", "#a9d3f0"],
    img: "ins-drone.jpg",
  },
  {
    tag: "Sustainability",
    title: "GIS for Better Environmental Planning",
    date: "Apr 05, 2025",
    g: ["#2f7a3d", "#9fd28d"],
    img: "ins-gis.jpg",
  },
];

export const partners = ["esri", "Trimble", "AUTODESK", "HEXAGON", "DJI"];

export const footerCols = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Our Team", "Careers", "Contact"],
  },
  {
    title: "Our Services",
    links: [
      "Turning Movement Survey",
      "Pedestrian Survey",
      "Vehicle/Bus Occupancy Survey",
      "ANPR Survey",
      "GIS & Data Processing",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Traffic & Mobility",
      "Urban Planning",
      "Environmental Consulting",
      "Engineering Support",
      "Data Analytics",
    ],
  },
  {
    title: "Industries",
    links: [
      "Transport & Mobility",
      "Infrastructure",
      "Mining & Industrial",
      "Environment & Forestry",
      "Government",
    ],
  },
];
