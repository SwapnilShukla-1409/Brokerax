const express = require("express");
const axios=require("axios")
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 * 10 });
const router=express.Router();
router.get('/coins/markets', async (req, res) => {
    const cacheKey = 'coins_markets_inr';
  
    // Check if data is in cache
    if (cache.has(cacheKey)) {
      console.log('Returning cached data');
      return res.json(cache.get(cacheKey));
    }
  
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'inr',
        },
      });
      cache.set(cacheKey, response.data);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  });
  
  router.get('/coin/:id', async (req, res) => {
    try {
      const coinId = req.params.id;
      const cacheKey = `coin_${coinId}`;
      if (cache.has(cacheKey)) {
        return res.json(cache.get(cacheKey));
      }
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      cache.set(cacheKey, response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });
  router.get('/coins/:coinId', async (req, res) => {
    const { coinId } = req.params;
    const cacheKey = `coins_${coinId}`;
  
    // Check if data is in cache
    if (cache.has(cacheKey)) {
      console.log('Returning cached data');
      return res.json(cache.get(cacheKey));
    }
  
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        params: {
          localization: false,
          tickers: true,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      });
  
      // Save response in cache
      cache.set(cacheKey, response.data);
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.toString());
    }
  });
  module.exports=router;