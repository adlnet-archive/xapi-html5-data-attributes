var conf = {
    "adl" : {
      "endpoint" : "https://lrs.adlnet.gov/xapi/",
      "user" : "html5data",
      "password" : "xapidata"
    },
    "wax" : {
      "endpoint" : "https://apis4all.waxlrs.com/TCAPI/",
      "user" : "DNs0WuHHWQtnS0fysTUq",
      "password" : "NJZWkbjzLNPDDlprJvky"
    },
    "watershed" : {
      "endpoint" : "https://watershedlrs.com/api/organizations/832/lrs/",
      "user" : "CWyHPEk513jUxK",
      "password" : "RKddtcC51kTLTh"
    },
    "scormcloud" : {
      "endpoint" : "https://cloud.scorm.com/tc/VV69S05SCQ/sandbox/",
      "user" : "B0r06Wz1FkEJVN2YZNQ",
      "password" : "1uJnpOhQCLUPNscSsSY"
    },
    "learninglocker" : {
      "endpoint" : "http://lrs.learninglocker.net/data/xAPI/",
      "user" : "b633d5d36bf5af5f3aaddda23f4d6535dce90c72",
      "password" : "ffa494dfd30fc8a95990647648bd082d6f024dd0"
    }
};

// generate random email addresses -- this can be moved to sessions or cookies
var rand = Math.random().toString(36).substr(2); // remove `0.
var email = rand + "@adlnet.gov";
