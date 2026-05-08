export function proxyImg(url: string): string {
  return url.replace("https://api-ebac.vercel.app/efood/", "/efood-img/");
}
