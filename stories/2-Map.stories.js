import Vue from 'vue'
// mapbox的js和css通过script和link标签全局引入，通过window.mapbox调用，请检查是否已成功加载mapbox
const mapboxgl = window.mapboxgl

const map = Vue.extend({
  name: 'i-map',
  template: '<div id="map"></div>',
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFvcmV5IiwiYSI6ImNqNWhrenIwcDFvbXUyd3I2bTJxYzZ4em8ifQ.KHZIehQuWW9AsMaGtATdwA'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }
})

Vue.component('i-map', map)

// 一级目录
export default {
  title: '加载地图',
  component: { map }
}

// 二级目录
export const Basic = () => ({
  component: { map },
  template: '<i-map />'
})
