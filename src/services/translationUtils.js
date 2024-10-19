export const fetchAbilityTranslation = async (abilityUrl, lang) => {
    const response = await fetch(abilityUrl);
    const abilityData = await response.json();
    const translation = abilityData.names.find(name => name.language.name === lang);
    return translation ? translation.name : abilityData.name; // Fallback al nombre en inglés
  };
  
export const fetchTypeTranslation = async (typeUrl, lang) => {
    const response = await fetch(typeUrl);
    const typeData = await response.json();
    const translation = typeData.names.find(name => name.language.name === lang);
    return translation ? translation.name : typeData.name; // Fallback al nombre en inglés
  };
  