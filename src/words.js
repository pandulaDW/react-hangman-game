const random_words = `rough present dislike place obtainable nippy mask reward doctor quilt quarter expect skeleton nut 
haircut hour choice mechanism roof idea democratic goalkeeper resource grudge survey credit appeal helmet clash trance girl request restless 
railroad other weight rotten roof coast firm illusion refrigerator`.split(" ");

const cleansed_words = [...new Set(random_words.map(el => el.trim()))];

export default cleansed_words;
