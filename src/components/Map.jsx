import React, { useEffect } from 'react';

const Map = () => {
  const popup = (title, desc) => `<style>::-webkit-scrollbar {width: 10px;} </style><div style="width:200px;overflow-y: scroll;"><h2 style="font: bold 16px arial helvetica; margin-top: 0; margin-bottom: 5px">${title}</h2>
  <img style="height: 100px;" src="./images/${title}.jpg" alt="some data">
  <p style="margin: 0;">${desc}</p></div`

  useEffect(() => {
    const map = new window.mappls.Map('map', { center: [22.1498, 79.0806] });
    map.setZoom(4);
    map.addListener("load", function () {
      var geoData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Koshal(Ayodhya)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [26.798509, 82.2043120],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Kashi(Varanashi)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [25.324479, 82.987064],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Videh-Mithila(Janakpur)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [26.7271, 85.9407],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Malwa Region(Dhar)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [22.5981, 75.3040],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Magadh(Rajgir)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [25.0262, 85.4174],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Pudradesh(Purulia)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [23.3322, 86.3616],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Ang-Bhagalpur", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [25.2425, 86.9842],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Mandrachal-Mandar", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [24.8364, 87.0349],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Java", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [-7.6145, 110.7122],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Sumatra", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [0.5897, 101.3431],
            },
          },
        ],
      };
      var riverData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Sindhu Nadi(Indus River)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [35.34020544999311, 75.58125090743809],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Saryu Nadi(Sarayu River)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [26.804899854171694, 82.235454689454],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Kaushiki Nadi(Kosi River)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [29.249888232842125, 79.10376270262742],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Yamuna Nadi", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [26.092673124775132 ,79.89525585729359],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Mahi Nadi", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [23.693683349320864, 74.5298084951452],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Sonbhadra Nadi(Son River)", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [24.465417737995992, 83.07574603595958],
            },
          },
          {
            type: "Feature",
            properties: {
              htmlPopup: popup("Ganga Nadi", 'this is the description of the image'),
            },
            geometry: {
              type: "Point",
              coordinates: [25.484434752089697, 81.7763241706744],
            },
          },
        ],
      };
      window.mappls.Marker({
        map: map,
        position: geoData,
        icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
        popupOptions: {
          offset: { bottom: [0, -20] },
        },
      });
      window.mappls.Marker({
        map: map,
        position: riverData,
        popupOptions: {
          offset: { bottom: [0, -20] },
        },
      });
    });



  }, []);

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', height: '100vh' }} id="map"></div>
  );
};

export default Map;
