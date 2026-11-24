import {
  Target, Layers, Settings, Leaf, BarChart3, Box, Briefcase, Users, Globe, Route, Building2,
  HardHat, Truck, Landmark, Droplets, Search, ClipboardList, LineChart, PenTool, PackageCheck,
  Plane, Compass, Crosshair, Database, ShieldCheck, Clock, Gem, Lightbulb, Award, Circle,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const map: Record<string, ComponentType<LucideProps>> = {
  Target, Layers, Settings, Leaf, BarChart3, Box, Briefcase, Users, Globe, Route, Building2,
  HardHat, Truck, Landmark, Droplets, Search, ClipboardList, LineChart, PenTool, PackageCheck,
  Plane, Compass, Crosshair, Database, ShieldCheck, Clock, Gem, Lightbulb, Award,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name] ?? Circle;
  return <Cmp aria-hidden="true" {...props} />;
}
