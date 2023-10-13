export const missingImg = "/404.png";

export const handleImgError = async (e, id) => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    );

    if (!response.ok) {
      throw new Error("no image");
    }
    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  } catch (error) {
    e.target.src = missingImg;
  }
};
