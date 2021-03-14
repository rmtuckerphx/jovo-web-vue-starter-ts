// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
    'AMAZON.HelpIntent': 'HelpIntent',
  },

  db: {
    FileDb: {
      pathToFile: './../../db/db.json',
    },
  },
};

export = config;
