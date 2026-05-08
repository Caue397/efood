const imgBase = import.meta.env.VITE_IMG_BASE ?? "/efood-img";

export function proxyImg(url: string): string {
  return url.replace("https://api-ebac.vercel.app/efood", imgBase);
}
