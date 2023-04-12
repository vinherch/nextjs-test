export default function server() {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3002";
  }
  return "https://vinher.ch";
}
