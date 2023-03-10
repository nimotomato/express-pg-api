const pool = require('../database.js').default;


// Get labels and the corresponding region for each entry within the specified dates.
module.exports = getSentiments = async (startDate, endDate) => {
    const queryString =`SELECT n."date", s."label", n.region\
    FROM public.news n\
    JOIN public.sentiments s ON s.news_id = n.id\
    WHERE n."date" >= '${startDate}' AND n."date" <= '${endDate}'`


    const result = await pool.query(queryString);
    console.log(result)
    
    const news = await result.rows;


    // Select only the labels and regions
    const sentiments = news.map((item) => {
        return {
          label: item.label,
          region: item.region,
        };
      });
    

    return sentiments;
};