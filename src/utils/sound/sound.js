import sound from "../../assets/sound/click.wav";

const clickSound = new Audio(sound)
clickSound.preload = 'auto'

export const playClickSound = () => {
   console.log("clicked");
   
  clickSound.currentTime = 0
  clickSound.play()
}
