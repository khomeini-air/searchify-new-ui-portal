export const defaultState = {
    show: false,
    isEditting: false,
    loading: false,
    suggestions: [],
    suggestionName: null,
    suggestionTitle: null,
    suggestionKeywords: null,
    suggestionDescription: null,
    edittingSuggestion: null,
    editSuggestionName: null,
    editSuggestionTitle: null,
    editSuggestionKeywords: null,
    editSuggestionDescription: null,
    createdSuggestion: null,
    domains: [],
    selectedDomain: null,
    tags: [],
    selectedOptions: [],
    tagsData: [],
    disable: false
}

export const ShopifySuggestionPageReducer = (state, action) => {
    switch (action.type) {

        case "show": return { ...state, show: action.payload };

        case "isEditting": return { ...state, isEditting: action.payload };

        case "loading": return { ...state, loading: action.payload };

        case "suggestions": return { ...state, suggestions: action.payload };

        case "suggestionName": return { ...state, suggestionName: action.payload };

        case "suggestionTitle": return { ...state, suggestionTitle: action.payload };

        case "suggestionKeywords": return { ...state, suggestionKeywords: action.payload };

        case "suggestionDescription": return { ...state, suggestionDescription: action.payload };

        case "edittingSuggestion": return { ...state, edittingSuggestion: action.payload };

        case "editSuggestionName": return { ...state, editSuggestionName: action.payload };

        case "editSuggestionTitle": return { ...state, editSuggestionTitle: action.payload };

        case "editSuggestionKeywords": return { ...state, editSuggestionKeywords: action.payload };

        case "editSuggestionDescription": return { ...state, editSuggestionDescription: action.payload };

        case "createdSuggestion": return { ...state, createdSuggestion: action.payload };

        case "domains": return { ...state, domains: action.payload };

        case "selectedDomain": return { ...state, selectedDomain: action.payload };

        case "tags": return { ...state, tags: action.payload };

        case "selectedOptions": return { ...state, selectedOptions: action.payload };

        case "tagsData": return { ...state, tagsData: action.payload };

        case "disable": return { ...state, disable: action.payload };

        default:
            return state;
    }
}