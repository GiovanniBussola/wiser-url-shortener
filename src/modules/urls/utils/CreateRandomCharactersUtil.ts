class CreateRandomCharactersUtil {
  public async generate(min_characters: number, max_characters: number): Promise<string> {
    let numberBetween = Math.floor(Math.random() * (max_characters - min_characters)) + min_characters;

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "123456789"
    let charset = letters.concat(letters.toLowerCase()).concat(numbers);

    let text = "";

    for (var i = 0; i < numberBetween; i++) {
      text += charset[Math.floor(Math.random() * charset.length)];
    }

    return text;
  }
}

export default CreateRandomCharactersUtil
