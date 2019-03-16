const Glarce = require("Glarce")
const app = new Glarce()

app.set("publicPath", "/Glarce")
app.set("devPublicPath", "/")

app.get(5, (res, req) =>
{
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
  res.send(['videos/spook.webm', 'videos/spook.mp4'])
})

app.get(4, res => {
  res.animation({
    1: {
    attribute: 'position',
    duration: '3000',
    from: '-5 0 0',
    to: '5 360 0',
    repeat: 'indefinite'
    }
  })

  res.send('models/monkey.obj')
})

app.start()