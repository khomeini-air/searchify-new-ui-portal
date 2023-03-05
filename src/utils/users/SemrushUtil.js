import CONFIG from "../../config/users/Constant";

//DOMAIN PROCESSING
export const getOrganicCompetitor = async(domain, offset, limit, database) => {
    var _domain = domain!=null? domain : "amazon.com";
    var _database = database!=null? database: "us";
    var _offset = offset!=null? offset : 0;
    var _limit = limit!=null? limit : 10;

    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrase + "&database=" 
                        + _database + "&offset="
                        + _offset + "&limit="
                        + _limit,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}


//TRAFFIC ANALYTIC PROCESSING

//KEYWORD PROCESSING
export const getKeywordOverview = async(phrase, database) => {
    var _phrase = phrase!=null? phrase : "peace";
    var _database = database!=null? database: "us";



    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrase + "&database=" 
                        + _database, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}
export const getKeywordKDI = async(phrases, database) => {
    var _phrases = phrases!=null? phrases : "peace";
    var _database = database!=null? database: "us";



    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrases + "&database=" 
                        + _database, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}

export const getKeywordBroadMatch = async(phrase, database, offset, limit) => {
    var _phrase = phrase!=null? phrase : "peace";
    var _database = database!=null? database: "us";
    var _offset = offset!=null? offset : 0;
    var _limit = limit!=null? limit : 10;


    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrase + "&database=" 
                        + _database + "&offset="
                        + _offset + "&limit="
                        + _limit,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}


export const getKeywordQuestions = async(phrase, database, offset, limit) => {
    var _phrase = phrase!=null? phrase : "peace";
    var _database = database!=null? database: "us";
    var _offset = offset!=null? offset : 0;
    var _limit = limit!=null? limit : 10;


    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrase + "&database=" 
                        + _database + "&offset="
                        + _offset + "&limit="
                        + _limit,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}

export const getKeywordRelated = async(phrase, database, offset, limit) => {
    var _phrase = phrase!=null? phrase : "peace";
    var _database = database!=null? database: "us";
    var _offset = offset!=null? offset : 0;
    var _limit = limit!=null? limit : 10;


    return await fetch(CONFIG.hostname + ':8084/api/analytic/keyword/questions?phrase='
                        + _phrase + "&database=" 
                        + _database + "&offset="
                        + _offset + "&limit="
                        + _limit,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
    });
}

