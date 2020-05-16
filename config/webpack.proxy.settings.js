/**
 * 192.168.21.41:80 - msp.everpoint.ru - dev,
 * 192.168.21.41:8082 - mspdev.everpoint.ru - master,
 * 192.168.21.45 - http://1veb.everpoint.ru/
 * bndev.smbn.ru - стенд нового дизайна для заказчика
 * **/

const EVERPOINT_SERVER = "192.168.21.41";
const MSP_SERVER = "navigator.smbn.ru";

module.exports = {
  EVERPOINT_SERVER,
  "/auth/*": {
    target: "http://" + EVERPOINT_SERVER,
    rewrite: function (req) {
      req.headers.host = EVERPOINT_SERVER;
    },
  },
  "/api/geoiplookup": {
    target: "https://" + MSP_SERVER,
    changeOrigin: true,
    secure: false,
    rewrite: function (req) {
      req.headers.host = MSP_SERVER;
    },
  },

  "/api/*": {
    target: "http://" + EVERPOINT_SERVER,
    rewrite: function (req) {
      req.headers.host = EVERPOINT_SERVER;
    },
  },
  "/media/*": {
    target: "http://" + EVERPOINT_SERVER,
    rewrite: function (req) {
      req.headers.host = EVERPOINT_SERVER;
    },
  },
  "/static/*": {
    target: "http://" + EVERPOINT_SERVER,
    rewrite: function (req) {
      req.headers.host = EVERPOINT_SERVER;
    },
  },
};
