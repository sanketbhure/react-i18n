import languageConfig from "./lang.json";

const I18n = (keyword) => {
    const lang = "mr";

    return languageConfig[lang][keyword];
}

export default I18n;