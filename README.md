1. Pradedamas API sujungimas

   npm install openai
   
   susikuriu API rakta
   
   bandau paslepti savo rakta .env faile
   
   problema - vite/react negali perskaityti rakto is .env failo
   
   sprendimas - https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
   
   problema - OpenAI API rakto naudojamas yra mokamas ir reikalaja kreditu

2. Randame nemokama API alternatyva - AI/ML API https://docs.aimlapi.com/

   problema - sitas API taip pat yra limituotas
   
   sprendimas - pakeisti API kategorija

3. Sprendimas - radome CoinGecko ir News API, kurie yra draugiski besimokanciu studentu atzvilgiu
   
   gauname raktus abieju API
   
   testuojame su pirmomis uzklausomis - veikia
   
   pradedame testuoti su komponentais, idedame informacija
