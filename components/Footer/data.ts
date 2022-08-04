const SOCIAL: { url: string; img: string }[] = [];

for (let i = 74; i <= 78; i++) {
  SOCIAL.push({
    url: "",
    img: `/assets/images/social${i}.svg`,
  });
}

export { SOCIAL };
