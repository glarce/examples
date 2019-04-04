const Glarce = require("Glarce")
const app = new Glarce()

const aframeTest = require('./aframe/aframe')

app.set("publicPath", "/Glarce")
app.set("devPublicPath", "/")

app.get(5, (res, req) =>
{
  res.type('video')

  res.interactivity(
  {
    3:
    {
      type: 'alert',
      title: 'Pause',
      text: 'Continue watching...'
    },
    5:
    {
      type: 'question',
      title: 'Jump',
      text: 'Do you want to jump to 5 seconds',
      buttons: [
      {
        text: 'ok',
        jumpTo: 5
      },
      {
        text: 'no'
      }]
    },
    7:
    {
      type: 'end'
    }
  })
  res.loadVids(['videos/spook.webm', 'videos/spook.mp4'])

  res.send()
})

app.get(4, (res, req) =>
{
  res.type('aframe')

  res.javascript(aframeTest.js)
  res.assets(aframeTest.assets)
  res.aframe(aframeTest.aframe)

  res.send()
})

app.start()