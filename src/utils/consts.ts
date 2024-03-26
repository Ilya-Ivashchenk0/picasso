const consts = {
  POSTS_LENGTH: (w: number) => (w <= 767 ? 3 : w >= 768 && w <= 1279 ? 5 : 5),
  POSTS_TO_ADD: (w: number) => (w <= 1280 ? 5 : 5)
}

export default consts
