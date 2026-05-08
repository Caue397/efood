import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("restaurante/:id", "routes/restaurante.$id.tsx"),
] satisfies RouteConfig;
