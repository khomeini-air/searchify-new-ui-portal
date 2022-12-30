export const intState = {
    countOne: 0,
    countTwo: 0,
    countThree: 0,
    countFour: 0,
    countFive: 0,
    loadingA: false,
    loadingB: false,
    firstLoad: false,
    feature: "",
    domains: 0,
    domain: null,
    selectedOptions: [],
    tagsData: [],
    siteName: null,
    siteUrl: null,
    suggestionCompanyName: null,
    suggestionProductName: null,
    suggestionTitle: null,
    suggestionKeywords: null,
    suggestionDescription: null,
    tabBasic: 'nav-link firstnavtab active',
    tabDeep: 'nav-link nav-inactive secondnavtab',
    tabHistory: 'nav-link nav-inactive therdnavtab',
    tabBasicDetail: 'tab-pane fade show active',
    tabDeepDetail: 'tab-pane fade',
    tabHistoryDetail: 'tab-pane fade',
    title: null,
    suggestions: [],
    deepSuggestions: []
}

export const SeoProductReducer = (state, action) => {
    switch (action.type){ 
        case "countOne": return { ...state, countOne: action.payload };
        case "countTwo": return { ...state, countTwo: action.payload };
        case "countThree": return { ...state, countThree: action.payload };
        case "countFour": return { ...state, countFour: action.payload };
        case "countFive": return { ...state, countFive: action.payload };
        case "loadingA": return { ...state, loadingA: action.payload };
        case "loadingB": return { ...state, loadingB: action.payload };
        case "firstLoad": return { ...state, firstLoad: action.payload };
        case "feature": return { ...state, feature: action.payload };
        case "domains": return { ...state, domains: action.payload };
        case "domain": return { ...state, domain: action.payload };
        case "selectedOptions": return { ...state, selectedOptions: action.payload };
        case "tagsData": return { ...state, tagsData: action.payload };
        case "siteName": return { ...state, siteName: action.payload };
        case "siteUrl": return { ...state, siteUrl: action.payload };
        case "suggestionCompanyName": return { ...state, suggestionCompanyName: action.payload };
        case "suggestionProductName": return { ...state, suggestionProductName: action.payload };
        case "suggestionTitle": return { ...state, suggestionTitle: action.payload };
        case "suggestionKeywords": return { ...state, suggestionKeywords: action.payload };
        case "suggestionDescription": return { ...state, suggestionDescription: action.payload };
        case "tabBasic": return { ...state, tabBasic: action.payload };
        case "tabDeep": return { ...state, tabDeep: action.payload };
        case "tabHistory": return { ...state, tabHistory: action.payload };
        case "tabBasicDetail": return { ...state, tabBasicDetail: action.payload };
        case "tabDeepDetail": return { ...state, tabDeepDetail: action.payload };
        case "tabHistoryDetail": return { ...state, tabHistoryDetail: action.payload };
        case "title": return { ...state, title: action.payload };
        case "suggestions": return { ...state, suggestions: action.payload };
        case "deepSuggestions": return { ...state, deepSuggestions: action.payload };
        case "clearInput": return {...state,
           selectedOptions:[],
           suggestionCompanyName:'',
           suggestionProductName:'',
           suggestionKeywords:'',
           suggestionTitle:'',
           suggestionDescription:'',
           title:'',
           countOne:0,
           countTwo:0,
           countThree:0,
           countFour:0,
           countFive:0,
        }
        default:
            return state;
    }
}